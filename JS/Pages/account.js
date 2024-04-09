// JavaScript for Account page of the website

// Showing alert when clicking login button
document.getElementById('login-btn').addEventListener('click', function () {
    alert('LOGGED IN || Please wait...');
});

// Showing alert when clicking signup button
document.getElementById('signup-btn').addEventListener('click', function () {
    alert('SIGNUP SUCCESSFUL || Check your mail.');
});

// Funtion to toggle between login and signup
function toggleForm(formId) {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');
    var loginTab = document.getElementById('loginTab');
    var signupTab = document.getElementById('signupTab');

    if (formId === 'loginForm') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    } else if (formId === 'signupForm') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        loginTab.classList.remove('active');
        signupTab.classList.add('active');
    }
}

toggleForm('loginForm');
