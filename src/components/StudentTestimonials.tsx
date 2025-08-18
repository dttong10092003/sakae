import { useState } from 'react'

export default function StudentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    const startX = touch.clientX

    const handleTouchEnd = (endEvent: TouchEvent) => {
      const endX = endEvent.changedTouches[0].clientX
      const diff = startX - endX

      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          nextSlide() // Swipe left - go next
        } else {
          prevSlide() // Swipe right - go prev
        }
      }

      document.removeEventListener('touchend', handleTouchEnd)
    }

    document.addEventListener('touchend', handleTouchEnd)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-8">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">CẢM NHẬN HỌC VIÊN SAKAE</h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Mobile Slider */}
      <div className="md:hidden">
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 p-6 text-white flex flex-col rounded">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
