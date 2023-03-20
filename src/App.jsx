import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> }
  ];

  return (
    <>
      <Routes>
        {routes?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
