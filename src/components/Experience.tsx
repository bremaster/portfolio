'use client'

import { TypeAnimation } from 'react-type-animation';

export default function Experience() {
  return (
    <section id="experience" className="text-gray-600 dark:text-gray-200 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mt-4 text-center text-gray-900 dark:text-gray-200">Work <span
            className="text-primary-500 dark:text-secondary-500">Experience</span></h2>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary-500 dark:bg-secondary-500 inline-flex"></div>
          </div>
        </div>

        <div class="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span class="left-[40%] absolute inset-y-0 ml-10 hidden w-0.5 bg-gray-200 md:block"></span>

          <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div class="md:w-[40%]">
              <div class="flex justify-center md:justify-start">
                <span class="shrink-0">
                  <img
                    src="/logo-spotify.svg"
                    class="h-auto w-32"
                    alt="company logo"
                  />
                </span>
                <div class="relative ml-3 hidden w-full md:block">
                  <span
                    class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-100"
                  ></span>
                </div>
              </div>
            </div>
            <div class="md:w-[60%]">
              <div class="relative flex md:pl-20">
                <span
                  class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                ></span>

                <div class="mt-1 flex">
                  <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div class="md:-mt-1 md:pl-8">
                    <span class="block font-body font-bold text-grey-40"
                    >Apr 2015 - Mar 2018</span
                    >
                    <span
                      class="block pt-2 font-header text-xl font-bold uppercase text-primary"
                    >Frontend Developer</span
                    >
                    <div class="pt-2">
                      <span class="block font-body text-black"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                        venenatis enim.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div class="md:w-[40%]">
              <div class="flex justify-center md:justify-start">
                <span class="shrink-0">
                  <img
                    src="/logo-microsoft.svg"
                    class="h-auto w-32"
                    alt="company logo"
                  />
                </span>
                <div class="relative ml-3 hidden w-full md:block">
                  <span
                    class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-100"
                  ></span>
                </div>
              </div>
            </div>
            <div class="md:w-[60%]">
              <div class="relative flex md:pl-20">
                <span
                  class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                ></span>

                <div class="mt-1 flex">
                  <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div class="md:-mt-1 md:pl-8">
                    <span class="block font-body font-bold text-grey-40"
                    >Mar 2018 - September 2019</span
                    >
                    <span
                      class="block pt-2 font-header text-xl font-bold uppercase text-primary"
                    >Software Engineer</span
                    >
                    <div class="pt-2">
                      <span class="block font-body text-black"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                        venenatis enim.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div class="md:w-[40%]">
              <div class="flex justify-center md:justify-start">
                <span class="shrink-0">
                  <img
                    src="/logo-fedex.svg"
                    class="h-auto w-32"
                    alt="company logo"
                  />
                </span>
                <div class="relative ml-3 hidden w-full md:block">
                  <span
                    class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-100"
                  ></span>
                </div>
              </div>
            </div>
            <div class="md:w-[60%]">
              <div class="relative flex md:pl-20">
                <span
                  class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                ></span>

                <div class="mt-1 flex">
                  <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div class="md:-mt-1 md:pl-8">
                    <span class="block font-body font-bold text-grey-40"
                    >October 2019 - Feb 2021</span
                    >
                    <span
                      class="block pt-2 font-header text-xl font-bold uppercase text-primary"
                    >DevOps Engineer</span
                    >
                    <div class="pt-2">
                      <span class="block font-body text-black"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                        venenatis enim.</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
