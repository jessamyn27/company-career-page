# company-career-page
#### Company Career Page in React using MUI with search and save!

## Table of Contents

**[Quick Links](#Quick-Links)**<br>
**[First Looks](#First-Looks)**<br>
**[Set Up and Run Locally](#Set-Up-and-Run-Locally)**<br>
**[Next Steps to Continue](#Next-Steps-to-Continue)**<br>


## Quick Links

### click here to view live site --> [company-career-page](https://jessamyn27.github.io/company-career-page)

## First Looks

### ![](src/images/screenshot-1-unity.png)
### ![](src/images/screenshot-2-unity.png)
### ![](src/images/screenshot-3-unity.png)
### ![](src/images/screenshot-4-unity.png)

## Set Up and Run Locally
- 1. clone project on your local machine [cloning-a-repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 
- 2. open a project in your IDE (ie: visual studio)
- 3. npm install for all dependencies
- 4. npm run start and react should start up on localhost:3000
- 5. note that this company-specific API KEY (endpoint) info is requested to stay private but the API used is free and public so use the doc here on job boards and it should work with any that have the same basic object structure I fetched (https://developers.greenhouse.io/job-board.html#list-jobs)

## Next Steps to Continue

- show the job title and or id or another dynamic routing date as URL params as the user clicks through the job board, specific job, and search results
- create child components for the search, detailed job, and utilities for some of the functions used like the fetch and handleClicks while of course passing children state as props as needed. right now they all live in the <Careers/> component and it's best to have each component have one job to do especially to help control state
- speaking of state, the next steps is also to hook in redux and hoist up that state to one global spot for all to use and be updated!

#### Objective:
- Take Home assignment is pretty free form, as in there is no “correct” result. We are interested in knowing how you solve a task and set of requirements and user stories, as well as how you approach the application from an architectural standpoint. 
- Visually you can go with what makes sense or you think you can solve the problem in the best and most efficient way, custom styling to Material UI, is all accepted. But make it as user-friendly and nice as possible.
- Create a React application (clone this repo) with JavaScript / TypeScript support that consumes the API endpoint of Greenhouse (specifications in the bottom of this document).
 - Greenhouse is our recruitment software which is also what our careers.unity.com is built upon.
- Please do not share endpoints, or use more effort than 2  to 3 hours max.

#### User stories
- As a User, I should be able to get an overview of all job positions, so I can find the relevant job positions.
- As a User, I should be able to get a detailed view of a single job on a page, so I can read and share.
- Bonus As a User, I should be able to search through the overview using the titles, so I can quickly find positions relevant to me.
  
#### Requirements
● React
● Typescript / JavaScript
● MaterialUI
#### Think of using
● TS Interface
● Dynamic routes
● Use Hooks (state, effect, etc.)
## License

[MIT License](https://opensource.org/licenses/MIT)

**[Back Up To Top](#company-career-page)**
