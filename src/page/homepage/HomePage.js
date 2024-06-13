import HeaderComp from "./component/HeaderComp";
import ElgoogLogo from "../../ElgoogLogo.png";
import SearchComp from "./component/SearchComp";
import EngineDetailComp from "./component/EngineDetailComp";
import React from "react";

const HomePage = () => {
    return (
        <div className="bg-white font-sans">
            <HeaderComp/>
            <main className="container mx-auto flex flex-col items-center justify-center py-16">

                <img
                    // src="https://media.geeksforgeeks.org/wp-content/uploads/20240226180944/social-(2).png"
                    src={ElgoogLogo}
                    alt="Elgoog"
                    className="mb-8"
                    style={{width: '600px'}}
                />

                <SearchComp/>
                <EngineDetailComp/>

                {/*<div*/}
                {/*    className="customize_size absolute bottom-10 right-10 bg-blue-300 px-4 py-2 rounded-lg text-sm text-gray-700">*/}
                {/*    Customize Chrome*/}
                {/*</div>*/}


            </main>
        </div>
    )

}

export default HomePage