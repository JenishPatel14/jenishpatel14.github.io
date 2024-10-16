

// Array of words to rotate

const words = ["Web Developer", "Graphic Designer", "Gamer"];



// Get the target element

const dynamicText = document.getElementById("dynamicText");



// Initialize index for words array

let wordIndex = 0;

let letterIndex = 0;

let isDeleting = false;



// Function to simulate typing

function typeWords() {

  const currentWord = words[wordIndex];

  dynamicText.textContent = currentWord.substring(0, letterIndex);



  if (!isDeleting) {

    letterIndex++;

  } else {

    letterIndex--;

  }



  if (letterIndex === currentWord.length + 1) {

    isDeleting = true;

  }



  if (letterIndex === 0) {

    isDeleting = false;

    wordIndex = (wordIndex + 1) % words.length;

  }



  const typingSpeed = isDeleting ? 50 : 100; // Adjust typing speed here

  const delay = isDeleting ? 30 : typingSpeed;



  setTimeout(typeWords, delay);

}



// Initial call to type words

typeWords();





function toggleMobileMenu() {

  var mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenu.style.display === "block") {

    mobileMenu.style.display = "none";

  } else {

    mobileMenu.style.display = "block";

  }

      }
