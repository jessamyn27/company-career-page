# e-commerce-site
#### vanilla javascript, html, css and sass e-commerce single page app that is fully mobile to desktop responsive with carousels, animation, interaction, hover and search! note that it is a spa that has empty links and hrefs intentionally, check it out on your phone too!


## Table of Contents

**[Quick Links](#Quick-Links)**<br>
**[First Looks](#First-Looks)**<br>
**[Set Up and Run Locally](#Set-Up-and-Run-Locally)**<br>
**[Next Steps to Continue](#Next-Steps-to-Continue)**<br>


## Quick Links

### click here to view live site --> [ e-commerce-spa website](https://jessamyn27.github.io/e-commerce-spa/)

## First Looks

### ![](src/assets/images/jot-fullpage.png)

## Set Up and Run Locally
- 1. clone project on your local machine [cloning-a-repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- 2. open project in your IDE (ie: visual studio)
- 3. right click index.html and open locally in browser

## Next Steps to Continue

- i didn't wanna pay the $99 bucks to get those specific icons from font awesome (only the fa-solid are free now) so i created svg's and added them to a sprite and mapped with ids which made them not easy to use css to style size and colors, in production setting this wouldn't be an issue...
- my sketch app on my browser was having trouble finind the open sans fonts since it wasn't embedded in the file and had to add the missing fonts as a custom embed which means i had to choose replacements and their corresponding weights... so i didn't have the most accurate data and had to eyeball it from the pdf in the assets folder, think i did a pretty good job but you may see some areas that are not pixel perfect. Obviously in production I would get this resolved with the designer 
- test and clean up run time efficiency based on Google Analytics (image optimization, lazy-loading)
- create more reusable, flexible components and variables for scalability, readability, and efficiency like form, inputs, error validation ect...
- carousels can always have improvements like swipping capability for touchscreen and mobile, click and tap functionality on image ect.. 

#### Objective:

- This project is a single page.
- There are two png files in the main folder, one for normal state and one for all the hover states.
- We are expecting a pixel perfect match to the mocks.
- There is a sketch file as well (ST_Dev_Test_Project.sketch) that you can inspect objects.
- Use the OpenSans Google Font. (https://fonts.google.com/specimen/Open+Sans)
- All assets are in the Jot Shop folder
- The website should scale to fit any monitor size (minus 80px on each side).
- While you don’t have to link to any additional pages, we do want to see all hover states implemented.
- The hero section is a carousel.
- Use Font Awesome 6.4.0 for icons
- The main nav menu needs to have animation for hover state.  
- If the mouse comes from the left to hover over the nav item, the hover state bar under the menu item should slide in from the left.
- If the mouse comes from the right to hover over the nav item, the hover state bar under the menu item should slide in from the right.
- The hover state bar should never go outside the left/right bounds of the menu item.
- The website should be fully responsive and look just as good on mobile as it does on desktop and tablet.

#### For mobile:
- We purposefully refrained from providing a mobile mock.
- We want to see how you would make it responsive.


## License

[MIT License](https://opensource.org/licenses/MIT)

**[Back Up To Top](#e-commerce-site)**
