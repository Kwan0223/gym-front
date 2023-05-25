import React from 'react';
import SerachBar from "../css/SerachBar";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();


    const handlePageMove = (id) => {
        switch (id) {
            case 'home':
                navigate('/');
                break;
            case 'login':
                navigate('/Login');
                break;
            case 'signUp':
                navigate('/SignUp');
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                    <div onClick={() => handlePageMove("home")} className="flex items-center">
                        <img src="/image/logo.PNG" className="h-8 mr-3" alt="Flowbite Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">헬스짱짱</span>
                    </div>
                    <div className="flex items-center md:order-2">
                        <button onClick={() => handlePageMove("login")}
                                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</button>
                        <button onClick={() => handlePageMove("signUp")}
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign
                            up</button>
                        <button data-collapse-toggle="mega-menu" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mega-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="mega-menu"
                         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;