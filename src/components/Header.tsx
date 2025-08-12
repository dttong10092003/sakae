
import { FileText, Lock, ChevronRight } from 'lucide-react'

export default function Header() {
    return (
        <header className="bg-white">
            <div className="max-w-7xl mx-auto px-8 py-2">
                <div className="flex items-start justify-between">
                    {/* Logo - Bên trái */}
                    <div className="flex items-center mt-4">
                        <img
                            src="https://sakae-online.net/uploads/logo/logo.png"
                            alt="Sakae Logo"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                    </div>

                    {/* Right Section - Auth và Menu */}
                    <div className="flex flex-col items-end">
                        {/* Auth Links - Trên cùng */}
                        <div className="flex items-center space-x-4 mb-2">
                            <a
                                href="/dang-ky"
                                className="text-gray-700 hover:text-red-800 text-sm transition-colors flex items-center"
                            >
                                <FileText className="w-4 h-4 mr-1 text-blue-800" />
                                Đăng ký tài khoản
                            </a>
                            <a
                                href="/dang-nhap"
                                className="text-gray-700 hover:text-red-800 text-sm transition-colors flex items-center"
                            >
                                <Lock className="w-4 h-4 mr-1 text-blue-800" />
                                Đăng nhập
                            </a>
                        </div>

                        {/* Navigation Menu - Dưới Auth */}
                        <nav className="flex items-center">
                            <a
                                href="/"
                                className="text-gray-800 hover:bg-red-700 hover:text-white px-4 py-2 rounded font-medium transition-colors text-base">
                                TRANG CHỦ
                            </a>
                            <a href="/gioi-thieu" className="text-gray-800 hover:bg-red-700 hover:text-white px-4 py-2 rounded font-medium transition-colors text-base">
                                GIỚI THIỆU
                            </a>
                            <div className="relative group">
                                <button className="text-gray-800 hover:bg-red-700 hover:text-white px-4 py-2 rounded font-medium transition-colors flex items-center text-base">
                                    KHÓA HỌC
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute left-0 w-62 bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <a href="/khoa-hoc-n5" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        Khóa học sơ cấp N5 online
                                    </a>
                                    <a href="/khoa-hoc-n4" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        Khóa học sơ cấp N4 online
                                    </a>
                                    <a href="/khoa-hoc-n3" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        Khóa học trung cấp N3 online
                                    </a>
                                    <a href="/luyen-thi" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        Khóa luyện thi N3, N2, N1
                                    </a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-gray-800 hover:bg-red-700 hover:text-white px-4 py-2 rounded font-medium transition-colors flex items-center text-base">
                                    HƯỚNG DẪN
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                {/* Dropdown Menu */}
                                <div className="absolute left-0 w-60 bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <a href="/phuong-thuc-thanh-toan" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        Phương thức thanh toán
                                    </a>
                                    <a href="/huong-dan-vao-hoc" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        Hướng dẫn vào học online
                                    </a>
                                    <a href="/chinh-sach-gia-han" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        Chính sách gia hạn khóa học
                                    </a>
                                    <a href="/chinh-sach-bao-mat" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        Chính sách bảo mật
                                    </a>
                                    <a href="/dieu-khoan-su-dung" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-red-700 hover:text-white transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        Điều khoản sử dụng
                                    </a>
                                </div>
                            </div>
                            <a href="/lien-he" className="text-gray-800 hover:bg-red-700 hover:text-white px-4 py-2 rounded font-medium transition-colors text-base">
                                LIÊN HỆ
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
