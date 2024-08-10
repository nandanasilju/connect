document.addEventListener('DOMContentLoaded', () => {
    const mentorForm = document.getElementById('mentorForm');
    const studentForm = document.getElementById('studentForm');

    if (mentorForm) {
        mentorForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = new FormData(mentorForm);
            fetch('/register/mentor', {
                method: 'POST',
                body: data
            }).then(response => response.text())
              .then(result => alert('Mentor profile created'))
              .catch(error => console.error('Error:', error));
        });
    }

    if (studentForm) {
        studentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = new FormData(studentForm);
            fetch('/register/student', {
                method: 'POST',
                body: data
            }).then(response => response.text())
              .then(result => alert('Student profile created'))
              .catch(error => console.error('Error:', error));
        });
    }
});

