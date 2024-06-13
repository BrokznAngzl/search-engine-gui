import {useEffect, useState} from "react";

const SearchComp = ({queryInput}) => {
    useEffect(() => {
        setQuery(queryInput);
    }, []);

    const [query, setQuery] = useState('')
    const hanndleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/search?q=" + encodeURIComponent(query);
    }

    return (
        <div className="flex items-center space-x-4">
            <form onSubmit={hanndleSubmit}>
                <input type="text" className="border border-gray-300 rounded-full px-4 py-2 w-96 mr-2.5 outline-none"
                       placeholder="Search..."
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Search</button>
            </form>

        </div>
    );
}

export default SearchComp