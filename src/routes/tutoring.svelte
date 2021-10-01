<script context="module">
  export const prerender = true;
</script>

<div class="bg-white h-screen p-10 text-black">
  <h1 class="my-2 text-5xl text-black font-bold leading-tight">Tutoring</h1>
  <p class="text-2xl">
    Do you need a little extra help? Sign up to be matched with a private tutor
    using this form.
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
    <div class="mb-6">
      <label class="block text-gray-700 text-lg font-bold mb-2" for="password">
        Where do you need help in particular? For example, vocabulary, reading
        comprehension, or communication?
      </label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="message"
        placeholder="Help wanted"
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
