# ISO Date Formatting Assignment
*Difficulty: Intermediate*  
*Expected time to complete: 1 to 2 hours*  
*Full-Time Schedule Placement: End of First Day*

This example assignment introduces the student to installing and implementing third-party npm packages and using custom modules. It also allows the student to practice callback functions.

When students add a MongoDB database to their full stack projects, the documents in their databases will have `createdAt` and `updatedAt` properties in ISO 8601 date format. In order to format these dates in a friendlier way, we can use Day.js.

## Third-Party Packages
- [Day.js](https://day.js.org/) - Fast 2kB alternative to Moment.js with the same modern API. The creators of Moment [discourage it from being used in new projects going forward](https://momentjs.com/docs/#/-project-status/).
- [Chalk (optional)](https://github.com/chalk/chalk) - Terminal string styling done right. I like colorizing my console logs. Sue me.

## Notes
- ES Module usage to get the students used to the browser's ECMAScript Module syntax right off the bat. This requires an additional configuration of `"type": "module"` in the package.json or the use of a `.mjs` file extension. I chose the former.
- The usage of a custom module containing the formatter callback functions, `formatLong`, `formatShort`, and `formatRelative` (ninja bonus). The proposed ninja bonus requires an optional plugin included in the dayjs package to be installed.
- The usage of Chalk is optional, but if students choose to use it, they can implement it however they like. I think it adds a bit of fun to the assignment.