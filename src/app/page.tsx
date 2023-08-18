import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle'
import Portfolio from '@/components/Portfolio'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Service from '@/components/Service'
import ContactUs from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      {/*  Navigation  */}
      <nav class="flex flex-wrap items-center justify-between p-5 bg-white dark:bg-gray-800">
        <a class="flex title-font font-medium items-center text-gray-900 md:mb-0 order-1">
          <span class="lg:pl-6 ml-3 text-primary-500 text-bold text-2xl dark:text-secondary-500">Nakamura</span>
        </a>

        <div class="flex md:hidden order-3 sm:order-2">
          <button id="hamburger">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-8 h-8 toggle block text-primary-500 dark:text-secondary-500">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-8 h-8 toggle hidden text-primary-500 dark:text-secondary-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        </div>

        <div
          class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-primary-500 dark:border-secondary-500 md:border-none order-3 sm:order-2">
          <a href="#about"
            class="block md:inline-block text-primary-500 hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 dark:border-secondary-500 md:border-none">About</a>
          <a href="#experience"
            class="block md:inline-block text-primary-500 hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 dark:border-secondary-500 md:border-none">Experience</a>
          <a href="#services"
            class="block md:inline-block text-primary-500 hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 dark:border-secondary-500 md:border-none">Services</a>
          <a href="#portfolio"
            class="block md:inline-block text-primary-500 hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 dark:border-secondary-500 md:border-none">Portfolio</a>
          <a href="#contact"
            class="block md:inline-block text-primary-500 hover:text-secondary-500 dark:text-secondary-500 dark:hover:text-primary-500 px-3 py-3 border-b-2 border-primary-500 dark:border-secondary-500 md:border-none">Contact</a>
        </div>

        {/*  Dark Toggle  */}
        <div class="flex flex-col space-y-12 order-2 sm:order-3">
          <ThemeToggle />
        </div>
      </nav>
      {/*  hero section  */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Skills section */}
      <Skills />
      {/* Experience section */}
      <Experience />
      {/* Services */}
      <Service />
      {/* Portfolio */}
      <Portfolio />

      <ContactUs />
      <Footer />
    </main>
  )
}
