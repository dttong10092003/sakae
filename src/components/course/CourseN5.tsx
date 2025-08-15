export default function CourseN5() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Content */}
                    <div className="space-y-2">
                        {/* Breadcrumb */}
                        <div className="text-red-600 font-bold text-2xl">
                            Khóa học sơ cấp N5
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-medium text-red-600 mb-2">
                            KHÓA HỌC SƠ CẤP N5
                        </h1>

                        {/* Description Paragraphs */}
                        <div className="space-y-2 leading-relaxed font-base text-xl">
                            <p>
                                Bạn có nhu cầu học tiếng Nhật nhưng chưa biết bắt đầu từ đâu?
                            </p>

                            <p>
                                Bạn cần chứng chỉ ngoại ngữ để đi du học, để thăng tiến trong công việc hoặc chỉ học vì đam mê nhưng lại không có thời gian đến trường?
                            </p>

                            <p>
                                Tất cả những vấn đề khiến bạn đau đầu sẽ nhẹ nhõm hẳn đi khi đăng ký khóa học tiếng Nhật sơ cấp N5 online của trung tâm Nhật ngữ SAKAE.
                            </p>
                        </div>

                        {/* ĐỐI TƯỢNG Section */}
                        <div>
                            <h2 className="text-xl font-bold text-red-600 mb-2">
                                ĐỐI TƯỢNG:
                            </h2>
                            <div className="space-y-2 leading-relaxed font-base text-xl">
                                <p>
                                    Bất kì người già hay em nhỏ, nam nhân hay nữ giới, chỉ cần là người có hứng thú với Nhật Bản, cả về văn hóa, con người lẫn ngôn ngữ, đều có thể tham gia khóa học.
                                </p>
                                <p>
                                    Nếu bạn chưa biết gì, thậm chí là đã tìm hiểu sơ về tiếng Nhật nhưng cảm thấy chưa thể bắt đầu các khóa học cao hơn, vậy còn chần chừ gì nữa mà chưa nhanh tay đăng ký.
                                </p>
                            </div>
                        </div>

                        {/* MỤC TIÊU Section */}
                        <div>
                            <h2 className="text-xl font-bold text-red-600 mb-2">
                                MỤC TIÊU:
                            </h2>
                            <div className="space-y-2 leading-relaxed font-base text-xl">
                                <p>
                                    Có thể giao tiếp cơ bản các tình huống thường gặp ở lớp học hoặc cuộc sống xung quanh.
                                </p>
                                <p>
                                    Có thể nghe được thông tin cần thiết trong hội thoại ngắn
                                </p>
                                <p>
                                    Có thể đọc hiểu được các đoạn, các câu có chữ Hiragana, Katakana và những chữ Kanji cơ bản dùng trong sinh hoạt.
                                </p>
                                <p>
                                    Là tiền để để học lên tiếng Nhật trung cấp và cao cấp.
                                </p>
                            </div>
                        </div>

                        {/* NỘI DUNG KHÓA HỌC Section */}
                        <div>
                            <h2 className="text-xl font-bold text-red-600 mb-2">
                                NỘI DUNG KHÓA HỌC:
                            </h2>
                            <div className="space-y-2 leading-relaxed font-base text-xl">
                                <p>
                                    Chương trình sơ cấp N5 online với 25 bài học tương đương 134 video bài giảng cụ thể, rõ ràng. Học viên sẽ được đào tạo các kĩ năng tương ứng: từ vựng, ngữ pháp, kanji, nghe hiểu, đọc hiểu. Đảm bảo thành thạo 4 kĩ năng: nghe- nói- đọc- viết.
                                </p>
                                <p>
                                    Giáo trình: Do trung tâm biên soạn lại dựa trên giáo trình chuẩn quốc tế Minna no nihongo.
                                </p>
                                <p>
                                    Nắm chắc gần 1000 từ vựng.
                                </p>
                                <p>
                                    Sử dụng thành thạo 142 chữ Kanji và hơn 150 cấu trúc ngữ pháp tiếng Nhật.
                                </p>
                                <p>
                                    Giao tiếp cơ bản các tình huống ở lớp học và cuộc sống xung quanh.
                                </p>
                            </div>
                        </div>

                        {/* Registration Button */}
                        <div>
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
                                <source src="https://sakae-online.net/uploads/course/Video-toan-khoa-N5.mp4" type="video/mp4" />
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
                            style={{ backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/Hinh-bang-chu.jpg)' }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">BẢNG CHỮ CÁI</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Từ vựng */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div
                            className="h-80 bg-cover bg-center relative"
                            style={{ backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/Hinh-nen-tu-vung.jpg)' }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">TỪ VỰNG</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Ngữ pháp */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div
                            className="h-80 bg-cover bg-center relative"
                            style={{ backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/Hinh-nen-ngu-phap.jpg)' }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">NGỮ PHÁP</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Kanji */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div
                            className="h-80 bg-cover bg-center relative"
                            style={{ backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/Hinh-nen-Kanji.jpg)' }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">KANJI</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Nghe hiểu */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div
                            className="h-80 bg-cover bg-center relative"
                            style={{ backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/2064.png)' }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">NGHE HIỂU</h3>
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Đọc hiểu */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer">
                        <div
                            className="h-80 bg-cover bg-center relative"
                            style={{ backgroundImage: 'url(https://sakae-online.net/uploads/course/credit/Hinh-nen-doc-hieu.jpg)' }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-[#4166b0cc] text-white text-center py-2">
                                <h3 className="font-bold text-lg">ĐỌC HIỂU</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
