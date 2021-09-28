<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(
      "https://sheetlabs.com/UML/classApi?pageroute=syllabus"
    );
    if (res.ok) return { props: { syllabusClass: await res.json() } };
    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script>
  export let syllabusClass;
</script>

<div class="bg-white h-full p-24 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {syllabusClass[0].pagetitle}
  </h1>
  <p class="text-2xl">{@html syllabusClass[0].pagebodycontent}</p>
</div>
