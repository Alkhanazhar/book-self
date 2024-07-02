import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useContext } from "react";
import { Auth } from "./context/AuthContext";
// import Login from "./pages/Login";

const App = () => {
  const [user] = useContext(Auth);
  return (
    <Routes>
      <Route element={<Home />} path={"/"} />
      <Route
        element={user ? <CoursesPage /> : <Navigate to={"/signup"} />}
        path={"/courses"}
      />
      <Route
        element={user ? <Navigate to={"/"} /> : <Signup />}
        path={"/signup"}
      />
      <Route
        element={user ? <Navigate to={"/"} /> : <Login />}
        path={"/login"}
      />
    </Routes>
  );
};

export default App;
