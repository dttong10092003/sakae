import React from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 py-4 text-sm">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="text-gray-400">/</span>
              )}
              {item.href && !item.isActive ? (
                <a 
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                >
                  {item.label}
                </a>
              ) : (
                <span className={item.isActive ? "text-blue-600 font-medium" : "text-gray-600"}>
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  )
}
