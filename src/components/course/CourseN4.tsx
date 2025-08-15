import { ChevronRight } from 'lucide-react'

export default function CourseN4() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Content */}
                    <div className="space-y-2">
                        {/* Breadcrumb */}
                        <div className="text-red-600 font-bold text-2xl">
                            Khóa học sơ cấp N4
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl font-bold text-red-600 mb-2">
                            NỘI DUNG
                        </h1>

                        {/* Description Paragraphs */}
                        <div className="space-y-2 leading-relaxed font-base text-xl">
                            <p>
                                Chương trình N4 online với 26 bài học tương đương hơn 130 video bài giảng cụ thể, rõ ràng do đội ngũ giáo viên giàu kinh nghiệm của Nhật ngữ Sakae biên soạn học viên sẽ được học theo những kỹ năng tương ứng: Từ Vựng, Kanji, Ngữ Pháp, Nghe hiểu, Đọc hiểu. Đảm bảo thành thạo bốn kỹ năng: Nghe – Nói – Đọc – Viết. Tất cả video bài giảng đều có hình ảnh minh họa sinh động dễ học, dễ nhớ.
                            </p>
                            
                            <p>
                                Đặc biệt với sự tham gia giảng dạy của các giáo viên bản xứ người Nhật chắc chắn sẽ giúp học viên nâng cao kỹ năng nghe hiểu và phát âm chuẩn như người Nhật.
                            </p>
                        </div>

                        {/* Bullet Points */}
                        <div className="space-y-2 mt-2">
                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Nắm chắc hơn 900 từ vựng và thêm 111 cấu trúc ngữ pháp tiếng Nhật (không bao gồm ngữ pháp N5)
                                </p>
                            </div>
                            
                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Học thêm gần 200 chữ Kanji sơ cấp.
                                </p>
                            </div>
                            
                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Giao tiếp cơ bản các tình huống ở lớp học và cuộc sống xung quanh.
                                </p>
                            </div>
                            
                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Tự tin tham dự các kỳ thi như JLPT N4, Nat-Test N4, Top J...
                                </p>
                            </div>
                            
                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Có cơ hội làm việc ở các công ty Nhật tại Nhật Bản và Việt Nam.
                                </p>
                            </div>
                            
                            <div className="flex items-start">
                                <ChevronRight className="text-red-600 mr-2 mt-1 flex-shrink-0" size={20} />
                                <p className="leading-relaxed font-base text-xl">
                                    Có thể học được mọi lúc, mọi nơi, học được cả trên máy tính và trên điện thoại.
                                </p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold text-red-600 mb-4">
                                NÀO CÒN CHẦN CHỪ GÌ NỮA HÃY ĐĂNG KÝ NGAY KHÓA HỌC ONLINE N4 CỦA SAKAE HÔM NAY ĐỂ NHẬN ƯU ĐÃI KHỦNG
                            </h2>
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
                                <source src="https://sakae-online.net/uploads/course/My-Video2.mp4" type="video/mp4" />
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
                    {/* Card 1: Từ vựng */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div 
                            className="h-80 bg-cover bg-center relative"
                            style={{backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/nghieng1.png)'}}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">TỪ VỰNG</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Kanji */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div 
                            className="h-80 bg-cover bg-center relative"
                            style={{backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/ngu-phap.png)'}}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">NGỮ PHÁP</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Ngữ pháp */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div 
                            className="h-80 bg-cover bg-center relative"
                            style={{backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/kanji.png)'}}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">KANJI</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Nghe hiểu */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div 
                            className="h-80 bg-cover bg-center relative"
                            style={{backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/kototba-n4.png)'}}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">ĐỌC HIỂU</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Đọc hiểu */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div 
                            className="h-80 bg-cover bg-center relative"
                            style={{backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/Nghe-hieu-2.png)'}}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">NGHE HIỂU</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
