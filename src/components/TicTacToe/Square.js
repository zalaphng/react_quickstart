import React from "react";

function Square({ value, onSquareClick }) {
   return (
      <button
         onClick={onSquareClick}
         className="border border-gray-900 bg-white font-bold text-center w-10 h-10"
      >
         {value}
      </button>
   );
}

export default Square;
