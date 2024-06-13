import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchResultPage from "./page/searchresult/SearchResultPage";
import HomePage from "./page/homepage/HomePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/search" element={<SearchResultPage />} />
            </Routes>
        </Router>

    );
}

export default App;
