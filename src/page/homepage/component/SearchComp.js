import React, {createContext, useState} from "react";

const SearchComp = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }

    return (
        <section
            className="search-input-section bg-white border border-gray-200 shadow-md rounded-full flex items-center w-96">
            <form onSubmit={handleSubmit}
                  className="flex items-center w-full">
                <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240226181137/zoom-lens.png"
                    alt="Search Icon"
                    className="w-6 mx-4"
                />
                <input
                    type="text"
                    placeholder="Search Elgoog or type a URL"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input flex-1 py-4 focus:outline-none rounded-full"
                />
                <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240226181310/mic.png"
                    alt="Google Mic"
                    className="w-6 mx-4"
                />
            </form>
        </section>

    );
};

export default SearchComp;
