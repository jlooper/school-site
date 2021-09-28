<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(
      "https://sheetlabs.com/UML/classApi?pageroute=vocabulary"
    );
    if (res.ok) return { props: { vocabularyClass: await res.json() } };
    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script>
  export let vocabularyClass;
</script>

<div class="bg-white h-full p-24 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {vocabularyClass[0].pagetitle}
  </h1>
  <p class="text-2xl">{@html vocabularyClass[0].pagebodycontent}</p>
</div>
