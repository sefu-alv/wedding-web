function validateForm() {
    // Example: Check if the name field is not empty
    var name = document.getElementById('name').value;
    if (name === "") {
        alert("Name must be filled out");
        return;
    }

    // You can add more validation logic here...

    // If validation passes, submit the form using AJAX
    submitForm();
}

function submitForm() {
    var form = document.getElementById('rsvpForm');
    var formData = new FormData(form);

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
