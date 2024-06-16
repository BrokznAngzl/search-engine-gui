import ElgoogLogo from "../../../ElgoogLogo.png";
import SearchComp from "./SearchComp";

const HeaderComp = ({queryInput}) => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto pt-4 pb-4 flex items-center">
                <img onClick={() => {
                    window.location.href = '/'
                }} className="w-36 cursor-pointer"
                     src={ElgoogLogo} alt="ElgoogLogo"/>

                <SearchComp queryInput={queryInput}/>
            </div>
            <div className="container ml-48 my-1 py-2 flex">
                <p className="px-2 cursor-pointer text-gray-700 text-sm">all</p>
                <p className="px-2 cursor-pointer text-gray-700 text-sm">image</p>
            </div>
        </header>
    )

}

export default HeaderComp