<script context="module">
  export const prerender = true;
</script>

<div class="bg-white h-screen p-10 text-black">
  <h1 class="my-2 text-5xl text-black font-bold leading-tight">
    2022 Class Trip
  </h1>
  <p class="text-2xl">
    This Spring we will visit the beautiful city of Montreal in Quebec, Canada.
    Sign up here to register for the trip and receive an information packet.
  </p>

  <form
    name="tutoring"
    method="post"
    netlify
    netlify-honeypot="bot-field"
    class="bg-gray-100 mt-5 shadow-md rounded px-8 pt-6 pb-8 mb-4"
  >
    <input type="hidden" name="form-name" value="pen-friend" />
    <input type="hidden" name="bot-field" />
    <div class="mb-4">
      <label class="block text-gray-700 text-lg font-bold mb-2" for="username">
        Name
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Your full name"
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
        Email
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="text"
        placeholder="Your email address"
      />
    </div>

    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Submit
      </button>
    </div>
  </form>
</div>
