import React, {useEffect, useState} from "react";
import HeaderComp from "./component/HeaderComp";
import axios from "axios";
import {useLocation} from 'react-router-dom';


const SearchResultPage = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const qParam = searchParams.get('q');

    const client = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 20000
    });

    const getData = async () => {
        try {
            const response = await client.get(`/`, {
                params: {
                    query: decodeURIComponent(qParam)
                }
            });

            setData(response.data.data); // นี้ขึ้นอยู่กับโครงสร้างของ response ที่คุณได้รับมาจาก API
            console.log(response.data.data)
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
                        {data.map((item, index) => {
                            const domain = new URL(item.link)
                            const modifiedLink = domain.toString().replace(domain.origin, '').replace(/\//g, ' > ');
                            return (
                                <li key={index} className="py-4">
                                    <div className="max-w-md">
                                        <div className="cursor-pointer mx-auto" onClick={() => {
                                            window.location.href = item.link
                                        }}>
                                            <div className="flex items-center mb-2">
                                                <img src={item.icon} alt={item.title}
                                                     className="w-6 h-6 rounded-full shadow-md"/>
                                                <div className="mx-4">
                                                    <p className="text-xs">{domain.hostname}</p>
                                                    <p className="text-xs">{domain.origin}{modifiedLink}
                                                    </p>
                                                </div>
                                            </div>

                                            <a href={item.link} className="text-blue-600">{item.title}</a>
                                        </div>
                                        <p className="text-gray-700 text-xs">{item.description}</p>
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
