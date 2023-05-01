# Pillars Practice Repo

Repo to practice the following concepts, which will be on the Pillars exam:
- Express Routing and Route Methods
- Express Route Parameters
- Express Status Codes
- Sequelize Model Configuration
- Sequelize Class Methods

## Starting

- **Fork** this repo to your own GitHub
- Read the REQUIREMENTS.md
- Clone your fork to your local machine.
- Make sure your Postgres database is running!
- Create database:
  - On Mac: `createdb pillars_test`
  - On Windows: `createdb pillars_practice_test`
- `npm install`
- You can run `npm run test-dev` (windows users can run `npm run test-windows`) which will run the test suite continuously (`npm test` runs the tests only once).

## IMPORTANT TIPS FOR SUCCESS

**READ ALL COMMENTS CAREFULLY.** Specs often assume you have read the comments.
- You should `git commit` and `git push` very frequently — even for each passing spec if you like! This will prevent you from losing work.
- Please don't submit `console.log`s and other debug code.

**BEFORE PUSHING YOUR CODE** 
- Make sure to add a `.gitignore` file in the root of your project before adding or commiting your code changes. We do NOT want the node modules being counted as changes!
- Your .gitignore file should have this:
```
node_modules/
public/bundle.js
public/bundle.js.map
package-lock.json
```
