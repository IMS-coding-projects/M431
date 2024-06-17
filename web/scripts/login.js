// Notice: some parts of the code here is AI generated (GitHub Copilot) and may not be the best practice. It has been modified to work with the website.

document.querySelector('div.login-signup-container').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    localStorage.setItem('username', username);
    if (username === 'admin' && password === '@dmin1234') {
        window.location.href = "/pages/admin/";
        return;
    }
    window.location.href = "/pages/account/";
});