import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}

const Layout = () => {
  const location = useLocation();
  
  // Generate breadcrumb items based on current route
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const items: BreadcrumbItem[] = [{ label: 'Trang chủ', href: '/' }];
    
    pathSegments.forEach((segment, index) => {
      const isLast = index === pathSegments.length - 1;
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      
      let label = segment;
      // Map route segments to Vietnamese labels
      switch (segment) {
        case 'about':
          label = 'Giới thiệu';
          break;
        case 'courses':
          label = 'Khóa học';
          break;
        case 'contact':
          label = 'Liên hệ';
          break;
        default:
          label = segment.charAt(0).toUpperCase() + segment.slice(1);
      }
      
      if (isLast) {
        items.push({ label, isActive: true });
      } else {
        items.push({ label, href });
      }
    });
    
    return items;
  };

  return (
    <>
      <Header />
      <Breadcrumb items={getBreadcrumbItems()} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
