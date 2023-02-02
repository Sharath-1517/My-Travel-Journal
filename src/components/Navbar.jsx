import React from "react";

export default function Navbar() {

    return(
        <nav className="bg-nav-color-0 p-2 flex items-center justify-center gap-x-2 mb-20 h-13">
            <img src="images/notebook.png" alt="journal" className="w-16 h-13" />
            <h3 className="text-white text-inter font-bold text-2xl">My Travel Journal</h3>
        </nav>
    );

}