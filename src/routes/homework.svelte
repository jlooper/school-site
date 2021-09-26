<script context=module>
  import { classes, getClassById } from "../stores.js";
  getClassById(5);
</script>

<script>
  export const hwClass = classes;
</script>

<div class="bg-white h-full p-24 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {$hwClass.pagetitle}
  </h1>
  <p class="text-2xl">{@html $hwClass.pagebodycontent}</p>
</div>
