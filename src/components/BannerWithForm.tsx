import { useState, useEffect } from "react"

export default function BannerWithForm() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const bannerImages = [
    "https://sakae-online.net/media/images/khoa-N5.jpg",
    "https://sakae-online.net/media/images/THU.jpg",
    "https://sakae-online.net/media/images/online-N31.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [bannerImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Banner Section - 3/4 width */}
        <div className="lg:w-3/4">
          <div className="relative">
             <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full overflow-hidden">
              {bannerImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black p-2 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black p-2 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Consultation Form - 1/4 width */}
        <div className="lg:w-1/4">
          <div className="bg-[#4166b0] text-white p-6 rounded h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-center">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-center">ĐĂNG KÝ TƯ VẤN</h2>
              <p className="text-blue-100 text-center mb-6 italic">Tổng đài tư vấn, giải đáp mọi thắc mắc của bạn!</p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Điện thoại"
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#dc3545] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Đăng ký tư vấn
                </button>
              </form>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-xl font-bold">028.3720.1830</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
