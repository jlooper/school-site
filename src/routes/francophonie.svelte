<script context=module>
  export async function load({ fetch }) {
    const res = await fetch(
      "https://sheetlabs.com/UML/classApi?pageroute=francophonie"
    );
    if (res.ok) return { props: { francophonieClass: await res.json() } };
    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script>
  export let francophonieClass;
</script>

<div class="bg-white h-full p-24 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {francophonieClass[0].pagetitle}
  </h1>
  <p class="text-2xl">{@html francophonieClass[0].pagebodycontent}</p>
</div>
