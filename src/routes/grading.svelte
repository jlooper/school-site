<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(
      "https://sheetlabs.com/UML/classApi?pageroute=grading"
    );
    if (res.ok) return { props: { gradingClass: await res.json() } };
    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script>
  export let gradingClass;
</script>

<div class="bg-white h-screen p-10 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {gradingClass[0].pagetitle}
  </h1>
  <p class="text-2xl">{@html gradingClass[0].pagebodycontent}</p>
</div>
