import React from "react";
import "../styles/AddingStyles.css";

const user = {
   name: "Test",
   imageUrl: "test.jpg",
};

function DisplayingData() {
   return (
      // {} = embed js expression
      <>
         <h1>{user.name}</h1>
         <img className="avatar" src={user.imageUrl} alt=""></img>
      </>
   );
}

export default DisplayingData;
