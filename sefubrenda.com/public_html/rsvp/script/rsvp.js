function validateForm() {
    var name = document.getElementById('name').value;
    var allergies = document.getElementById('allergies').value;
    var guests = document.getElementById('guest').value;

    if (name === "") {
        alert("Name must be filled out");
        return;
    }

    submitForm(name, allergies, guests);
}

function submitForm(name, allergies, guests) {
    var formData = new FormData();
    formData.append('name', name);
    formData.append('known_allergies', allergies);
    formData.append('num_guests', guests);

    fetch('/process_rsvp', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(result => {
        alert(result); // Show the server response
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
