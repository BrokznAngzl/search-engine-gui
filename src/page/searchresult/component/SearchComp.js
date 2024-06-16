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
            className="search-input-section bg-white border border-gray-200 shadow-md rounded-full flex items-center h-10 w-70">
            <form onSubmit={hanndleSubmit}
                  className="flex items-center w-full">

                <input
                    type="text"
                    placeholder=""
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="focus:outline-none mx-6 text-sm"
                />
                <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240226181310/mic.png"
                    alt="Google Mic"
                    className="w-3 ml-28"
                />
                <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240226181137/zoom-lens.png"
                    alt="Search Icon"
                    className="w-3 mx-2 mr-4"
                />
            </form>
        </section>
        // <div className="flex items-center space-x-4">
        //     <form onSubmit={hanndleSubmit}>
        //         <input type="text" className="border border-gray-300 rounded-full px-4 py-2 w-96 mr-2.5 outline-none"
        //                placeholder="Search..."
        //                value={query}
        //                onChange={(e) => setQuery(e.target.value)}/>
        //         {/*<button className="bg-blue-500 text-white px-4 py-2 rounded-full">Search</button>*/}
        //         <img
        //             src="https://media.geeksforgeeks.org/wp-content/uploads/20240226181137/zoom-lens.png"
        //             alt="Search Icon"
        //             className="w-6 mx-4"
        //         />
        //         <img
        //             src="https://media.geeksforgeeks.org/wp-content/uploads/20240226181310/mic.png"
        //             alt="Google Mic"
        //             className="w-6 mx-4"
        //         />
        //     </form>
        //
        // </div>
    );
}

export default SearchComp