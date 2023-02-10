import Link from 'next/link'

const Header = () =>{
    return <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 font-bold text-xl">MUHAMMAD HANZALA</span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link href='/' className="mr-5 font-semibold hover:cursor-pointer hover:text-gray-900">HOME</Link>
        <Link href='/about' className="mr-5 font-semibold hover:cursor-pointer hover:text-gray-900">ABOUT</Link>
        <Link href='/blog' className="mr-5 font-semibold hover:cursor-pointer hover:text-gray-900">BLOG</Link>
        <Link href='/contact_me' className="mr-5 font-semibold hover:cursor-pointer hover:text-gray-900">CONTACT ME</Link>
      </nav>
      <Link href='/projects'>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-semibold hover:cursor-pointer">PROJECTS
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </Link>
    </div>
  </header>
}

export default Header;