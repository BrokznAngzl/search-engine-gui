import ElgoogLogo from "../../../ElgoogLogo.png";
import SearchComp from "./SearchComp";
import {useState} from "react";
import TabComp from "./TabComp";

const HeaderComp = ({queryInput}) => {
    const [activeTab, setActiveTab] = useState('all');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header className="bg-white shadow-md justify-center items-center">
            <div className="flex justify-center items-center">
                <div className="mx-1">
                    <img onClick={() => {
                        window.location.href = '/'
                    }} className="w-36 cursor-pointer"
                         src={ElgoogLogo} alt="ElgoogLogo"/>
                </div>
                <div className="container py-4 flex items-center">
                    <SearchComp queryInput={queryInput}/>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="mx-1">
                    <div className="w-36 cursor-pointer">
                    </div>
                </div>
                <div className="container flex items-center ml-2">
                    <TabComp tabName="All" activeTab={activeTab} handleClick={handleClick} />
                    <TabComp tabName="Images" activeTab={activeTab} handleClick={handleClick} />
                    <TabComp tabName="Shopping" activeTab={activeTab} handleClick={handleClick} />
                    <TabComp tabName="News" activeTab={activeTab} handleClick={handleClick} />
                </div>
            </div>

        </header>
    )

}

export default HeaderComp