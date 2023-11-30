import React from "react";

function Navbar(props) {
   return (
      <nav className="bg-gray-800 p-4">
         <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">Logo</div>
            <div className="space-x-4">{props.children}</div>
         </div>
      </nav>
   );
}

export default Navbar;
