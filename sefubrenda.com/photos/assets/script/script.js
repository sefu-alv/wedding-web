var languageModal; // Declare languageModal in the global scope

document.addEventListener('DOMContentLoaded', function () {
    languageModal = new bootstrap.Modal(document.getElementById('languageModal'));
    languageModal.show();
});

var introText = document.getElementById('intro');

// Function to set the selected language
function setLanguage() {
    // Get the selected language radio button
    var selectedLanguage = document.querySelector('input[name="languageRadio"]:checked').id;

    // Redirect or perform any other actions based on the selected language
    if (selectedLanguage === 'englishRadio') {
        introText.innerHTML = "Welcome to our photos section, where you'll find our simple, heartfelt story. Our love is like a blooming flower that started with a smile and grew with every shared laugh, and memory. It's about the times we've spent together, the little moments that make life sweet, and the feeling of being truly ourselves when we're with each other. This portion of our website is extra special to us because we get to share with you the beautiful memories that we have built over the past 4 years. \n - Much love Sefu & Brenda"
    } else if (selectedLanguage === 'spanishRadio') {
        introText.innerHTML = "Bienvenidos a nuestra sección de fotos, donde encontrarán nuestra historia simple y sincera. Nuestro amor es como una flor que florece, que comenzó con una sonrisa y creció con cada risa compartida y cada recuerdo. Se trata de los momentos que hemos pasado juntos, los pequeños instantes que hacen la vida dulce y la sensación de ser verdaderamente nosotros mismos cuando estamos el uno con el otro. Esta parte de nuestro sitio web es especialmente especial para nosotros porque podemos compartir con ustedes los hermosos recuerdos que hemos construido en los últimos 4 años.\n- Con Much amor Brenda y Sefu"
    }

    // Hide the language modal
    languageModal.hide();
}
