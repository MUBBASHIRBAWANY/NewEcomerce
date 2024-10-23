import { useState } from "react";

import './Header.css'
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex  border-b border-gray-400 py-8">
      <a href="/" id="logo" >
        <img src="/assets/logo.svg" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div 
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span  className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span  className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span   className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div  className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div 
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
        

            <ul className="flex flex-col items-center  min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">Homet</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/Product">Products</Link>
              </li>
              <li className=" border-b border-gray-400 my-8 uppercase">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

          </div>
        </section>

        <ul className="end-0 DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/Product">Products</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
