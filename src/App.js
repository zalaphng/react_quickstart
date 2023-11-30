// import logo from "./logo.svg";
import "./App.css";
import MyApp from "./pages/MyApp";
import AboutPage from "./pages/AboutPage";
import {
   BrowserRouter as Router,
   Routes,
   // Switch,
   Route,
   Link,
} from "react-router-dom";
import AddingStyles from "./pages/AddingStyles";
import DisplayingData from "./pages/DisplayingData";
import Profile from "./pages/Profile";
import ConditionalRendering from "./pages/ConditionalRendering";
import RenderingList from "./pages/RenderingList";
import RespondingEvent from "./pages/RespondingEvent";
import UpdatingScreen from "./pages/UpdatingScreen";
import SharingData from "./pages/SharingData";

function App() {
   const routes = [
      {
         key: 1,
         path: "/",
         element: <MyApp />,
         label: "MyApp",
      },
      {
         key: 2,
         path: "/about-page",
         element: <AboutPage />,
         label: "AboutPage",
      },
      {
         key: 3,
         path: "/adding-styles",
         element: <AddingStyles />,
         label: "AddingStyles",
      },
      {
         key: 4,
         path: "/displaying-data",
         element: <DisplayingData />,
         label: "DisplayingData",
      },
      {
         key: 5,
         path: "/profile",
         element: <Profile />,
         label: "Profile",
      },
      {
         key: 6,
         path: "/conditional-rendering",
         element: <ConditionalRendering />,
         label: "ConditionalRendering",
      },
      {
         key: 7,
         path: "/rendering-list",
         element: <RenderingList />,
         label: "RenderingList",
      },
      {
         key: 8,
         path: "/responding-event",
         element: <RespondingEvent />,
         label: "RespondingEvent",
      },
      {
         key: 9,
         path: "/updating-screen",
         element: <UpdatingScreen />,
         label: "UpdatingScreen",
      },
      {
         key: 10,
         path: "/sharing-data",
         element: <SharingData />,
         label: "SharingData",
      },
   ];

   return (
      <>
         <Router>
            <div>
               <nav>
                  <ol>
                     {routes.map((route) => {
                        return (
                           <li key={route.key}>
                              <Link to={route.path}>{route.label}</Link>
                           </li>
                        );
                     })}
                  </ol>
               </nav>

               <Routes>
                  {routes.map((route) => {
                     return (
                        <Route
                           path={route.path}
                           key={route.key}
                           element={route.element}
                        ></Route>
                     );
                  })}
               </Routes>
            </div>
         </Router>
      </>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
   );
}

export default App;
