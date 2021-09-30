<script>
  export let open = false;
</script>

<aside
  class="pt-20 absolute w-full h-full bg-blue-700 border-r-2 shadow-lg"
  class:open
>
  <ul class="uppercase list-reset lg:flex justify-end flex-1 items-center">
    <li class="mr-3">
      <a
        class="inline-block text-white no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
        href="/about">About</a
      >
    </li>
    <li class="mr-3">
      <a
        class="inline-block text-white no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
        href="syllabus">Syllabus</a
      >
    </li>
    <li class="mr-3">
      <a
        class="inline-block text-white no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
        href="homework">Homework</a
      >
    </li>
    <li class="mr-3">
      <a
        class="inline-block text-white no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
        href="grading">Grading</a
      >
    </li>
    <li class="mr-3">
      <a
        class="inline-block text-white no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
        href="resources">Resources</a
      >
    </li>
    <li class="mr-3">
      <a
        class="inline-block text-white no-underline hover:text-gray-300 hover:text-underline py-2 px-4"
        href="community">Community</a
      >
    </li>
  </ul>
</aside>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
  }

  .open {
    left: 0;
  }
</style>
