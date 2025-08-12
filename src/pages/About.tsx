export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Date */}
        <div className="text-sm text-gray-800">
          Chủ nhật - 31/01/2016 15:35
        </div>

        {/* Teaching Method Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-1">PHƯƠNG CHÂM HOẠT ĐỘNG</h2>
          <div className="text-gray-800 leading-relaxed space-y-2 text-xl">
            <p>
              Đến với khóa học online của Sakae, bạn không chỉ học về ngôn ngữ, mà còn được hiểu về phong tục tập quán, về lối sống cũng
              như tác phong làm việc ở công ty Nhật.
            </p>
            <p>
              Với phương cháƚ luôn đặt lợi ích của học viên lên hàng đầu chúng tôi luôn có gắng mang đến những video bài học chất lượng
              nhất với hình ảnh rõ ràng, sắc nét, âm thanh sống động, đảm bảo cho bạn giờ học hào hứng nhất sau những giây phút mệt nhọc ở
              giảng đường, công sở.
            </p>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-1">CHƯƠNG TRÌNH HỌC</h2>
          <div className="text-gray-800 leading-relaxed space-y-2 text-xl">
            <p>
              Với hơn 500 video chất lượng được đội ngũ giáo viên Nhật- Việt dày công chuẩn bị, bao gồm các khóa học từ cấp độ N5 tới N3
              được chia thành các phần học:
            </p>

            {/* Skills List */}
            <div className="ml-4 space-y-2">
              <div className="flex items-center">
                <span className="text-red-500 mr-2">✓</span>
                <span>Từ vựng</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 mr-2">✓</span>
                <span>Ngữ pháp</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 mr-2">✓</span>
                <span>Hán tự</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 mr-2">✓</span>
                <span>Đọc hiểu</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 mr-2">✓</span>
                <span>Nghe hiểu.</span>
              </div>
            </div>

            <p>
              Bạn sẽ được thỏa sức sử dụng từ vựng lồng ghép cùng ngữ pháp để tạo thành một câu sao cho phù hợp sau khi học xong Từ
              vựng và Ngữ pháp. Bạn cũng tích lũy được một kho tàng "mưu mẹo" để làm bài đọc hiểu cho kì thi JLPT đầy thách thức. Vàng
              vàng và nhiều hơn thế nữa tại khóa học online cùng Nhật ngữ Sakae.
            </p>
          </div>
        </div>

        {/* Teaching Staff Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-1">ĐỘI NGŨ GIÁO VIÊN</h2>
          <div className="text-gray-800 leading-relaxed space-y-2 text-xl">
            <p>
              Đội ngũ giáo viên Nhật – Việt được đào tạo bài bản, tận tình với học viên và tâm huyết với công việc giảng dạy.
            </p>
            <p>
              Tham gia khóa học tiếng Nhật offline hay online tại Sakae, học viên đều được giáo viên chỉ hỗ trợ hết mình.
            </p>
          </div>
        </div>

        {/* Learning Materials Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-1">TÀI LIỆU GIÁO TRÌNH</h2>
          <div className="text-gray-800 leading-relaxed space-y-2 text-xl">
            <p>
              Tài liệu, giáo trình, video bài giảng do đội ngũ giáo viên Nhật - Việt của Sakae biên soạn dựa trên giáo trình chuẩn quốc tế Minna
              no Nihongo.
            </p>
            <p>
              Ngoài ra chúng tôi còn sử dụng một số giáo trình khác như: Mimi kara oboeru, Manabou, Try, Soumatoume...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
