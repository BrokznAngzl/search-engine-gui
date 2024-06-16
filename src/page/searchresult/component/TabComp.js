const TabComp = ({ tabName, activeTab, handleClick }) => {
    return (
        <p
            className={`cursor-pointer text-gray-700 text-xs px-2 py-2 ${
                activeTab === tabName ? 'border-b-2 border-blue-500 inline-block' : ''
            }`}
            onClick={() => handleClick(tabName)}
        >
            {tabName}
        </p>
    );
};

export default TabComp