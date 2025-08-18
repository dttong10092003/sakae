import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login data:', formData)
  }

  return (
    <div className="bg-gray-100 pb-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4">
        <div className="w-full bg-white py-4">
          {/* Title */}
          <div className="text-center mb-4 border-b-1 border-gray-300 mx-4">
            <h2 className="text-2xl font-semibold text-gray-800 pb-4">Đăng nhập</h2>
          </div>

          {/* Form */}
          <form className="space-y-3 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56" onSubmit={handleSubmit}>
            {/* Tên đăng nhập */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Tên đăng nhập
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                placeholder="Tên đăng nhập"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Mật khẩu */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mật khẩu
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Mật khẩu"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Links */}
            <div className="space-y-2 text-sm text-gray-700">
              <div>
                Bạn đã có tài khoản chưa. Nếu chưa hãy nhấp{' '}
                <Link 
                  to="/register" 
                  className="text-blue-600 hover:text-blue-500"
                >
                  vào đây
                </Link>
              </div>
              <div>
                Bạn quên mật khẩu? Bấm{' '}
                <Link 
                  to="/forgot-password" 
                  className="text-blue-600 hover:text-blue-500"
                >
                  vào đây để lấy lại mật khẩu
                </Link>
                .
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
