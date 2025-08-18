import { useState } from 'react'

export default function FeaturedCourses() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const courses = [
    {
      id: 1,
      image: "https://sakae-online.net/media/images/280x247x2-26149431.png",
      path: "/courses/business-japanese",
    },
    {
      id: 2,
      image: "https://sakae-online.net/media/images/280x247x2-unnamed.png",
      path: "/courses/n4-online",
    },
    {
      id: 3,
      image: "https://sakae-online.net/media/images/280x247x2-THU-Copy.jpg",
      path: "/courses/jlpt-n3",
    },
  ]

  const nextSlide = () => {
    if (currentIndex < courses.length - 2) {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">CÁC KHÓA HỌC NỔI BẬT</h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="cursor-pointer"
            >
              <img
                src={course.image || "/placeholder.svg"}
                alt={`Khóa học ${course.id}`}
                className="w-full h-auto"
              />
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
                transform: `translateX(-${currentIndex * 50}%)`
              }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="cursor-pointer flex-shrink-0 px-2"
                  style={{ width: '50%' }}
                >
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={`Khóa học ${course.id}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}
