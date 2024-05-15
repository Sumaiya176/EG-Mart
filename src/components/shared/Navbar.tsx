import Image from "next/image";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-stone-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <Image
              src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?t=st=1715714976~exp=1715718576~hmac=5c0fe72875cd3933d295045f23b05012d31cf25e9fe99fb89676acb8e1c4e471&w=740"
              className="h-8"
              alt="Flowbite Logo"
              width={25}
              height={25}
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 172 172"
              style={{ fill: "#ff0000" }}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                // style={{mix-blend-mode: "normal"}}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#1fb141">
                  <path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path>
                </g>
              </g>
            </svg>

            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
              EG-Mart
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto "
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-stone-600">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:hover:text-black transition duration-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/all-products"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black transition duration-700 md:p-0"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black transition duration-700 md:p-0"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="block py-2 px-3 rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black transition duration-700 md:p-0 "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black transition duration-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
