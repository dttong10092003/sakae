import Header from "../components/Header";
import BannerWithForm from "../components/BannerWithForm";
import WhyChooseSakae from "../components/WhyChooseSakae";
import LanguageCenterFeatures from "../components/LanguageCenterFeatures";
import FeaturedCourses from "../components/FeaturedCourses";
import StudentTestimonials from "../components/StudentTestimonials";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <BannerWithForm />
            <WhyChooseSakae />
            <LanguageCenterFeatures />
            <FeaturedCourses />
            <StudentTestimonials />
            <Footer />

        </>
    );
};

export default Home;