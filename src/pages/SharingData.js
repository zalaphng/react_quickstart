import React, { useState } from "react";
import MyButton3 from "../components/MyButton3";

function SharingData() {
   // components share data and update together

   const [count, setCount] = useState(0);

   function handleClick() {
      setCount(count + 1);
   }

   return (
      <div>
         <h1>Counters that update separately</h1>
         {/* information passdown from myapp -> mybutton3: props */}
         <MyButton3 count={count} onClick={handleClick} />
         <MyButton3 count={count} onClick={handleClick} />
      </div>
   );
}

export default SharingData;
