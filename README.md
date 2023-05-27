# ISO Date Formatting Assignment
*Difficulty: Intermediate*  
*Expected time to complete: 1 to 2 hours*  
*Full-Time Schedule Placement: End of First Day*

This example assignment introduces the student to installing and implementing third-party npm packages and using custom modules. It also allows the student to practice callback functions.

When students add a MongoDB database to their full stack projects, the documents in their databases will have `createdAt` and `updatedAt` properties in ISO 8601 date format. In order to format these dates in a friendlier way, we can use Day.js.

## Third-Party Packages
- [Day.js](https://day.js.org/) - Fast 2kB alternative to Moment.js with the same modern API. The creators of Moment [discourage it from being used in new projects going forward](https://momentjs.com/docs/#/-project-status/).
- [Chalk (optional)](https://github.com/chalk/chalk) - Terminal string styling done right. I like colorizing my console logs. Sue me.

## Steps to Complete
1. Create new project directory and cd into it: `mkdir isodate-formatter && cd isodate-formatter`
2. Create index.js: `touch index.js`
3. Initialize npm project: `npm init` or `npm init -y`
4. Install Day.js and Chalk (optional): `npm i dayjs chalk`
5. Create new module file for formatter callback functions: `mkdir lib && touch lib/formatDate.js`
6. In formatDate.js, import the dayjs module.
7. In formatDate.js, create a `formatLong` function that takes in an ISO 8601 date string as input and returns a human-readable string as output. Example output: "Thursday, January 21, 2023". Export the function.
8. Back in index.js project entry file, import the `formatLong` function.
9. Create at least five ISO 8601 date strings. Students can use the built in JavaScript Date library and call the instance method `toISOString()` on them, they can use a web-based ISO Date generator like [timestampgenerator.com](https://timestampgenerator.com/), or simply type them out manually.
10. Create an array and populate it with each created ISO string to prep for looping.
11. Create a `formatDates` function that takes in the array, a formatter callback function, and outputs an array of formatted strings. This function maps over the array and invokes the callback on each element.
12. Call the `formatDates` function, passing in the array of ISO strings and the `formatLong` callback as arguments. Store the result in a new `longDates` const variable.
13. Loop over each element in the `longDates` array with a `forEach` loop to test the results with a console log.
14. Repeat steps 7 through 13 to format ISO dates with an example output of "01/21/2023".
15. **Ninja Bonus:** Repeat steps 7 through 13 to format ISO dates with an example output of "4 months ago". If the student chooses to implement the ninja bonus, point the student to the Day.js documentation. Conversion of syntax from CommonJS to ES Modules required.
    1.  [Loading plugin in NodeJS](https://day.js.org/docs/en/plugin/loading-into-nodejs)
    2.  [RelativeTime](https://day.js.org/docs/en/plugin/relative-time)

## Notes
- ES Module usage to get the students used to the browser's ECMAScript Module syntax right off the bat. This requires an additional configuration of `"type": "module"` in the package.json or the use of a `.mjs` file extension. I chose the former.
- The usage of a custom module containing the formatter callback functions, `formatLong`, `formatShort`, and `formatRelative` (ninja bonus). The proposed ninja bonus requires an optional plugin included in the dayjs package to be installed.
- The usage of Chalk is optional, but if students choose to use it, they can implement it however they like. I think it adds a bit of fun to the assignment.
- For more information, please refer to in-code comments and jsdoc documentation.