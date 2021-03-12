<template>
  <div>
    <div class="relative bg-gray-50 overflow-hidden">
      <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div class="relative h-full max-w-screen-xl mx-auto">
          <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
          </svg>
          <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#" aria-label="Home">
                  <Logo/>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div class="text-center">
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Software development with
              <br class="xl:hidden"/>
              <span class="text-green-500">craft
            </span>
            </h2>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              With a focus on performance, user experience, and security, we craft software solutions to meet your exact needs.
            </p>
            <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div class="rounded-md shadow">
                <a href="#contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:border-green-600 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Contact us
                </a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#partners" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-500 bg-white hover:text-green-400 focus:outline-none focus:border-green-200 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Partners -->
    <div id="partners" class="bg-white">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p class="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">
          Some of our partners
        </p>
        <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="platform.png" alt="Platform Marketing"/>
          </div>
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="msm.png" alt="Main Street Marketing"/>
          </div>
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="filedit.png" alt="FiledIt"/>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div id="contact" class="bg-gray-50">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to learn more?
          <br/>
          Need support?
          <br/>
          <span class="text-green-500">Contact us today.
          </span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="mailto:support@craftcodery.com" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-white">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center md:order-2">
          <a href="https://www.facebook.com/craftcodery" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook
            </span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://github.com/craftcodery" class="ml-6 text-gray-400 hover:text-gray-500">
            <span class="sr-only">GitHub
            </span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-center text-base leading-6 text-gray-400">
            &copy; 2020 Craft Codery LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Logo from '@/components/Logo.vue';

  export default Vue.extend({
    components: {Logo},
  })
</script>
