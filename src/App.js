import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Error from "./Components/Error";



const routes = [
  {
    path: "/",
    element: <Main/>
  },
  {
    path: "/*",
    element: <Error/>
  },


];
function App() {
  
  return (
    <Router>

      <div className="">

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