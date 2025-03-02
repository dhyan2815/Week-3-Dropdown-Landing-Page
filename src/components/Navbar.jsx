import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  return (
    <nav className="lexa-deca bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#" className="text-xl font-bold text-blue-600">Dhyan Patel</a>
        
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-blue-500 transition duration-300">Home</a></li>
          
          {/* Dropdown */}
          <li className="relative">
            <button
              className="hover:text-blue-500 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Features ▼
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 transform ${
                isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition">Multi-level Dropdowns</a>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setIsSubDropdownOpen(true)}
                onMouseLeave={() => setIsSubDropdownOpen(false)}
              >
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                  Advanced Features →
                </button>
                <ul
                  className={`absolute left-full top-0 mt-0 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 transform ${
                    isSubDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 transition">Animations</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 transition">Interactions</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><a href="#" className="hover:text-blue-500 transition duration-300">About</a></li>
          <li><a href="#" className="hover:text-blue-500 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
