document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signInForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    
    if (localStorage.getItem('rememberMe') === 'true') {
        usernameInput.value = localStorage.getItem('savedUsername') || '';
        passwordInput.value = localStorage.getItem('savedPassword') || '';
        rememberMeCheckbox.checked = true;
    }

    form.addEventListener('submit', function(event) {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            alert('Please fill out both fields.');
            event.preventDefault();
            return;
        }

        if (!validateEmail(username)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }

        if (!validatePassword(password)) {
            alert('Password must be at least 6 characters long and contain both letters and numbers.');
            event.preventDefault();
            return;
        }

        
        if (username === 'john.lomugdang@neu.edu.ph' && password === 'Password123') {
            alert('Sign in successful!');
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('rememberMe', 'true');
                localStorage.setItem('savedUsername', username);
                localStorage.setItem('savedPassword', password);
            } else {
                localStorage.removeItem('rememberMe');
                localStorage.removeItem('savedUsername');
                localStorage.removeItem('savedPassword');
            }
        } else {
            alert('Invalid username or password.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        return re.test(password);
    }
    
});
