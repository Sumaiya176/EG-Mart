const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/all-products"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    All Products
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/add-product"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {/* <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg> */}
                  <svg
                    className="flex-shrink-0 w-7 h-7 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="50.969"
                    viewBox="0 0 60 50.969"
                    id="add-cart"
                    fill="currentColor"
                  >
                    <path
                      fill="#5f7a82"
                      fill-rule="evenodd"
                      d="M511.74 181.817a3.665 3.665 0 0 1-3.58-2.864l-2.78-19.1H524a12.722 12.722 0 0 0-.34 2.924 13.284 13.284 0 0 0 11.12 13.129l-.42 2.944a3.69 3.69 0 0 1-3.6 2.965h-19.02z"
                      opacity=".1"
                      transform="translate(-490 -145)"
                    ></path>
                    <path
                      fill="#5f7a82"
                      fill-rule="evenodd"
                      d="M538.82 175.908a13.283 13.283 0 0 0-1.98-26.4 13.081 13.081 0 0 0-11.2 6.312H504.6l-1.3-4.961a7.821 7.821 0 0 0-7.54-5.869H492a2.017 2.017 0 0 0 0 4.033h3.76a3.812 3.812 0 0 1 3.68 2.864l1.68 6.393.02.061 3.08 21.3a7.659 7.659 0 0 0 1.44 3.146 7.032 7.032 0 1 0 9.88 3.066h11.44a6.743 6.743 0 0 0-.7 3.045 7.03 7.03 0 1 0 10.58-6.111 8.383 8.383 0 0 0 1.44-3.247zm-29.62 16.033a3.045 3.045 0 1 1 3.02-3.045 3.047 3.047 0 0 1-3.02 3.045zm2.54-10.124a3.665 3.665 0 0 1-3.58-2.864l-2.78-19.1H524a12.722 12.722 0 0 0-.34 2.924 13.284 13.284 0 0 0 11.12 13.129l-.42 2.944a3.69 3.69 0 0 1-3.6 2.965h-19.02zm21.56 10.124a3.045 3.045 0 1 1 3.04-3.045 3.043 3.043 0 0 1-3.04 3.045zm3.54-19.9a8.939 8.939 0 0 1-1.48-.121 9.256 9.256 0 0 1-7.7-9.136 8.877 8.877 0 0 1 .48-2.924 9.277 9.277 0 0 1 8.7-6.312 9.247 9.247 0 0 1 0 18.488z"
                      transform="translate(-490 -145)"
                    ></path>
                    <path
                      fill="#5f7a82"
                      fill-rule="evenodd"
                      d="M542.86 162.779a2 2 0 0 1-2 2.017h-2.02v2.057a2 2 0 1 1-4 0V164.8h-2.04a2.017 2.017 0 0 1 0-4.034h2.04v-2.036a2 2 0 1 1 4 0v2.036h2.02a2.015 2.015 0 0 1 2 2.013z"
                      transform="translate(-490 -145)"
                    ></path>
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Add Products
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="min-h-screen">{children}</div>
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
