<script>
	import Hamburger from './Hamburger.svelte'
	import Menu from './Menu.svelte'
	
	export let sidebar = false
</script>

<header class="flex justify-between p-2 items-center text-white ">
	<nav class="flex">
      
		<Hamburger bind:open={sidebar}/>
        <a
        class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        href="/"
      >
        🇫🇷 Français 101
      </a>
	  	

	</nav>

	<Menu class="lg:w-auto hidden"/>

</header>