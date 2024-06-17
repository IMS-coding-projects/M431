// Notice: some parts of the code here is AI generated (GitHub Copilot) and may not be the best practice. It has been modified to work with the website.
document.querySelector('div.login-signup-container').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const password2 = document.querySelector('#password2').value;
    const unameMsg = document.querySelector('#username-message');
    const passMsg = document.querySelector('#pwd-message');
    const errorMsg = document.querySelector('#error-message');
    unameMsg.innerHTML = '*';
    unameMsg.style.color = 'black';
    passMsg.innerHTML = '*';
    passMsg.style.color = 'black';
    errorMsg.innerHTML = '';
    errorMsg.style.color = 'black';
    if (username.length < 3) {
        unameMsg.innerHTML = '<br>Username must be at least 3 characters long.';
        unameMsg.style.color = 'red';
        return;
    }
    if (password.length < 5) {
        passMsg.innerHTML = '<br>Password must be at least 5 characters long.';
        passMsg.style.color = 'red';
        return;
    }
    if (password !== password2) {
        passMsg.innerHTML = '<br>Passwords do not match.';
        passMsg.style.color = 'red';
        return;
    }
    localStorage.setItem('username', username);
    if (username === 'admin' && password === '@dmin1234') {
        window.location.href = "/pages/admin/";
        localStorage.setItem('admin', true);
    }
    else if (username === 'admin' && password !== '@dmin1234') {
        localStorage.removeItem('username');
        errorMsg.innerHTML = 'Username already taken.<br>Please try another username.';
        errorMsg.style.color = 'red';
        errorMsg.style.margin = '10px 10px 35px 10px';
    } else {
        localStorage.setItem('username', username);
        window.location.href = "/pages/account/";
    }
});