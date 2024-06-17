// Notice: some parts of the code here is AI generated (GitHub Copilot) and may not be the best practice. It has been modified to work with the website.

document.querySelector('div.login-signup-container').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const password2 = document.querySelector('#password2').value;
    if (password !== password2) {
        alert('Passwords do not match. Please try again.');
        return;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    localStorage.setItem('username', username);
    if (username === 'admin' && password === '@dmin1234') {
        window.location.href = "/pages/admin/";
        localStorage.setItem('admin', true);
        return;
    }
    window.location.href = "/pages/account/";
});