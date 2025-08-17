const PaymentMethods = () => {
    return (
        <div className=" bg-white py-4 px-x">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <p className="text-sm text-gray-800 mb-4">Thứ ba - 28/04/2020 10:55</p>
                <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
                    PHƯƠNG THỨC THANH TOÁN
                </h1>
                <p className="text-black text-xl">
                    Để đăng ký khóa học tiếng Nhật Online của Nhật ngữ Sakae các bạn có thể thanh toán theo các cách sau:
                </p>

                {/* Payment Method 1 */}
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-red-600 mb-2">
                        Cách 1: Chuyển khoản qua ngân hàng
                    </h2>

                    <div className="mb-6 text-xl">
                        <p className="text-black">
                            Các bạn học viên có thể đến các phòng giao dịch, cây ATM để chuyển khoản thanh toán với nội dung như chi tiết như sau:
                        </p>
                        <p className="">
                            Nội dung chuyển khoản: <span className="font-semibold text-black">Tên khóa học_Họ tên_Số điện thoại</span>
                        </p>
                        <p className="text-black">
                            <span className="font-semibold">Ví dụ: N3 Online_Nguyen Thien An_0945716530</span>
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="text-black text-xl">
                            Bạn có thể chọn một trong các ngân hàng sau:
                        </p>

                        {/* Vietcombank */}
                        <div className="mb-4 text-xl text-red-600">
                            <h3 className="font-bold ">
                                Ngân hàng Vietcombank (Ngân hàng TMCP Ngoại Thương Việt Nam)
                            </h3>
                            <p>Chủ tài khoản: Lê Thị Phương Thảo</p>
                            <p>Số tài khoản: 0071000671528</p>
                            <p>Chi nhánh: Hồ Chí Minh</p>
                        </div>

                        {/* Techcombank */}
                        <div className="mb-8 text-xl text-green-600">
                            <h3 className="font-bold text-green-600">
                                Ngân hàng Techcombank
                            </h3>
                            <p>Chủ tài khoản: Lê Thị Phương Thảo</p>
                            <p>Số tài khoản: 19135296239015</p>
                            <p>Chi nhánh: PGD Thạnh Đa (Bình Thạnh, HCM)</p>
                        </div>
                    </div>

                    <p className="text-black text-xl">
                        Sau khi nhận được chuyển khoản của quý học viên, bộ phận ghi danh của Sakae sẽ liên hệ với quý học viên để xác nhận khóa học và kích hoạt tài khoản.
                    </p>
                </div>

                {/* Payment Method 2 */}
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">
                        Cách 2: Thanh toán trực tiếp tại Sakae
                    </h2>

                    <p className="text-black text-xl">
                        Đối với quý học viên ở gần với địa chỉ văn phòng, trụ sở của Sakae thì có thể đến thanh toán trực tiếp tại trụ sở của Sakae ở địa chỉ:
                    </p>

                    <p className="text-black text-xl">
                        11 đường số 2, Khu phố 3, P.Linh Tây, TP.Thủ Đức, TP.Hồ Chí Minh (khu 301, cách vòng xoay chợ Thủ Đức 100m)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethods;
