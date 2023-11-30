import React, { useState } from "react";
import AdminPanel from "../components/AdminPanel";
import LoginForm from "../components/LoginForm";
import MyButton from "../components/MyButton";

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
            <MyButton title={"Login"} onClick={handleLog} />
         ) : (
            <MyButton title={"Logout"} onClick={handleLog} />
         )}
      </>
   );
}

export default ConditionalRendering;
