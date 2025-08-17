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
import News from "./pages/News";
import NewsListing from "./pages/NewsListing";
import NewsDetail from "./pages/NewsDetail";
import PaymentMethods from "./pages/PaymentMethods";
import EnrollmentGuide from "./pages/EnrollmentGuide";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CourseExtensionPolicy from "./pages/CourseExtensionPolicy";

import Layout from "./layouts/Layout";
import HomeLayout from "./layouts/HomeLayout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/n5" element={<CourseN5 />} />
        <Route path="course/n4" element={<CourseN4 />} />
        <Route path="course/n3" element={<CourseN3 />} />
        <Route path="course/n321" element={<CourseN321 />} />
        <Route path="news-listing" element={<NewsListing />} />

      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetail />} />
        <Route path="payment-methods" element={<PaymentMethods />} />
        <Route path="enrollment-guide" element={<EnrollmentGuide />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="course-extension-policy" element={<CourseExtensionPolicy />} />

      </Route>
    </Routes>
  );
}

export default App;