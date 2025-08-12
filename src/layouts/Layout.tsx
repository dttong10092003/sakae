import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const Layout = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
