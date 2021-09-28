<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(
      "https://sheetlabs.com/UML/classApi?pageroute=francophonie"
    );
    if (res.ok) return { props: { francophonieClass: await res.json() } };
    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script>
  export let francophonieClass;
</script>

<div class="bg-white h-full p-24 text-black">
  <h1 class="my-2 text-5xl font-bold leading-tight">
    {francophonieClass[0].pagetitle}
  </h1>
  <p class="text-2xl">{@html francophonieClass[0].pagebodycontent}</p>

<section class="bg-white border-b py-8">
  <div class="container mx-auto flex flex-wrap pt-4 pb-12">
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <div
      class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center"
    >
      <div
        class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
      >
        <a
          href=""
          class="flex flex-wrap no-underline hover:no-underline"
        >
          <div class="w-full font-bold text-2xl text-gray-800 px-6">
            {francophonieClass[0].box1header}

            <p class="text-gray-800 text-base px-6 m-5">
              {francophonieClass[0].box1content}
            </p>
          </div></a
        >
      </div>
      <div
        class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
      >
        <div class="flex items-center justify-center">
          <a
            href=""
            class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
    <div
      class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center"
    >
      <div
        class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
      >
        <a
          href=""
          class="flex flex-wrap no-underline hover:no-underline"
        >
          <div class="w-full font-bold text-2xl text-gray-800 px-6">
            {francophonieClass[0].box2header}

            <p class="text-gray-800 text-base px-6 m-5">
              {francophonieClass[0].box2content}
            </p>
          </div></a
        >
      </div>
      <div
        class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
      >
        <div class="flex items-center justify-center">
          <a
            href=""
            class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div
        class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow text-center"
      >
        <a
          href=""
          class="flex flex-wrap no-underline hover:no-underline"
        >
          <div class="w-full font-bold text-2xl text-gray-800 px-6">
            {francophonieClass[0].box3header}

            <p class="text-gray-800 text-base px-6 m-5">
              {francophonieClass[0].box3content}
            </p>
          </div></a
        >
      </div>
      <div
        class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
      >
        <div class="flex items-center justify-center">
          <a
            href=""
            class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
