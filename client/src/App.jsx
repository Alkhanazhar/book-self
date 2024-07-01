import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path={"/"} />
      <Route element={<CoursesPage />} path={"/courses"} />
      <Route element={<Signup />} path={"/signup"} />
      <Route element={<Login />} path={"/login"} />
    </Routes>
  );
};

export default App;
