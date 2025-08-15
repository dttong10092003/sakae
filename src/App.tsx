import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Courses from "./pages/Courses";
import CourseN5 from "./components/course/CourseN5";
import CourseN4 from "./components/course/CourseN4";
import CourseN3 from "./components/course/CourseN3";
import CourseN321 from "./components/course/CourseN321";

import Layout from "./layouts/Layout";
import HomeLayout from "./layouts/HomeLayout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/n5" element={<CourseN5 />} />
        <Route path="courses/n4" element={<CourseN4 />} />
        <Route path="courses/n3" element={<CourseN3 />} />
        <Route path="courses/n321" element={<CourseN321 />} />

      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />



      </Route>
    </Routes>
  );
}

export default App;