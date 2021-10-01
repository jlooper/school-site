<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  });
</script>

<script>
  import "../app.postcss";
  import Navbar from "../components/Navbar.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Footer from "../components/Footer.svelte";
  let open = false;
  import PageTransition from "../components/PageTransition.svelte";
  export let key;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<hr class="border-b border-gray-100 opacity-25 my-0 py-0" />

<PageTransition refresh={key}>
  <slot />
</PageTransition>

<Footer />