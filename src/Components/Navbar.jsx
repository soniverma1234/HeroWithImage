
const Navbar = () => {
  return (

    <nav className="flex items-center justify-between top-0 left-0 z-20 absolute py-4 px-10 w-full ">
      <h1 className="text-2xl font-bold text-white">logo</h1>

      <ul className="flex gap-6 font-medium text-gray-300-">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="about" className="hover:text-white">About</a></li>
        <li><a href="features" className="hover:text-white">Features</a></li>
        <li><a href="contact" className="hover:text-white">Contact</a></li>
      </ul>
      <button className="rounded-lg bg-white text-blue-600 px-5 py-2 font-medium hover:bg-gray-100">
        Get Started</button>
    </nav>
  )
}

export default Navbar;
