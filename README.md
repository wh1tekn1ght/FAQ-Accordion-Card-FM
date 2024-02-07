# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./images/desktop-preview.jpg)

### Links

- Solution URL: [URL here](https://github.com/whiteknight-dev/FAQ-Accordion-Card-FM)
- Live Site URL: [URL here](https://whiteknight-dev.github.io/FAQ-Accordion-Card-FM/)
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Basic JS

### What I learned

In a previous project I learned how set listeners to all items in one function instead of a function for all the items, in this case I applied the same logic.

```js
questions.forEach((element, index) => {
  let questionIndex = index;
  let questionActive = element;

  element.addEventListener("click", () => {
    
    answers.forEach((element, aIndex) => {
      if (questionIndex == aIndex) {
        element.classList.toggle("inactive");
        questions.forEach((element) => {
          element.classList.remove("bold");
        });
        questionActive.classList.add("bold");
      } else {
        element.classList.add("inactive");
      }
      
    });
  });
});
```

### Continued development

I would like to improve:

- Javascript logic
- Responsive design


## Author

- Frontend Mentor - [@whiteknight-dev](https://www.frontendmentor.io/profile/whiteknight-dev)

