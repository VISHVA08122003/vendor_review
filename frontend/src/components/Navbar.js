import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
  return (
    <header className="bg-purple-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <nav className="flex items-center space-x-8 text-3xl font-medium text-white" aria-label="main">
         <div className='bg-p'>
          <ul className="x">
            <li>
              <Link to="/home" className="o">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="o">
                About
              </Link>
            </li>

            <li>
              <Link to="/product" className="o0">
                Concert
              </Link>
            </li>
            <li>
              <Link to="/get" className="o0">
                User get
              </Link>
            </li>
            <li>
              <Link to="/update" className="o0">
                user update
              </Link>
            </li>
            <li>
              <Link to="/deleteuser" className="o0">
                user delete
              </Link>
            </li>
           
          </ul>
          </div>
        </nav>
      </section>
    </header>
    
  );
}
