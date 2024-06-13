import ElgoogLogo from "../../../ElgoogLogo.png";
import SearchComp from "./SearchComp";

const HeaderComp = ({queryInput}) => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <img onClick={() => {
                    window.location.href = '/'
                }} className="w-36 cursor-pointer"
                     src={ElgoogLogo} alt="ElgoogLogo"/>

                <SearchComp queryInput={queryInput}/>
            </div>
        </header>
    )

}

export default HeaderComp