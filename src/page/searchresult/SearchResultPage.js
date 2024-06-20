import React, {useEffect, useState} from "react";
import HeaderComp from "./component/HeaderComp";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import parse from 'html-react-parser';


const SearchResultPage = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const qParam = searchParams.get('q');

    const client = axios.create({
        baseURL: 'https://search-engine-api-lwfl.onrender.com/',
        timeout: 20000,
    });

    const getData = async () => {
        try {
            const response = await client.get(`/`, {
                params: {
                    query: decodeURIComponent(qParam)
                }
            });

            setData(response.data.data);
            // console.log(response.data.data)
        } catch (error) {
            setError('There was an error fetching the search results.');
            console.error('Error fetching search results:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="min-h-screen">
            <HeaderComp queryInput={qParam}/>
            <main className="container mx-auto p-4">
                <div className="bg-white   pl-16 rounded-lg">

                    {/* Display search results */}
                    {error && <p className="text-red-500">{error}</p>}
                    <ul>
                        {data && data.map((item, index) => {
                            // const itemKey = item[0]
                            const itemData = item[1]
                            const domain = new URL(itemData.link)
                            const subLink = domain.toString().replace(domain.origin, '').replace(/\//g, ' > ');

                            return (
                                <li key={index} className="py-4">
                                    <div className="max-w-md">
                                        <div className="cursor-pointer mx-auto" onClick={() => {
                                            window.location.href = itemData.link
                                        }}>
                                            <div className="flex items-center mb-2">
                                                <img src={itemData.icon} alt={itemData.title}
                                                     className="w-6 h-6 rounded-full shadow-md"/>
                                                <div className="mx-4">
                                                    <p className="text-xs">{domain.hostname}</p>
                                                    <p className="text-xs">{domain.origin}{subLink}
                                                    </p>
                                                </div>
                                            </div>

                                            <a href={itemData.link} className="text-blue-600">{itemData.title}</a>
                                        </div>
                                        <p className="text-gray-700 text-xs">
                                            {parse(itemData.description.replace(qParam, '<strong>' + qParam + '</strong>'))}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </main>
        </div>
    );

};

export default SearchResultPage;
