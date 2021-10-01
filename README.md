# A Sample Classroom Website
## ...run off of a spreadsheet converted to an API!

🇫🇷 Welcome to this sample French language teacher's web site! 🇫🇷

> Visit the deployed site here: [Sample School Site](https://sample-french-class.netlify.app)

### A Proof of Concept

This project demonstrates an interesting architecture that might work well for a teacher who needs a bespoke web site for a class but doesn't want to pay for Wix or other paid sites. In addition, there's no fancy backend needed - it runs from a Google or Excel spreadsheet using a service called [Sheetlabs](https://sheetlabs.com) that allows a teacher to upload a spreadsheet and edit it within the service. An API (Application Programming Interface) is created by Sheetlabs (which has a generous free tier) and the user can use the API to query the spreadsheet just like one would a database. Neat-o!

In addition, since this site is stored on [GitHub](https://github.com) and deployed on [Netlify](https://netlify.com), we can leverage these platforms as community-building tools. On GitHub, we use Discussion boards (see the tab at the top here) right in the repo for open discussions. Netlify offers form input storage. All these services are free to use.

To setup your own classroom web site using this template:

1. Login to GitHub and click the 'fork' button at the top right. A copy of the site will be made for you. You can replace the image and colors in the code (currently this is not driven from the spreadsheet, but should be later).
2. Create an account and login to SheetLabs. Build up a spreadsheet reflecting the routes in your app. Routes correspond to your pages in /src. You can see how the spreadsheet can be configured to query the data associated with a route, like thus: https://sheetlabs.com/UML/classApi?pageroute=home. You can configure all the routes to match the data you want to do, but for this site, the routes included are:

- [x]  Home
- [x]  About
- [x]  Grading
- [x]  Homework
- [x]  Syllabus
- [x]  Class Trip Info (form and video)
- [x]  Alignments
- [x]  Resources
- [x]  Contact Us (form)
- [x]  Discussion board (goes to GitHub)
- [x]  Weekly Fiches de vocabulaire
- [x]  Weekly Slideshow (bespoke YouTube embed)
- [x]  Tutoring information (form)
- [x]  About the Francophone world
- [x]  Pen-friend Signup (form)
- [x]  Community (includes Contact, DB, Tutoring, Pen friend signup)

3. Connect your web site to your API by editing the route pages where the API path is embedded.

> A note about forms: the forms are all built into the site and data is collected on Netlify. This site is setup for deployment on Netlify.

> A note about the Discussion boards. For students, if there is a desire to keep the discussions private, you can make the repo private and invite the students individually or as a group to join. Discussions are held openly to avoid trolling/bullying.
## Tech Stack

Learn about everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

Ensuring that you have npm installed, you can install dependencies with `npm install` (or `pnpm install` or `yarn`) to start a local development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
## Building

This site is setup to be deployed to Netlify, but to build the site locally, run 

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Todo

Make this even more flexible by making all elements connected to spreadsheets, including site color and logo

Make adding routes more automated (right now, you add a file with the route's name, like About.svelte, to the /src folder but in that file there's a little bit of code to configure

Redo the architecture around calling the API (currently it's done on each page which wastes API calls) - this should be run via stores.js.
