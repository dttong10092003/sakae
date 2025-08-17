const PrivacyPolicy = () => {
    return (
        <div className=" bg-white py-4 px-4">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <p className="text-sm text-gray-800">Thứ bảy - 09/05/2020 16:07</p>
                <h1 className="text-2xl font-bold text-red-600 mb-2">
                    CHÍNH SÁCH BẢO MẬT
                </h1>

                <p className="text-black mb-4">
                    Cảm ơn các bạn đã truy cập vào website sakae-online.com được vận hành bởi Công ty TNHH Tư Vấn & Đào Tạo Ngoại Ngữ Sakae.
                </p>

                <p className="text-black mb-4">
                    Chúng tôi tôn trọng và cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn. Xin vui lòng đọc bản chính sách bảo mật dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện nhằm tôn trọng và bảo vệ quyền lợi người truy cập.
                </p>

                {/* Section 1 */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-red-600 mb-4">
                        1. Thu thập thông tin cá nhân
                    </h2>

                    <p className="text-black mb-4">
                        Các thông tin thu thập thông qua website sakae-online.com sẽ giúp chúng tôi:
                    </p>

                    <ul className="list-disc list-inside text-black mb-6 ml-4 space-y-2">
                        <li>Giải đáp thắc mắc của bạn</li>
                        <li>Nâng bật mong muốn của bạn nhằm nâng cao chất lượng dịch vụ ngày một tốt hơn</li>
                        <li>Hỗ trợ bạn khi đăng ký học trực tuyến</li>
                    </ul>

                    <p className="text-black">
                        Để truy cập và sử dụng một số dịch vụ tại sakae-online.com, các bạn có thể được yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, họ tên, số điện thoại liên lạc….) Mọi thông tin khai báo phải đảm bảo tính chính xác và hợp pháp, sakae-online.com sẽ không chịu mọi trách nhiệm liên quan đến pháp luật của thông tin khai báo.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-red-600 mb-4">
                        2. Phạm vi sử dụng thông tin
                    </h2>

                    <p className="text-black">
                        Sakae-Online.com rất coi trọng việc bảo mật thông tin khách hàng, vì vậy chúng tôi cam kết sẽ tuyệt đối không lạm dụng, không sử dụng thông tin khách hàng với mục đích không mang lại lợi ích cho khách hàng, chúng tôi cam kết không buôn bán, trao đổi thông tin bảo mật của khách hàng cho bất cứ bên thứ ba nào trừ khi điều này là cần thiết cho điều khoản trong chính sách bảo mật hoặc chúng tôi được yêu cầu phải làm như vậy theo quy định của pháp luật.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-red-600 mb-4">
                        3. Thời gian lưu trữ thông tin
                    </h2>

                    <p className="text-black mb-4">
                        sakae-online.com sẽ giữ thông tin cá nhân của khách hàng cho đến khi tài khoản của học viên ngừng hoạt động.
                    </p>

                    <p className="text-black">
                        Khách hàng có thể tự xóa hoặc vô hiệu hóa tài khoản bất kì lúc nào hoặc liên hệ với sakae-online.com
                    </p>
                </div>

                {/* Section 4 */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-red-600 mb-4">
                        4. Đối tượng chia sẻ thông tin
                    </h2>

                    <p className="text-black mb-4">
                        Những người có khả năng tiếp cận được thông tin người dùng bao gồm:
                    </p>

                    <div className="text-black space-y-2 ml-4">
                        <p>Ban quản trị.</p>
                        <p>Đội ngũ phát triển trang web</p>
                        <p>Đội ngũ bán hàng và chăm sóc khách hàng</p>
                        <p>Cơ quan nhà nước có thẩm quyền</p>
                        <p>Bên khiếu nại chúng mình được hành vi vi phạm của người dùng</p>
                        <p>Bên thứ ba có dịch vụ liên kết với Website sakae-online.com</p>
                    </div>

                    <p className="text-black mt-6 mb-4">
                        Địa chỉ của đơn vị thu thập và quản lý thông tin:
                    </p>

                    <p className="text-black mb-2">
                        Công ty TNHH Tư Vấn & Đào Tạo Ngoại Ngữ Sakae
                    </p>

                    <div className="text-black space-y-2 ml-4">
                        <p>• Địa chỉ: 17 đường số 2, Khu phố 3, P.Linh Tây, Q.Thủ Đức</p>
                        <p>• Điện thoại: 028.3720.1830</p>
                        <p>• Email: tuvan@sakae.edu.vn</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
