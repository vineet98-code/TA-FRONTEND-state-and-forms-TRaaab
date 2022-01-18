import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <nav className="bg-white-800">
                <div className="">
                    <h1 className="flex items-center justify-center font-medium py-6" >Our Menu</h1>

                    <div className="">
                        <ul className="flex items-center justify-center space-x-4">
                            <li>
                                <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page" to="/all">All</Link>
                            </li>
                            {/* alt shift click */}
                            <li>
                                <Link className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/breakfast">Breakfast</Link>
                            </li>
                            <li>
                                <Link className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/lunch">Lunch</Link>
                            </li>
                            <li>
                                <Link className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/shakes">Shakes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
