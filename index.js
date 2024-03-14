function displayPoem(response) {

    
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();

   let instructionsInput = document.querySelector("#user-instructions");
   let apiKey = "08tc66c2dd234aae04o0a7f3aee015bc";
   let prompt = `User Instructions: Generate a sad poem about ${instructionsInput.value}`;
   let context = "You are a sad poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br />. Do not include a title and sign off the poem with '-SheCodes AI' inside a <strong> element. Make sure to follow the user instructions.";
   let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

   let poemElement = document.querySelector("#poem");
   poemElement.classList.remove("hidden");  
   poemElement.innerHTML = `<div class="generating">..Generating a poem to make you cry about ${instructionsInput.value}..</div>`;
  
   


axios.get(apiUrl).then(displayPoem);

  
   
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);