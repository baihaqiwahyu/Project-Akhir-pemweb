import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-[#2b1a0e] text-white">
      <h1 className="text-2xl font-bold">Barbershop</h1>

      <div className="flex space-x-8">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/services" className="hover:text-yellow-400">Services</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
      </div>

      {/* Bagian tombol login + book now berjejer */}
      <div className="flex space-x-3">
        <Link
          to="/login"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Login
        </Link>

        <Link
          to="/booking"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
