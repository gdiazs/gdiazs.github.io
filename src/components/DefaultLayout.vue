<script>
export default {

}
</script>
<template>
  <div>
    <div class="w-100 h-16 bg-white shadow pt-1 sticky top-0">
        <div class="flex justify-center lg:justify-start">
          <div class="mt-2 text-center lg:text-left">
            <span class="lg:ml-3 title text-2xl text-gray-600"> <a href="#">Guillermo Díaz Solís</a></span> / <span class="text-red-300">Fullstack Dev.</span>
          </div>
          <div class="lg:mr-3 lg:ml-3 mt-4 hidden lg:block">
            <ul>
              <li class="inline"><a href="#" class="p-3 hover:bg-blue-200 rounded border border-blue-200 mx-1">Blog</a></li>
              <li class="inline"><a href="#" class="p-3 hover:bg-blue-200 rounded border border-blue-200 mx-1">Apps</a></li>
              <li class="inline"><a href="#" class="p-3 hover:bg-blue-200 rounded border border-blue-200 mx-1">Currículo</a></li>
            </ul>
          </div>
        </div>

    </div>
    <div class="shadow p-5 w-11/12 m-0 m-auto mt-3 bg-white h-screen mb-3">
      <div>

      </div>
      <slot />
    </div>
    <div class="sticky bottom-0 bg-gray-800 h-16 flex lg:hidden">
        <div class="flex-1 text-center pt-2 bg-red-300 text-gray-600">
          <svg class="h-6 w-6 text-gray-600 m-0 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Experiencia
        </div>
        <div class="flex-1 text-center pt-2 text-white">
          <svg class="h-6 w-6 m-0 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Habilidades
        </div>
        <div class="flex-1 text-center pt-2 text-white">
          <svg class="h-6 w-6 m-0 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Contacto
        </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  .title{
    font-family: 'Pacifico', cursive;
  }
</style>
