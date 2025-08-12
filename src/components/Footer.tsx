export default function Footer() {
  return (
    <footer className="bg-[#4166b0] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">LIÊN HỆ</h3>
            <div className="space-y-2">
              <p className="text-sm">NHẬT NGỮ SAKAE</p>
              <div className="text-sm">
                <p>Địa chỉ: 11 Đường Số 2, Phường Linh</p>
                <p>Xuân, Thành phố Thủ Đức</p>
                <p>(khu 301, cách chợ Thủ Đức 100m)</p>
              </div>
              <p className="text-sm">Điện thoại: 028.3720.1830</p>
              <p className="text-sm">Hotline/Zalo: 0945.716.530</p>
              <p className="text-sm">Email: tuvan@sakae.edu.vn</p>
              
              {/* Social Media Icons */}
              <div className="flex gap-2 mt-4">
                {/* Facebook */}
                <a href="#" className="bg-blue-700 p-2 rounded">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="bg-blue-400 p-2 rounded">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                {/* Zalo */}
                <a href="#" className="bg-blue-500 p-2 rounded">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 5.728-.896 5.728-.584 1.837-1.998 2.045-1.998 2.045-1.292 0-2.446-.857-2.446-.857s-1.188.857-2.446.857c0 0-1.414-.208-1.998-2.045 0 0-.727-3.87-.896-5.728C7.68 8.16 8.298 8 8.298 8s.914.326 1.962.326c1.048 0 1.962-.326 1.962-.326s.914.326 1.962.326c1.048 0 1.962-.326 1.962-.326s.618.16.422 0z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="bg-red-600 p-2 rounded">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Course Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">THÔNG TIN</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm hover:text-blue-200">Khóa học sơ cấp N5 online</a>
              <a href="#" className="block text-sm hover:text-blue-200">Khóa học sơ cấp N4 online</a>
              <a href="#" className="block text-sm hover:text-blue-200">Khóa học trung cấp N3 online</a>
              <a href="#" className="block text-sm hover:text-blue-200">Khóa tiếng Nhật cho doanh nghiệp</a>
              <a href="#" className="block text-sm hover:text-blue-200">Khóa tiếng Nhật cho trẻ em, lớp 1:1</a>
              <a href="#" className="block text-sm hover:text-blue-200">Các khóa offline từ N5~N2</a>
              <a href="#" className="block text-sm hover:text-blue-200">Các khóa luyện thi JLPT từ N5~N2</a>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">BẢN ĐỒ</h3>
            <div className="bg-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6842!2d106.753987!3d10.852455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175279613da53ff%3A0xa686ab5559260c09!2s%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%202%2C%20Linh%20T%C3%A2y%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1645123456789!5m2!1sen!2s"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Facebook Page Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">FANPAGE</h3>
            <div className="bg-white overflow-hidden">
              <div className="bg-gray-800 text-white p-3">
                <div className="flex items-center gap-2">
                  <img
                    src="https://sakae-online.net/uploads/logo/logo.png"
                    alt="Sakae Logo"
                    className="w-8 h-8 rounded"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">Tiếng Nhật Sakae Thủ Đức</h4>
                    <p className="text-xs text-gray-300">454 followers</p>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="bg-gray-100 rounded mb-2">
                  <div className="relative">
                    <img
                      src="https://sakae-online.net/media/images/hinh-hoc-vien-11.jpg"
                      alt="Video thumbnail"
                      className="w-full h-32 object-cover rounded"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <img
                    src="https://sakae-online.net/uploads/logo/logo.png"
                    alt="Sakae Logo"
                    className="w-6 h-6 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Tiếng Nhật Sakae Thủ Đức</p>
                    <p className="text-xs">11 hours ago</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  🌸 撮影することも思い出を残すーつの方法です。
                  <br />
                  Sakaeの生徒の皆さん、忘れられない七夕の季節を過ごされたことを願っています。🎋
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
