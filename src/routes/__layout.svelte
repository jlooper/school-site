<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  });
</script>

<script>
  import "../app.postcss";
  import Navbar from '../components/Navbar.svelte'
  import Sidebar from '../components/Sidebar.svelte'
  let open = false;
  import PageTransition from "../components/PageTransition.svelte";
  export let key;
</script>

<!--<nav id="header" class="fixed w-full z-30 top-0 text-white gradient">
  <div
    class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
  >
    <div class="pl-4 flex items-center">
      <a
        class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        href="/"
      >
        🇫🇷 Français 101
      </a>
    </div>
    <div class="block lg:hidden pr-4">
      <button>
        <svg width="32" height="24">
          <line id="top" x1="0" y1="2" x2="32" y2="2" />
          <line id="middle" x1="0" y1="12" x2="24" y2="12" />
          <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
        </svg>
      </button>
    </div>

    <div
      class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      id="nav-content"
    >
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
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
      </ul>
      <a
          href="community"
        id="navAction"
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Community
    </a>
    </div>
  </div>
  <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>-->

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>

<PageTransition refresh={key}>
  <div class="body h-screen"><slot /></div>
</PageTransition>


