export default function LanguageCenterFeatures() {
  return (
    <div className="max-w-7xl mx-auto py-4 px-8 bg-white">
      <div className="grid lg:grid-cols-4 gap-12 items-start">
        {/* Left side - Student image */}
        <div className="lg:col-span-1 flex justify-center">
          <img
            src="https://sakae-online.net/media/images/hinh-hoc-vien-11.jpg"
            alt="Học viên Sakae với chứng chỉ"
            className="w-full max-w-md"
          />
        </div>

        {/* Right side - Title and Features */}
        <div className="lg:col-span-3 space-y-8">
          {/* Main heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            TRUNG TÂM TIẾNG NHẬT TỐT NHẤT THỦ ĐỨC
          </h2>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1: Operating Method */}
            <div className="flex gap-4">
              <img
                src="https://sakae-online.net/media/images/92x92x2-icon-1_10_03.png"
                alt="Phương cách hoạt động"
                className="w-16 h-16 flex-shrink-0"
              />
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-red-600">PHƯƠNG CÁCH HOẠT ĐỘNG</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Đến với khóa học online của Sakae, bạn không chỉ học về ngôn ngữ, mà còn được hiểu về phong tục tập
                  quán, về lối sống cũng như tác phong làm việc ở công ty Nhật.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Với phương cách luôn đặt lợi ích của học viên lên hàng đầu chúng tôi luôn cố gắng mang đến những video
                  bài học chất lượng nhất với hình ảnh rõ ràng, sắc nét, âm thanh sống động, đảm bảo cho bạn giờ học hào
                  hứng nhất sau những giây phút mệt nhọc ở giảng đường, công sở.
                </p>
              </div>
            </div>

            {/* Feature 2: Curriculum */}
            <div className="flex gap-4">
              <img
                src="https://sakae-online.net/media/images/92x92x2-icon-2_10_03.png"
                alt="Chương trình học"
                className="w-16 h-16 flex-shrink-0"
              />
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-red-600">CHƯƠNG TRÌNH HỌC</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Với hơn 500 video chất lượng được đội ngũ giáo viên Nhật- Việt đầy công chuẩn bị, bao gồm các khóa học
                  từ cấp độ N5 tới N3 được chia thành các phần học: Từ vựng, Ngữ pháp, Hán tự, Đọc hiểu, Nghe hiểu.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Bạn sẽ được thỏa sức sử dụng từ vựng lồng ghép cùng ngữ pháp để tạo thành một câu sao cho phù hợp sau
                  khi học xong Từ vựng và Ngữ pháp. Bạn cũng tích lũy được một kho tàng "mưu mẹo" để làm bài đọc hiểu cho
                  kì thi JLPT đầy thách thức. Vàng vàng và nhiều hơn thế nữa tại khóa học online cùng Nhật ngữ Sakae.
                </p>
              </div>
            </div>

            {/* Feature 3: Teaching Staff */}
            <div className="flex gap-4">
              <img
                src="https://sakae-online.net/media/images/92x92x2-icon-3_16_07.png"
                alt="Đội ngũ giáo viên"
                className="w-16 h-16 flex-shrink-0"
              />
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-red-600">ĐỘI NGŨ GIÁO VIÊN</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Đội ngũ giáo viên Nhật – Việt được đào tạo bài bản, tận tình với học viên và tâm huyết với công việc
                  giảng dạy. Tham gia khóa học tiếng Nhật offline hay online tại Sakae, học viên đều được giáo viên chỉ hỗ
                  trợ hết mình.
                </p>
              </div>
            </div>

            {/* Feature 4: Materials */}
            <div className="flex gap-4">
              <img
                src="https://sakae-online.net/media/images/92x92x2-icon-4_14_07.png"
                alt="Tài liệu giáo trình"
                className="w-16 h-16 flex-shrink-0"
              />
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-red-600">TÀI LIỆU, GIÁO TRÌNH</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Tài liệu, giáo trình, video bài giảng do đội ngũ giáo viên Nhật - Việt của Sakae biên soạn dựa trên giáo
                  trình chuẩn quốc tế Minna no Nihongo. Ngoài ra chúng tôi còn sử dụng một số giáo trình khác như: Mimi
                  kara oboeru, Manabou, Try, Soumattoume...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
