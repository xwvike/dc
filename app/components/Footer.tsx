export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} 华盛顿特区介绍网站。保留所有权利。</p>
        <p className="mt-2">本网站仅用于教育目的。</p>
      </div>
    </footer>
  )
}

