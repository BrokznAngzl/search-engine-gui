import React, {useEffect, useState} from "react";

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
        <section
            className="search-input-section bg-white border border-gray-200 shadow-md rounded-full flex items-center h-10 w-full max-w-md">
            <form onSubmit={hanndleSubmit}
                  className="flex items-center w-full">

                <input
                    type="text"
                    placeholder=""
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="focus:outline-none mx-6 text-sm w-9/12"
                />
                <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240226181310/mic.png"
                    alt="Google Mic"
                    className="w-3 ml-28 cursor-pointer"
                />
                <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240226181137/zoom-lens.png"
                    alt="Search Icon"
                    className="w-3 mx-2 mr-4 cursor-pointer"
                    onClick={hanndleSubmit}
                />
            </form>
        </section>
    );
}

export default SearchComp