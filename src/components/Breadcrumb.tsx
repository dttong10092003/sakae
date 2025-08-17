import { Link, useLocation } from "react-router-dom";
import { routeNameMap } from "../data/routeNameMap";
import { newsItems } from "../data/newsData";

interface BreadcrumbItem {
  label: string;
  link: string | null;
}

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Create breadcrumb items array
  const breadcrumbItems: BreadcrumbItem[] = [];

  // Add home
  breadcrumbItems.push({
    label: "Trang chủ",
    link: "/"
  });

  // Handle news detail page (/news/:id)
  if (pathnames[0] === "news" && pathnames[1]) {
    breadcrumbItems.push({
      label: routeNameMap["news"] || "Tin tức",
      link: "/news"
    });

    // Find the news item by ID to get its title
    const newsId = pathnames[1];
    const newsItem = newsItems.find(item => item.id === newsId);
    const newsTitle = newsItem ? newsItem.title : "Chi tiết tin tức";

    breadcrumbItems.push({
      label: newsTitle,
      link: null
    });
  }
  // Handle course detail page specially
  else if (pathnames[0] === "course" && pathnames[1]) {
    breadcrumbItems.push({
      label: "Khóa học",
      link: "/courses"
    });

    breadcrumbItems.push({
      label: "Chi tiết khóa học",
      link: null
    });
  }
  // Handle news page
  else if (pathnames[0] === "news") {
    // Check if this is a news detail page
    if (pathnames[1]) {
      breadcrumbItems.push({
        label: routeNameMap["news"] || "Tin tức",
        link: "/news"
      });

      breadcrumbItems.push({
        label: "Chi tiết tin tức",
        link: null
      });
    } else {
      // Regular news listing page
      breadcrumbItems.push({
        label: routeNameMap["news"] || "Tin tức",
        link: null
      });
    }
  }
  // Handle courses page
  else if (pathnames[0] === "courses") {
    breadcrumbItems.push({
      label: routeNameMap["courses"] || "Khóa học",
      link: null
    });
  }
  // Handle search page
  else if (pathnames[0] === "search") {
    breadcrumbItems.push({
      label: routeNameMap["search"] || "Tìm kiếm",
      link: null
    });
  }
  // Handle other pages
  else {
    pathnames.forEach((value, index) => {
      const isLast = index === pathnames.length - 1;
      const to = "/" + pathnames.slice(0, index + 1).join("/");

      breadcrumbItems.push({
        label: routeNameMap[value] || value.charAt(0).toUpperCase() + value.slice(1),
        link: isLast ? null : to
      });
    });
  }

  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className=" bg-white py-3 border-b border-gray-200">
        <div className="relative">
          <ul className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                {index > 0 && <span className="text-gray-400">/</span>}
                {item.link ? (
                  <Link
                    to={item.link}
                    className="text-[#333333] hover:text-[#1d509a] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#212529]">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
          {/* Blue underline - nằm trong max-w-7xl container */}
          <div className="absolute bottom-[-12px] left-0 h-0.5 bg-[#1d509a]" style={{ width: '210px' }}></div>
        </div>
      </div>
    </div>
  );
}
