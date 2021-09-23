<script>
  import { data } from "../stores.js";
</script>

<div class="bg-white h-full p-24 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {$data[4].PageTitle}
  </h1>
  <p class="text-2xl">{@html $data[4].PageBodyContent}</p>
</div>

