"use client"

export default function WhyChooseSakae() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-8">
            {/* Main heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                TẠI SAO BẠN NÊN HỌC TIẾNG NHẬT TRỰC TUYẾN TẠI SAKAE?
            </h2>

            {/* Benefits with red checkmarks */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-2">
                    <img src="https://sakae-online.net/media/images/icon-0.png" alt="Check icon" className="w-8 h-8" />
                    <span className="text-red-600 font-semibold text-sm md:text-xl">4 tháng chinh phục JLPT N3</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src="https://sakae-online.net/media/images/icon-1.png" alt="Check icon" className="w-8 h-8" />
                    <span className="text-red-600 font-semibold text-sm md:text-xl">Học online mọi lúc, mọi nơi</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src="https://sakae-online.net/media/images/icon-2.png" alt="Check icon" className="w-8 h-8" />
                    <span className="text-red-600 font-semibold text-sm md:text-xl">
                        Hệ thống bài giảng sinh động dễ học dễ nhớ
                    </span>
                </div>
            </div>

            {/* Main content area */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left side - Text content */}
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed text-base">
                        Chắc hẳn khi nhắc đến phương pháp học tập này, nhiều người vẫn sẽ có những thắc mắc như lợi ích khi học
                        tiếng Nhật online là gì? và chất lượng khóa học có được đảm bảo như khóa học trực tiếp tại trung tâm? và
                        tại sao nên tham gia khóa học online tại Nhật Ngữ Sakae?
                    </p>

                    <div>
                        <div className="bg-gray-100 p-4 border border-gray-300">
                            <p className="text-gray-800 leading-relaxed">
                                Tham gia khóa học bạn sẽ được tư vấn hỗ trợ lộ trình cụ thể cho từng mục tiêu riêng biệt, và bạn sẽ
                                nhanh chóng "master" ngôn ngữ này và tiếp cận được nhiều cơ hội quý giá.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-4 border border-gray-300">
                            <p className="text-gray-800 leading-relaxed">
                                Bạn cũng yên tâm rằng dù học online hay trực tiếp tại trung tâm bạn vẫn sẽ được nghê giảng, được giao tiếp
                                hỗ trợ từ đội ngũ giáo viên Việt – Nhật chuyên nghiệp, chuyên môn cao và đầy nhiệt huyết.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-4 border border-gray-300">
                            <p className="text-gray-800 leading-relaxed">
                                Ưu điểm vượt trội của khóa học này bạn có thể ngồi ở bất cứ đâu, vào bất cứ lúc nào cũng có thể học hiệu
                                quả thông qua những công cụ có hỗ trợ internet.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-4 border border-gray-300">
                            <p className="text-gray-800 leading-relaxed">
                                Học phí của lớp học truyền cũng thấp hơn, rẻ hơn và tiết kiệm hơn so với học tại trung tâm mà chất lượng
                                lại không hề thay đổi, với cuộc sống hiện đại ngày nay Sakae tận dụng những lợi ích của công nghệ thông
                                tin đem lại để cung cấp một dịch vụ dạy - học tiếng Nhật phù hợp và chất lượng nhất với nhu cầu học ngoại
                                ngữ đang ngày càng gia tăng hiện nay.
                            </p>
                        </div>
                    </div>

                    {/* Learn More Button */}
                    <button className="bg-[#dc3545] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2">
                        TÌM HIỂU THÊM THÔNG TIN
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Right side - Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            src="https://sakae-online.net/media/images/hinh-hoc-vien.jpg"
                            alt="Học viên Sakae với chứng chỉ"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
