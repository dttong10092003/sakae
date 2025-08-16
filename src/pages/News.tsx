import { Link } from 'react-router-dom'
import { newsItems } from '../data/newsData'

export default function News() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4">
                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {newsItems.map((item) => (
                        <div key={item.id} className="bg-white border-b border-gray-200">
                            {/* News Image */}
                            <Link to={`/new/${item.id}`} className="block">
                                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover cursor-pointer"
                                    />
                                </div>
                            </Link>

                            {/* News Content */}
                            <div className="pt-2 pb-16 text-left">
                                {/* News Title */}
                                <Link to={`/new/${item.id}`} className="block">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-[#4166b0] transition-colors duration-200 leading-tight cursor-pointer">
                                        {item.title}
                                    </h3>
                                </Link>

                                {/* News Meta */}
                                <div className="flex items-center justify-start text-sm text-gray-500 space-x-4">
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        {item.date}
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                        </svg>
                                        <Link to="/news-listing" className="text-xs font-medium hover:text-[#4166b0] transition-colors duration-200 cursor-pointer">
                                            {item.category}
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
