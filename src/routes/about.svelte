<script context=module>
  import { classes, getClassById } from "../stores.js";
  getClassById(4);
</script>

<script>
  export const aboutClass = classes;
</script>

<div class="bg-white h-full p-24 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {$aboutClass.pagetitle}
  </h1>
  <p class="text-2xl">{@html $aboutClass.pagebodycontent}</p>
</div>
