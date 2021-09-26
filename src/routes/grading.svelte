<script context=module>
  import { classes, getClassById } from "../stores.js";
  getClassById(6);
</script>

<script>
  export const gradingClass = classes;
</script>

<div class="bg-white h-full p-24 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {$gradingClass.pagetitle}
  </h1>
  <p class="text-2xl">{@html $gradingClass.pagebodycontent}</p>
</div>


