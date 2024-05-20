import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Error from "./Components/Error";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";



const routes = [
  {
    path: "/",
    element: <Main/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/*",
    element: <Error/>
  },


];
function App() {
  
  return (
    <Router>

      <div className="bg-gray-100">

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;