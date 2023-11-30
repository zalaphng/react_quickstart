import React, { useState } from "react";
import AdminPanel from "../components/AdminPanel";
import LoginForm from "../components/LoginForm";

function ConditionalRendering() {
   let [isLoggedIn, setIsLoggedIn] = useState(false);

   const handleLog = () => {
      setIsLoggedIn(!isLoggedIn);
   };

   //    if (isLoggedIn) {
   //       content = <AdminPanel />;
   //    } else {
   //       content = <LoginForm />;
   //    }
   //    return <div>{content}</div>;

   // ternary operator

   return (
      <>
         {/* logical && syntax: return result of right expression */}
         <div>{isLoggedIn && <p>Hello, Admin!</p>}</div>

         <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>
         {isLoggedIn ? (
            <button onClick={handleLog}>Login</button>
         ) : (
            <button onClick={handleLog}>Logout</button>
         )}
      </>
   );
}

export default ConditionalRendering;
