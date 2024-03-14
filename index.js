function generatePoem(event) {
    event.preventDefault();

   

   new Typewriter("#poem", {
    strings: "mood, apathetic. my life is spiraling downwards.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
   
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);