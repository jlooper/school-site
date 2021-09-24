import axios from "axios";
import { writable } from "svelte/store";
import { asyncReadable } from "svelte-async-readable";

export const data = asyncReadable(writable(null), {
  dataProvider: () =>
    axios
      //.get("https://pokeapi.co/api/v2/ability/1/")
      .get("https://sheet2api.com/v1/uBvRjCzBSkWY/french-class-101/")
      .then((response) => response.data),
});
data.fetch().catch(() => console.error("oops, something went wrong"));
