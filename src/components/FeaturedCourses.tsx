export default function FeaturedCourses() {

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

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">CÁC KHÓA HỌC NỔI BẬT</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
      </div>
  )
}
