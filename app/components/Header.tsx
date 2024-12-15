import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#about" className="text-gray-700 hover:text-blue-600">关于DC</Link></li>
          <li><Link href="#attractions" className="text-gray-700 hover:text-blue-600">主要景点</Link></li>
          <li><Link href="#history" className="text-gray-700 hover:text-blue-600">历史</Link></li>
        </ul>
      </nav>
    </header>
  )
}

