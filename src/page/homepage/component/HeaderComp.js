import React from "react";

const HeaderComp = () => {
    const kusecscUrl = 'https://kuse.csc.ku.ac.th/'
    const kusecscFanPage = 'https://www.facebook.com/KUSECSC/'
    const kusecscTiktok = 'https://www.tiktok.com/@admission_kuse'

    return (
        <nav className="site-navigation py-4">
            <div className="container mx-auto flex items-center justify-between px-5">
                <a href="#" className="font-semibold text-lg"></a>
                <div className="flex items-center space-x-4">
                    <a href={kusecscFanPage} className="text-sm text-gray-500 hover:text-blue-500 ml-auto">
                        Fanpage
                    </a>
                    <a href={kusecscTiktok} className="text-sm text-gray-500 hover:text-blue-500">
                        TikTok
                    </a>
                    <button onClick={() => {
                        window.location.href = kusecscUrl
                    }}
                            className="sign-in-btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                        KUSE CSC
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComp;