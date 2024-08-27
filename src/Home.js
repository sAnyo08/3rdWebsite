import React from 'react';
import Table from './components/Table';
// import './test.css'; // Uncomment if you have additional CSS
// import { Link } from 'react-router-dom'; // Uncomment if you use React Router

function Home() {
  const handleSummariseClick = (item) => {
    // Implement the summarise functionality here
    console.log(`Summarising ${item}`);
  };

  return (
    <>
<Table />
      {/*<div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          {['Item One', 'Item Two', 'Item Three'].map((item, index) => (
            <div key={index} role="button" className="flex items-center w-full p-3 py-1 pl-4 pr-1 leading-tight transition-all rounded-lg hover:bg-blue-gray-50">
              {item}
              <div className="grid ml-auto place-items-center justify-self-end">
                <button
                  className="relative h-10 max-h-[40px] w-100 max-w-[100px] select-none rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10"
                  type="button"
                  onClick={() => handleSummariseClick(item)}
                >
                  Summarise
                </button>
              </div>
            </div>
          ))}
        </nav>
      </div>*/}
    </>
  );
}

export default Home;
