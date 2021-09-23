import { readable } from "svelte/store";
import Sheet2API from "sheet2api-js";

let data = readable(null, (set) => {
  const url =  '';
  // const url = "https://sheet2api.com/v1/uBvRjCzBSkWY/french-class-101/";

  Sheet2API.read(url).then(
    function (result) {
      set(JSON.stringify(result))
    },
    function (error) {
      set([
        {
          ClassTitle: "Français 101",
          PageId: 1,
          PageRoute: "home",
          PageTitle: "Français 101",
          PageBodyContent: "Parlez-vous français? If not, you will soon! ",
          TeacherName: "avec Mme. Looper",
          PageHeader: "M/W/F 3-5 PM EST",
          Box1Content:
            "Learn about the course, including our schedule, class trip, big projects, reading materials and more.",
          Box2Content:
            "Learn about expectations around homework, tests, and grading. How can you succeed in the class? Find out here.",
          Box3Content:
            "Learn about French and francophone culture in this section of valuable and curated web sites.",
        },
        {
          ClassTitle: null,
          PageId: 2,
          PageRoute: "trip",
          PageTitle: "Class Trip",
          PageBodyContent: "We will go to Montreal this year",
          TeacherName: null,
          PageHeader: null,
          Box1Content: null,
          Box2Content: null,
          Box3Content: null,
        },
        {
          ClassTitle: null,
          PageId: 3,
          PageRoute: "syllabus",
          PageTitle: "Class Syllabus",
          PageBodyContent:
            "<p class='text-2xl pb-5'>This ten-week course teaches the fundamentals of French grammar as well as conversational basics.</p><ul><li>Semaine I - Introduction to the course and Unit 1, Lesson 1</li><li>Semaine II - Unit 1, Lesson 2</li><li>Semaine III - Unit 2, Lesson 3</li><li>Semaine IV - Unit 2, Lesson 4 Midterm orals start (outside of class).</li><li>Semaine V - Unit 3, Lesson 5</li><li>Semaine VI - Unit 3, Lesson 6 * last week to drop a course</li><li>Semaine VII - Unit 4, Lesson 7</li><li>Semaine VIII - Unit 4, Lesson 8</li><li>Semaine IX - Unit 4, Lesson 8</li><li>Semaine X - Review. Oral portion of final exam held outside of class.</li></ul>",
          TeacherName: null,
          PageHeader: null,
          Box1Content: null,
          Box2Content: null,
          Box3Content: null,
        },
        {
          ClassTitle: null,
          PageId: 4,
          PageRoute: "resources",
          PageTitle: "Resources",
          PageBodyContent: null,
          TeacherName: null,
          PageHeader: null,
          Box1Content: null,
          Box2Content: null,
          Box3Content: null,
        },
        {
          ClassTitle: null,
          PageId: 5,
          PageRoute: "about",
          PageTitle: "About Our Class",
          PageBodyContent: null,
          TeacherName: null,
          PageHeader: null,
          Box1Content: null,
          Box2Content: null,
          Box3Content: null,
        },
        {
          ClassTitle: null,
          PageId: 6,
          PageRoute: "homework",
          PageTitle: "Homework",
          PageBodyContent: null,
          TeacherName: null,
          PageHeader: null,
          Box1Content: null,
          Box2Content: null,
          Box3Content: null,
        },
        {
          ClassTitle: null,
          PageId: 7,
          PageRoute: "grading",
          PageTitle: "Grading",
          PageBodyContent: null,
          TeacherName: null,
          PageHeader: null,
          Box1Content: null,
          Box2Content: null,
          Box3Content: null,
        },
      ]);
    }
  );
});


export { data };
