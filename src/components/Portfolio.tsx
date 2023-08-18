export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="text-gray-600 dark:text-gray-200 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-10">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mt-4 text-center text-gray-900 dark:text-gray-200">My <span
              className="text-primary-500 dark:text-secondary-500">Works</span></h2>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-primary-500 dark:bg-secondary-500 inline-flex"></div>
            </div>
          </div>

          <div className="content grid grid-cols-4">
            <div className="webdev grid-item w-full sm:w-auto">
              <img className="p2 w-auto h-full mx-auto sm:mx-2.5 my-2.5" alt="port-img-1" src="/web-dev-1.jpg" />
            </div>
            <div className="logo webdev grid-item w-full sm:w-auto">
              <img className="p2 w-auto h-full mx-auto sm:mx-2.5 my-2.5" alt="port-img-2" src="/web-dev-2.jpg" />
            </div>
            <div className="webdev grid-item w-full sm:w-auto">
              <img className="p2 w-auto h-full mx-auto sm:mx-2.5 my-2.5" alt="port-img-3" src="/web-dev-3.jpg" />
            </div>
            <div className="appdev grid-item w-full sm:w-auto">
              <img className="p2 w-auto h-full mx-auto sm:mx-2.5 my-2.5" alt="port-img-4" src="/app-dev-1.jpg" />
            </div>
            <div className="logo grid-item w-full sm:w-auto">
              <img className="p2 w-auto h-full mx-auto sm:mx-2.5 my-2.5" alt="port-img-5" src="/logo-1.jpg" />
            </div>
            <div className="appdev logo grid-item w-full sm:w-auto">
              <img className="p2 w-auto h-full mx-auto sm:mx-2.5 my-2.5" alt="port-img-6" src="/app-dev-2.jpg" />
            </div>
            <div className="logo grid-item w-full sm:w-auto">
              <img className="p2 w-auto h-full mx-auto sm:mx-2.5 my-2.5" alt="port-img-7" src="/logo-2.jpg" />
            </div>
            <div className="webdev appdev grid-item w-full sm:w-auto">
              <img className="p2 w-auto h-full mx-auto sm:mx-2.5 my-2.5" alt="port-img-8" src="/web-dev-2.jpg" />
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 dark:text-gray-200 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-10">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-primary-500 dark:text-secondary-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-200">10+</h2>
                  <p className="leading-relaxed">Experience</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-primary-500 dark:text-secondary-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-200">200+</h2>
                  <p className="leading-relaxed">Projects completed</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-primary-500 dark:text-secondary-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-200">100+</h2>
                  <p className="leading-relaxed">Happy clients</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-primary-500 dark:text-secondary-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-gray-200">25+</h2>
                  <p className="leading-relaxed">Awards won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
