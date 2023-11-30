import logo from "./logo.svg";
import "./App.css";
import MyApp from "./pages/MyApp";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import AddingStyles from "./pages/AddingStyles";

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
  ];

  return (
    <>
      <Router>
        <div>
          <nav>
              <ul>
              {
                routes.map((route) => {
                  return (
                    <li>
                      <Link to={route.path}>{route.label}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          
        <Routes>
          {
            routes.map((route) => {
              return <Route path={route.path} key={route.key} element={route.element}></Route>;
            })
          }
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
