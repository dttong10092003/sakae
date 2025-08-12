export default function StudentTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "TÔ UYÊN",
      background: "ĐH KINH TẾ - LUẬT TP.HCM",
      image: "https://sakae-online.net/media/images/80x75x1-To-Uyen.jpg",
      content:
        "Video bài giảng của Sakae rất sinh động, có nhiều hình ảnh giúp em nhớ lâu. Học Kanji, từ vựng, hay ngữ pháp đều có hình ảnh minh họa hết. Em có thể học mọi lúc mọi nơi, rất tiện lợi. Cảm ơn Sakae nhiều.",
    },
    {
      id: 2,
      name: "PHẠM THỊ HẰNG",
      background: "SV CĐ VINATEX",
      image: "https://sakae-online.net/media/images/80x75x1-Hang.jpg",
      content:
        "Trước mình có học khóa N5, N4 trực tiếp tại Sakae nên kha yên tâm về chất lượng, năm nay mình học năm cuối nên lịch học trên trường tăm tùm, không theo lớp trực tiếp được bèn chuyển qua học online thử. Thấy video bài giảng của các thầy có khá hay, nhiều hình ảnh sinh động dễ thuộc bài.",
    },
    {
      id: 3,
      name: "NGUYỄN KHÁNH HUY",
      background: "CỰU SV ĐH NÔNG LÂM TP.HCM",
      image: "https://sakae-online.net/media/images/80x75x1-Khanh-Huy.jpg",
      content:
        "Khóa tiếng Nhật trong công việc đã giúp mình đậu phỏng vấn đơn ký sự làm việc tại Nhật Bản. Các tình huống rất thực tế, dễ hiểu.",
    },
  ]

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">CẢM NHẬN HỌC VIÊN SAKAE</h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 p-6 text-white flex flex-col rounded"
            >
              {/* Testimonial Content - Top */}
              <div className="flex-1 mb-6">
                <p className="text-sm leading-relaxed text-white">{testimonial.content}</p>
              </div>

              {/* Student Info - Bottom */}
              <div className="flex gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h3 className="font-bold text-sm text-white mb-1">{testimonial.name}</h3>
                  <p className="text-blue-100 text-sm">{testimonial.background}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
