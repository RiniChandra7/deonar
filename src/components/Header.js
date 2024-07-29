import React from "react";

const Header = ({cityList, langList, userName}) => {
    return (
    <header className="bg-white shadow-md fixed w-full flex items-center justify-between py-3 px-4 z-10">
        <div className="flex items-center space-x-4">
          <img src={process.env.PUBLIC_URL+"/logo192.png"} alt="Brand Logo" className="h-8" />
          <h1>Deonar</h1>
        </div>
        <div className="flex items-center space-x-4">
          <select className="rounded p-2">
            {cityList.map((city) => <option key={city}>{city}</option>)}
          </select>
          <select className="rounded p-2">
            {langList.map((lang) => <option key={lang}>{lang}</option>)}
          </select>
          <div className="font-semibold">Hi {userName}</div>
        </div>
      </header>
    );
};

export default Header;