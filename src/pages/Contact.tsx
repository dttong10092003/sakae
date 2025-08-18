export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Google Maps - Full Width */}
        <div className="mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6842!2d106.753987!3d10.852455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175279613da53ff%3A0xa686ab5559260c09!2s%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%202%2C%20Linh%20T%C3%A2y%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1645123456789!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-8">THÔNG TIN LIÊN HỆ</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">NHẬT NGỮ SAKAE</h3>
                
                <div className="space-y-3 text-gray-600 text-sm ml-6">
                  <div>
                    <p>Đ/c: 11 Đường Số 2, Phường Linh Xuân, TP.Hồ Chí Minh</p>
                    <p>(khu 301, cách vòng xoay chợ Thủ Đức 100m)</p>
                  </div>
                  
                  <div>
                    <p>Điện thoại: 028.3720.1830 - Zalo/Hotline: 0945.716.530</p>
                  </div>
                  
                  <div>
                    <p>Email: tuvan@sakae.edu.vn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-8">GỬI THÔNG TIN LIÊN HỆ</h2>
            
            <form className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="name" className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                  Tên:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Họ và tên"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center">
                <label htmlFor="email" className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center">
                <label htmlFor="phone" className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                  Số điện thoại:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Điện thoại"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center">
                <label htmlFor="address" className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                  Địa chỉ:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Địa chỉ"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center">
                <label htmlFor="title" className="w-32 text-sm font-medium text-gray-700 flex-shrink-0">
                  Tiêu đề:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Chủ đề"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-start">
                <label htmlFor="message" className="w-32 text-sm font-medium text-gray-700 flex-shrink-0 pt-3">
                  Nội dung:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Nội dung"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                />
              </div>
              
              <div className="flex items-center">
                <button
                  type="submit"
                  className="w-32 bg-[#1d509a] hover:bg-[#ae0001] text-white font-semibold py-3 px-4 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  GỬI LIÊN HỆ
                </button>
                <div className="flex-1"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
