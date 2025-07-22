# Frontend Mentor - Clipboard landing page solution

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Features](#features)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between light and dark modes
- Experience smooth animations and transitions

### Screenshot

![](./images/Clipboard%20landing-page%20screenshot.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/QS3H/Clipboard-landing-page)
- Live Site URL: [Live Demo](https://qs3h.github.io/Clipboard-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- Flexbox and CSS Grid
- Mobile-first workflow
- CSS Custom Properties and Animations
- JavaScript for Dark Mode
- CSS Pseudo-elements for advanced effects

### What I learned

Through this project, I gained experience with:

- Implementing dark mode using Tailwind CSS
- Creating advanced button animations using CSS pseudo-elements
- Building reusable components with Tailwind directives
- Using Intersection Observer for scroll animations
- Managing complex state with localStorage

```css
/* Example of advanced button animation */
.btn-primary {
  @apply bg-green dark:bg-dark-accent-green
         transition-all duration-300 ease-in-out
         hover:shadow-xl hover:scale-105
         relative before:absolute before:inset-0
         before:rounded-full before:bg-white
         before:opacity-0 hover:before:opacity-20;
}
```

### Features

1. **Dark Mode**

   - System preference detection
   - Smooth transitions between themes
   - Persistent theme storage

2. **Advanced Animations**

   - Button hover and click effects
   - Scroll-triggered fade-ins
   - Smooth transitions
   - Gradient shine effects

3. **Responsive Design**
   - Mobile-first approach
   - Flexible layout with Flexbox/Grid
   - Optimized for all screen sizes

## Author

- Frontend Mentor - [@QS3H](https://www.frontendmentor.io/profile/QS3H)
- GitHub - [QS3H](https://github.com/QS3H)
