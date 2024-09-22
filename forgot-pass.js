document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');

    const form = document.getElementById('resetPasswordForm');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        console.log('Form submitted');
        event.preventDefault(); // Prevent form from submitting the traditional way

        const newPassword = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Clear previous messages
        messageDiv.style.display = 'none';

        // Basic validation
        if (newPassword === '' || confirmPassword === '') {
            showMessage('Please fill out both fields.', 'red');
            return;
        }

        if (newPassword !== confirmPassword) {
            showMessage('Passwords do not match.', 'red');
            return;
        }

        if (!validatePassword(newPassword)) {
            showMessage('Password must be at least 6 characters long and contain both letters and numbers.', 'red');
            return;
        }

        // Simulate successful password reset
        showMessage('Password has been reset successfully!', 'green');

        // Here you would typically send the new password to the server
        // For example:
        // fetch('/reset-password', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ newPassword })
        // }).then(response => response.json())
        //   .then(data => {
        //       // Handle server response
        //   });
    });

    function validatePassword(password) {
        // Basic password validation: at least 6 characters with letters and numbers
        const re = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        return re.test(password);
    }

    function showMessage(message, color) {
        console.log('Showing message:', message); // Add this line for debugging
        messageDiv.textContent = message;
        messageDiv.style.color = color;
        messageDiv.style.display = 'block';
    }
});
