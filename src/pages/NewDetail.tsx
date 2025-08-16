import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { newsItems } from '../data/newsData'
import NewsContent1 from '../components/new/NewsContent1'
import NewsContent2 from '../components/new/NewsContent2'
import NewsContent3 from '../components/new/NewsContent3'
import NewsContent4 from '../components/new/NewsContent4'

export default function NewDetail() {
    const { id } = useParams<{ id: string }>()

    // Scroll to top when component mounts or ID changes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    // Find the current news item based on the ID from URL
    const currentNews = newsItems.find(item => item.id === id)

    // Get related articles (the other 3 news items)
    const relatedArticles = newsItems.filter(item => item.id !== id)

    // Function to render content based on ID
    const renderContentByID = (newsId: string) => {
        switch (newsId) {
            case '1':
                return <NewsContent1 />
            case '2':
                return <NewsContent2 />
            case '3':
                return <NewsContent3 />
            case '4':
                return <NewsContent4 />
            default:
                return (
                    <div className="mb-8">
                        <p className="text-gray-600">Nội dung đang được cập nhật...</p>
                    </div>
                )
        }
    }

    // If no news item found, show default content
    if (!currentNews) {
        return (
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <h2 className="text-5xl font-semibold text-gray-800 mb-4">Tin tức không tìm thấy</h2>
                    <p className="text-sm text-gray-800 mb-4">Tin tức bạn đang tìm kiếm không tồn tại.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4">
                {/* Dynamic Title based on ID */}
                <h2 className="text-5xl font-semibold text-gray-800 mb-4 uppercase">{currentNews.title}</h2>

                {/* Dynamic Content Component based on ID */}
                {renderContentByID(currentNews.id)}

                {/* Related Articles Section */}
                <div className="pt-4">
                    <h3 className="text-3xl text-gray-800 mb-6">BÀI VIẾT LIÊN QUAN</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-30">
                        {relatedArticles.map((article) => (
                            <div key={article.id} className="bg-white ">
                                <Link to={`/new/${article.id}`}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="bject-cover"
                                    />
                                </Link>
                                <Link to={`/new/${article.id}`}>
                                    <h4 className="text-2xl text-blue-600 hover:text-blue-800 transition-colors mb-2 line-clamp-2 hover:underline">
                                        {article.title}
                                    </h4>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
