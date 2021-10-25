# Avaken

This project build at the basic structure of HTML in web design. You can see the solutions in working with blocks, responsive design, crossbrowser compatible. 
Live demo [_here_](https://yuliyazakharchuk.github.io/Avaken/). 

## Table of Contents

- [Avaken](#avaken)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies Used](#technologies-used)
  - [Screenshots](#screenshots)
  - [Setup](#setup)
    - [To open](#to-open)
    - [To edit](#to-edit)
  - [Notes](#notes)
  - [Contact](#contact)


## General Information

- The project consists of index.html, scss files, images and javascript file.
- The purpose of your project was show work with grid and flex system.

## Technologies Used

- HTML
- SCSS
- JavaScript
- jQuery


## Screenshots


![Example screenshot](./img/scren.png)


## Setup

### To open

- Download/clone from the Github
- Open `index.html` file

### To edit

- [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Install SCSS: `npm install -g sass`
- If you use the Homebrew package manager for Mac OS X or Linux, you can install Dart Sass by running      `brew install sass/sass/sass`
- You can also watch individual files or directories with the --watch flag. `sass --watch input.scss output.css`
- You can watch and output to directories by using folder paths as your input and output, and separating them with a colon. In this example:`sass --watch app/sass:public/stylesheets`
- Open [Visual Studio Code](https://code.visualstudio.com/) or another code editor
- Open file of your project in Workspace
- Edit files main.scss or anoter files. Also you can create new files.scss.
- You can use the Sass migrator to automatically update your stylesheets to use math.div() and list.slash().
- `$ npm install -g sass-migrator`
- `$ sass-migrator division **/*.scss`

## Notes

1. Actual time I had spent on this task was 10 hours. 
2. This project has sticky header, [JS Slider](https://swiperjs.com/), used BEM key concepts, used SCSS.
3. You can find realization of the change color of the header used jQuery.

```Js
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 20) {
        $(".header").addClass("active");
        $(".logo").addClass("logo-active");
    } else {
        $(".header").removeClass("active");
        $(".logo").removeClass("logo-active");
    }
});
```

## Contact

Created by [@Yuliya_Zakharchuk](https://github.com/YuliyaZakharchuk).
