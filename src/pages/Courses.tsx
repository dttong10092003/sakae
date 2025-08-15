import { Link } from 'react-router-dom'

interface Course {
    id: string
    title: string
    image: string
    description?: string
}

const courses: Course[] = [
    {
        id: 'n5',
        title: 'Khóa học sơ cấp N5',
        image: 'https://sakae-online.net/media/course/280x247x2-illustration-concept-online-course-with-hand-holding-phone-with-graduation-cap_22052-2518.png'
    },
    {
        id: 'n4',
        title: 'Khóa học sơ cấp N4',
        image: 'https://sakae-online.net/media/course/280x247x2-unnamed.png'
    },
    {
        id: 'n3',
        title: 'Khóa học trung cấp N3',
        image: 'https://sakae-online.net/media/course/280x247x2-THU-Copy.jpg'
    },
    {
        id: 'n1-n2-n3',
        title: 'Khóa luyện thi N3, N2, N1',
        image: 'https://sakae-online.net/media/course/280x247x2-JLPT-N3.jpg'
    }
]

export default function Courses() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pb-4">
                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className="text-center">
                            {/* Course Image */}
                            <Link to={`/course/${course.id}`}>
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-auto hover:opacity-80 transition-opacity duration-200"
                                />
                            </Link>

                            {/* Course Title */}
                            <Link
                                to={`/course/${course.id}`}
                                className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                            >
                                {course.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
