import { writable } from "svelte/store";

export const classes = writable([]);
const classDetails = {};
let loaded = false;

/*export const fetchClasses = async () => {
  if (loaded) return;
  const url = `https://sheetlabs.com/UML/classApi`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
  const loadedClass = data.map((data, index) => ({
    classTitle: data.ClassTitle,
    index: index,
    pageTitle: data.PageTitle,
    pageId: data.PageId,
    pageBodyContent: data.PageBodyContent
  }));
  classes.set(loadedClass);
  loaded = true;
};*/

export const getClassById = async (id) => {
  if (classDetails[id]) return classDetails[id];

  try {
    const url = `https://sheetlabs.com/UML/classApi`;
    const res = await fetch(url);
    const data = await res.json();
    classDetails[id] = data[id];
    classes.set(classDetails[id]);
  } catch (err) {
    console.error(err);
    return null;
  }
};
