<script context="module">
  export async function load({ fetch }) {
		const res = await fetch('https://sheetlabs.com/UML/classApi?pageroute=about');
		if (res.ok) return { props: { aboutClass: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
  };
</script>

<script>
  export let aboutClass;
</script>


<div class="bg-white h-screen p-10 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {aboutClass[0].pagetitle}
  </h1>
  <p class="text-2xl">{@html aboutClass[0].pagebodycontent}</p>
</div>
