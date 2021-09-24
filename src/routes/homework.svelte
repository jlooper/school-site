<script>
  import { data } from "../stores.js";
  $: homeworkData = $data[5];
</script>

<div class="bg-white h-full p-24 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {homeworkData.PageTitle}
  </h1>
  <p class="text-2xl">{@html homeworkData.PageBodyContent}</p>
</div>
