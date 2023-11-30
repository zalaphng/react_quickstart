import { useState } from "react";

export default function MyButton2() {
   const [count, setCount] = useState(0);

   function handleClick() {
      setCount(count + 1);
   }

   return (
      <button
         className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded text-white font-bold"
         onClick={handleClick}
      >
         Clicked {count} times
      </button>
   );
}
