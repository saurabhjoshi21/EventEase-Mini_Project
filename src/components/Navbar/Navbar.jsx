// Navbar.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { EventContext } from '../../context/EventContext';


const Navbar = () => {
  // Get the context value, ensuring it's not undefined
  const eventContext = useContext(EventContext);

  // If the context is undefined, prevent destructuring error
  if (!eventContext) {
    console.error("Navbar must be used within an EventProvider");
    return null; // Prevents rendering if context is missing
  }

  const { setIsModalOpen } = eventContext;

  return (
    <nav className="bg-[#F5FEFD] shadow-md p-4 flex justify-end space-x-10 w-full items-center sticky top-0 z-40">
      <div className="flex space-x-6 lg:space-x-10 items-center w-full">
        <img src={logo} id="logo" className="flex p-0 m-0 w-20 mr-auto " />
        <Link to="/" className="text-gray-700 transition duration-300 ease-in-out hover:text-purple-600">Home</Link>
        <Link to="/events" className="text-gray-700 transition duration-300 ease-in-out hover:text-purple-600">View Events</Link>
        <Link to="/login" className="text-gray-700 border border-gray-400 rounded px-4 py-2 transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-purple-500 to-purple-700 ">Login/SignUp</Link>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white w-fit whitespace-nowrap rounded hover:bg-purple-500 transition-colors">
        Create Event
      </button>

    </nav>
  );
};

export default Navbar;
