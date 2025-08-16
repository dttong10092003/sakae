import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import { newsItems } from '../data/newsData'

export default function NewsListing() {
    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex gap-8 px-4">
                    {/* Left Sidebar - 1/4 */}
                    <div className="w-1/4">
                        {/* Danh mục sản phẩm */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">DANH MỤC SẢN PHẨM</h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/course/n5" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                                        <span className="mr-2">📘</span>
                                        Khóa sơ cấp N5
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/n4" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                                        <span className="mr-2">📘</span>
                                        Khóa sơ cấp N4
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/n3" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                                        <span className="mr-2">📘</span>
                                        Khóa trung cấp N3
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/n321" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                                        <span className="mr-2">📘</span>
                                        Khóa tiếng Nhật thương cấp N2
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Tin tức nổi bật */}
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">TIN TỨC NỔI BẬT</h2>
                            {newsItems.map((item) => (
                                <div key={item.id} className="bg-white border-b border-gray-200 overflow-hidden mb-4">
                                    <Link to={`/new/${item.id}`}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    </Link>
                                    <div className="py-4">
                                        <Link to={`/new/${item.id}`}>
                                            <h3 className="text-3xl text-blue-600 hover:text-blue-800 cursor-pointer transition-colors mb-2 leading-tight">
                                                {item.title}
                                            </h3>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - 3/4 */}
                    <div className="w-3/4">
                        {/* Breadcrumb Component */}
                        <Breadcrumb />

                        {/* News Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4">
                            {newsItems.slice().reverse().map((item) => (
                                <div key={item.id} className="bg-white border-b border-gray-200">
                                    {/* News Image */}
                                    <Link to={`/new/${item.id}`} className="block">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-36 object-cover cursor-pointer"
                                        />
                                    </Link>

                                    {/* News Content */}
                                    <div className="pb-16 pt-2">
                                        {/* News Title */}
                                        <Link to={`/new/${item.id}`} className="block">
                                            <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-200 leading-tight cursor-pointer line-clamp-2 overflow-hidden">
                                                {item.title}
                                            </h3>
                                        </Link>

                                        {/* News Meta */}
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {item.date}
                                            </span>
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" clipRule="evenodd" />
                                                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                                </svg>
                                                <Link to="/news-listing" className="text-xs font-medium hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                                    {item.category}
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
