import React, { useState } from 'react';

const Table = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="relative overflow-x-auto shadow-lg rounded-lg my-4 mx-4 md:mx-8 lg:mx-16">
            <div className="bg-gradient-to-r from-blue-500 via-teal-600 to-blue-800 p-2 rounded-lg">
                <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300 border-separate border-spacing-0">
                    <thead className="text-xs text-gray-900 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400 border-b-2 border-gray-300 dark:border-gray-600">
                        <tr>
                            <th className="px-4 py-3 border-r border-gray-300 dark:border-gray-600">Grievance Id</th>
                            <th className="px-4 py-3 border-r border-gray-300 dark:border-gray-600">Slum Location</th>
                            <th className="px-4 py-3 border-r border-gray-300 dark:border-gray-600">Grievance</th>
                            <th className="px-4 py-3 border-r border-gray-300 dark:border-gray-600">Get Contact</th>
                            <th className="px-4 py-3 text-center border-r border-gray-300 dark:border-gray-600">
                                <span className="sr-only">Summarize</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600 font-medium text-gray-800 dark:text-gray-100">
                                Apple MacBook Pro 17"
                            </td>
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600">Get Contact</td>
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600">Laptop</td>
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600">
                                <button
                                    onClick={toggleModal}
                                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button"
                                >
                                    Dept Contacts
                                </button>
                            </td>
                            <td className="px-6 py-4 text-center border-r border-gray-300 dark:border-gray-600">
                                <a href="/">
                                    <button className="bg-blue-600 text-white dark:bg-blue-700 hover:underline  font-medium rounded-lg text-sm px-3 py-2.5 text-center">
                                        Summarize
                                    </button>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600 font-medium text-gray-800 dark:text-gray-100">
                                Microsoft Surface Pro
                            </td>
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600">White</td>
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600">Laptop PC</td>
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600">
                                <button
                                    onClick={toggleModal}
                                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button"
                                >
                                    Dept Contacts
                                </button>
                            </td>
                            <td className="px-6 py-4 text-center border-r border-gray-300 dark:border-gray-600">
                            <a href="/">
                            <button className="bg-blue-600 text-white dark:bg-blue-700 hover:underline  font-medium rounded-lg text-sm px-3 py-2.5 text-center">
                                Summarize
                            </button>
                        </a>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600 font-medium text-gray-800 dark:text-gray-100">
                                Magic Mouse 2
                            </td>
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600">Black</td>
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600">Accessories</td>
                            <td className="px-6 py-4 border-r border-gray-300 dark:border-gray-600">
                                <button
                                    onClick={toggleModal}
                                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button"
                                >
                                    Dept Contacts
                                </button>
                            </td>
                            <td className="px-6 py-4 text-center border-r border-gray-300 dark:border-gray-600">
                            <a href="/">
                            <button className="bg-blue-600 text-white dark:bg-blue-700 hover:underline  font-medium rounded-lg text-sm px-3 py-2.5 text-center">
                                Summarize
                            </button>
                        </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-lg p-4">
                        <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-600 pb-3">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Get Dept Contact</h3>
                            <button
                                onClick={toggleModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 1" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="space-y-4 py-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                        </div>
                        <div className="flex items-center justify-end border-t border-gray-200 dark:border-gray-600 pt-3">
                            <button
                                onClick={toggleModal}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                I accept
                            </button>
                            <button
                                onClick={toggleModal}
                                className="ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg py-2.5 px-5 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Table;
