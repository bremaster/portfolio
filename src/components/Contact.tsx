export default function ContactUs() {
  return (
    <section id="contact" className="text-gray-600 dark:text-gray-200 body-font relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col w-full">
          <h2 className="text-3xl font-medium title-font text-gray-900 dark:text-gray-200 text-center">Contact</h2>
          <div className="flex my-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary-500 dark:bg-secondary-500 inline-flex"></div>
          </div>

          {/* <div className="lg:w-1/2 md:w-2/3 mx-auto text-center">
            <div className="flex flex-col">
              <div className="bg-green-400 border border-green-500 rounded shadow p-4" id="alert-success">
                <strong>Thank you!</strong> We have received your message and will get back to you soon.
              </div>
              <div className="bg-red-400 text-white font-bold border border-red-500 rounded shadow p-4" id="alert-danger">
                <strong>Ooops!</strong> Something went wrong. Please try again or contact us on <a href="tel:9043086992"
                  className="underline">(+91) 90430 86992</a> or <a href="tel:9940174916" className="underline">99401 74916</a>.
              </div>
              <div className="bg-red-400 text-white font-bold border border-red-500 rounded shadow p-4" id="alert-phone-error">
                Please enter the correct phone number. Don't enter any whitespace or letters.
              </div>
              <div className="bg-red-400 text-white font-bold border border-red-500 rounded shadow p-4" id="alert-form-error">
                Please fill all the required fields.
              </div>
              <div className="bg-red-400 text-white font-bold border border-red-500 rounded shadow p-4" id="alert-email-error">
                The email you have entered is not valid. Please enter a valid email address.
              </div>
            </div>
          </div> */}
          <form id="contactForm" name="contact-form"
            className="lg:w-1/2 md:w-2/3 mx-auto form bg-white p-6 my-10 relative rounded-lg">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 dark:focus:border-secondary-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                  <input type="tel" id="phone" name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 dark:focus:border-secondary-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 dark:focus:border-secondary-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-gray-600">Enter your message</label>
                  <textarea id="message" name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 dark:focus:border-secondary-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button id="btnContactUs"
                  className="flex mx-auto text-white bg-primary-500 dark:bg-secondary-500 border-0 py-2 px-8 focus:outline-none hover:bg-secondary-500 dark:hover:bg-primary-500 rounded text-lg">Submit</button>
              </div>

            </div>
          </form>
        </div>
      </div>

    </section>
  )
}
