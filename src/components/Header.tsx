import { FileText, Lock, ChevronRight, Menu, ChevronDown } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({})

    // Function to check if a path is active
    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/'
        }
        return location.pathname.startsWith(path)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setExpandedMenus({}) // Reset expanded menus when closing
    }

    const toggleSubmenu = (menuKey: string) => {
        setExpandedMenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }))
    }

    return (
        <header className="bg-white relative">
            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div className="flex items-center justify-between px-4 py-2">
                    {/* Menu Button - Left */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-red-700"
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Logo - Center */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://sakae-online.net/uploads/logo/logo.png"
                            alt="Sakae Logo"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                    </div>

                    {/* Empty space for balance */}
                    <div className="w-10"></div>
                </div>

                {/* Auth Links Row - Below Logo */}
                <div className="flex items-center justify-end px-4 pb-2 space-x-4">
                    <a
                        href="/register"
                        className="text-gray-700 hover:text-red-800 text-sm transition-colors flex items-center"
                    >
                        <FileText className="w-4 h-4 mr-1 text-blue-800" />
                        Đăng ký tài khoản
                    </a>
                    <a
                        href="/login"
                        className="text-gray-700 hover:text-red-800 text-sm transition-colors flex items-center"
                    >
                        <Lock className="w-4 h-4 mr-1 text-blue-800" />
                        Đăng nhập
                    </a>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2">
                    <div className="flex items-start justify-between">
                        {/* Logo - Left */}
                        <div className="flex items-center mt-4">
                            <img
                                src="https://sakae-online.net/uploads/logo/logo.png"
                                alt="Sakae Logo"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>

                        {/* Right Section - Auth và Menu */}
                        <div className="flex flex-col items-end">
                            {/* Auth Links - Top */}
                            <div className="flex items-center space-x-4 mb-2">
                                <a
                                    href="/register"
                                    className="text-gray-700 hover:text-red-800 text-sm transition-colors flex items-center"
                                >
                                    <FileText className="w-4 h-4 mr-1 text-blue-800" />
                                    Đăng ký tài khoản
                                </a>
                                <a
                                    href="/login"
                                    className="text-gray-700 hover:text-red-800 text-sm transition-colors flex items-center"
                                >
                                    <Lock className="w-4 h-4 mr-1 text-blue-800" />
                                    Đăng nhập
                                </a>
                            </div>

                            {/* Navigation Menu */}
                            <nav className="flex items-center">
                                <a
                                    href="/"
                                    className={`px-4 py-2 rounded font-medium transition-colors text-base ${isActive('/')
                                        ? 'bg-red-700 text-white'
                                        : 'text-gray-800 hover:bg-red-700 hover:text-white'
                                        }`}>
                                    TRANG CHỦ
                                </a>
                                <a
                                    href="/about"
                                    className={`px-4 py-2 rounded font-medium transition-colors text-base ${isActive('/about')
                                        ? 'bg-red-700 text-white'
                                        : 'text-gray-800 hover:bg-red-700 hover:text-white'
                                        }`}>
                                    GIỚI THIỆU
                                </a>
                                <div className="relative group">
                                    <a
                                        href="/courses"
                                        className={`px-4 py-2 rounded font-medium transition-colors flex items-center text-base ${isActive('/courses')
                                            ? 'bg-red-700 text-white'
                                            : 'text-gray-800 hover:bg-red-700 hover:text-white'
                                            }`}>
                                        KHÓA HỌC
                                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </a>

                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 w-62 bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                        <a href="/course/n5" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Khóa học sơ cấp N5 online
                                        </a>
                                        <a href="/course/n4" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Khóa học sơ cấp N4 online
                                        </a>
                                        <a href="/course/n3" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Khóa học trung cấp N3 online
                                        </a>
                                        <a href="/course/n321" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Khóa luyện thi N3, N2, N1
                                        </a>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <a
                                        href='/news'
                                        className={`px-4 py-2 rounded font-medium transition-colors flex items-center text-base ${isActive('/news')
                                            ? 'bg-red-700 text-white'
                                            : 'text-gray-800 hover:bg-red-700 hover:text-white'
                                            }`}>
                                        HƯỚNG DẪN
                                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </a>

                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 w-60 bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                        <a href="/payment-methods" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Phương thức thanh toán
                                        </a>
                                        <a href="/enrollment-guide" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Hướng dẫn vào học online
                                        </a>
                                        <a href="/course-extension-policy" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Chính sách gia hạn khóa học
                                        </a>
                                        <a href="/privacy-policy" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Chính sách bảo mật
                                        </a>
                                        <a href="/terms-of-service" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4 mr-2" />
                                            Điều khoản sử dụng
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href="/contact"
                                    className={`px-4 py-2 rounded font-medium transition-colors text-base ${isActive('/contact')
                                        ? 'bg-red-700 text-white'
                                        : 'text-gray-800 hover:bg-red-700 hover:text-white'
                                        }`}>
                                    LIÊN HỆ
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Modal */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/30 bg-opacity-50"
                        onClick={toggleMenu}
                    />
                    
                    {/* Menu Content */}
                    <div className="fixed top-0 left-0 w-2/3 h-full bg-white overflow-y-auto">
                        {/* Navigation Links */}
                        <nav>
                            {/* TRANG CHỦ */}
                            <div className="mb-2">
                                <a
                                    href="/"
                                    className={`block w-full text-left py-3 px-4 rounded font-medium transition-colors ${
                                        isActive('/') 
                                            ? 'bg-red-700 text-white' 
                                            : 'text-gray-800 hover:bg-gray-100'
                                    }`}
                                    onClick={toggleMenu}
                                >
                                    TRANG CHỦ
                                </a>
                            </div>

                            {/* GIỚI THIỆU */}
                            <div className="mb-2">
                                <a
                                    href="/about"
                                    className={`block w-full text-left py-3 px-4 rounded font-medium transition-colors ${
                                        isActive('/about') 
                                            ? 'bg-red-700 text-white' 
                                            : 'text-gray-800 hover:bg-gray-100'
                                    }`}
                                    onClick={toggleMenu}
                                >
                                    GIỚI THIỆU
                                </a>
                            </div>

                            {/* KHÓA HỌC */}
                            <div className="mb-2">
                                <button
                                    onClick={() => toggleSubmenu('courses')}
                                    className="flex items-center justify-between w-full text-left py-3 px-4 rounded font-medium text-gray-800 hover:bg-gray-100 transition-colors"
                                >
                                    KHÓA HỌC
                                    <ChevronDown 
                                        className={`w-4 h-4 transition-transform ${
                                            expandedMenus.courses ? 'rotate-180' : ''
                                        }`} 
                                    />
                                </button>
                                {expandedMenus.courses && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        <a 
                                            href="/course/n5" 
                                            className="block py-2 px-3 text-sm text-gray-600 hover:text-red-700 transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            Khóa học sơ cấp N5 online
                                        </a>
                                        <a 
                                            href="/course/n4" 
                                            className="block py-2 px-3 text-sm text-gray-600 hover:text-red-700 transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            Khóa học sơ cấp N4 online
                                        </a>
                                        <a 
                                            href="/course/n3" 
                                            className="block py-2 px-3 text-sm text-gray-600 hover:text-red-700 transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            Khóa học trung cấp N3 online
                                        </a>
                                        <a 
                                            href="/course/n321" 
                                            className="block py-2 px-3 text-sm text-gray-600 hover:text-red-700 transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            Khóa luyện thi N3, N2, N1
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* HƯỚNG DẪN */}
                            <div className="mb-2">
                                <button
                                    onClick={() => toggleSubmenu('guides')}
                                    className="flex items-center justify-between w-full text-left py-3 px-4 rounded font-medium text-gray-800 hover:bg-gray-100 transition-colors"
                                >
                                    HƯỚNG DẪN
                                    <ChevronDown 
                                        className={`w-4 h-4 transition-transform ${
                                            expandedMenus.guides ? 'rotate-180' : ''
                                        }`} 
                                    />
                                </button>
                                {expandedMenus.guides && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        <a 
                                            href="/payment-methods" 
                                            className="block py-2 px-3 text-sm text-gray-600 hover:text-red-700 transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            Phương thức thanh toán
                                        </a>
                                        <a 
                                            href="/enrollment-guide" 
                                            className="block py-2 px-3 text-sm text-gray-600 hover:text-red-700 transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            Hướng dẫn vào học online
                                        </a>
                                        <a 
                                            href="/course-extension-policy" 
                                            className="block py-2 px-3 text-sm text-gray-600 hover:text-red-700 transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            Chính sách gia hạn khóa học
                                        </a>
                                        <a 
                                            href="/privacy-policy" 
                                            className="block py-2 px-3 text-sm text-gray-600 hover:text-red-700 transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            Chính sách bảo mật
                                        </a>
                                        <a 
                                            href="/terms-of-service" 
                                            className="block py-2 px-3 text-sm text-gray-600 hover:text-red-700 transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            Điều khoản sử dụng
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* LIÊN HỆ */}
                            <div className="mb-2">
                                <a
                                    href="/contact"
                                    className={`block w-full text-left py-3 px-4 rounded font-medium transition-colors ${
                                        isActive('/contact') 
                                            ? 'bg-red-700 text-white' 
                                            : 'text-gray-800 hover:bg-gray-100'
                                    }`}
                                    onClick={toggleMenu}
                                >
                                    LIÊN HỆ
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
