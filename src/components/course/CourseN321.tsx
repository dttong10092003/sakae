import { ChevronRight } from 'lucide-react'

export default function CourseN321() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Content */}
                    <div className="space-y-2">
                        {/* Breadcrumb */}
                        <div className="text-red-600 font-bold text-2xl">
                            Khóa luyện thi N3, N2, N1
                        </div>

                        {/* Description Paragraphs */}
                        <div className="space-y-2 leading-relaxed font-base text-xl">
                            <p>
                                Các bạn học viên thân mến, việc thi lấy bằng Năng Lực Nhật Ngữ N3~N1 là cách để chứng tỏ có thể đánh giá khả năng tiếng Nhật của bản thân tốt nhất. Việc luyện thi sẽ giúp các bạn nâng cao hiểu biết về tiếng Nhật nhiều hơn. Điều quan trọng trước khi đi thi là phải nắm rõ được cấu trúc đề thi để có hướng phần bố thời gian làm bài cho hợp lý. Do đó trong khóa luyện thi JLPT N3~N1 này <strong className="text-black">Sakae sẽ giúp các bạn:</strong>
                            </p>
                        </div>

                        {/* Bullet Points */}
                        <div className="space-y-2 mt-2 text-red-600">
                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Phân tích cấu trúc đề thi
                                </p>
                            </div>

                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Làm quen và cơ sẻ với các dạng đề thi
                                </p>
                            </div>

                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Phân bố thời gian làm bài một cách hợp lý nhất.
                                </p>
                            </div>

                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Lấy điểm đọc hiểu nhiều nhất có thể
                                </p>
                            </div>
                        </div>

                        {/* Additional Content */}
                        <div className="space-y-2 leading-relaxed font-base text-xl mt-4">
                            <p>
                                Ngoài việc được tương tác trực tiếp với giáo viên trong giờ học, học viên còn được tạo tài khoản làm bài tập trắc nghiệm, làm bài thi trực tuyến có sát với đề thi thật.
                            </p>

                            <p>
                                Với lộ trình luyện thi đầy đủ, bám sát đề thi JLPT N3~N1, cùng đội ngũ giáo viên nhiệt tình, tận tâm Sakae tin chắc sẽ giúp ích rất nhiều cho các bạn học viên trong kỳ thi JLPT N3~N1 sắp tới.
                            </p>
                        </div>

                        {/* Registration Button */}
                        <div className="mt-6">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-16 rounded transition-colors duration-200">
                                Đăng ký khóa học
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Video */}
                    <div className="lg:sticky lg:top-8">
                        <div className="overflow-hidden aspect-video">
                            {/* Video Element */}
                            <video
                                className="w-full h-full"
                                controls
                                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e5e7eb'/%3E%3Cstop offset='100%25' stop-color='%23d1d5db'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg)'/%3E%3C/svg%3E"
                            >
                                <source src="https://sakae-online.net/uploads/course/Video-PR-toan-khoa-N3.mp4" type="video/mp4" />
                                Trình duyệt của bạn không hỗ trợ video HTML5.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lộ trình học Section */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800">
                        LỘ TRÌNH HỌC
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Bảng chữ cái */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div
                            className="h-80 bg-cover bg-center relative"
                            style={{ backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/man-hinh-thi-JLPT-1.JPG)' }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">BÀI TẬP TRẮC NGHIỆM JLPT N3</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Từ vựng */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div
                            className="h-80 bg-cover bg-center relative"
                            style={{ backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/JLPT-N2.JPG)' }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">BÀI TẬP TRẮC NGHIỆM JLPT N2</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Ngữ pháp */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div
                            className="h-80 bg-cover bg-center relative"
                            style={{ backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/JLPT-N1.JPG)' }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">BÀI TẬP TRẮC NGHIỆM JLPT N1</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
