const SearchResultComp = ({title, link, description}) => {
    return (
        <div className="result mb-6">
            <a href={link} className="text-xl text-blue-600 hover:underline">{title}</a>
            <p className="text-green-600">{link}</p>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default SearchResultComp;

