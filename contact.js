// Create and load the SweetAlert2 script
var script = document.createElement('script');
script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@11');
document.head.appendChild(script);

function invalidForm(msg) {
    Swal.fire({
        title: 'Error in your form!',
        text: msg,
        icon: 'warning',
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: 'OK'
    });
}

// Once the script loads, add an event listener to the form-submit button
script.onload = function() {
    document.getElementById('form-submit').addEventListener('click', function() {
        let rating = document.getElementById("rating").value;
        let name = document.getElementById("name").value.trim();
        let improvements = document.getElementById("improvements").value.trim();

        if (isNaN(rating) || rating < 0 || rating > 10) {
            invalidForm("Please provide a valid rating.");
            return;
        }
        if (name.length == 0) {
            invalidForm("Please fill out your name.");
            return;
        }
        if (improvements.length == 0) {
            invalidForm("Please tell us how to improve!");
            return;
        }

        Swal.fire({
            title: 'Thank you!',
            text: 'Thank you for reviewing!',
            icon: 'success',
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: 'Go back home!'
        }).then(function(t) {
            if (t.isConfirmed) {
                var e = window.location.href;
                var n = e.substring(0, e.lastIndexOf('/')) + '/index.html';
                window.location.href = n;
            }
        });
    });
};
