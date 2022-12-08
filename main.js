const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

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
