document.querySelector('div.login-signup-container').addEventListener('submit', function (event) {
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
    if (username.includes(' ')) {
        unameMsg.innerHTML = '<br>Username cannot contain spaces.';
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
        localStorage.setItem('admin', 'true');
        localStorage.setItem('loggedIn', 'true');
    } else if (username === 'admin' && password !== '@dmin1234') {
        localStorage.removeItem('username');
        errorMsg.innerHTML = 'Username already taken.<br>Please try another username.';
        errorMsg.style.color = 'red';
        errorMsg.style.margin = '10px 10px 35px 10px';
    } else {
        localStorage.setItem('username', username);
        window.location.href = "/pages/account/";
    }
});

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams)
        return;
    const username = urlParams.get('uname');
    const pwdreset = urlParams.get('newpwd') === 'true'
    if (username && pwdreset) {
        document.querySelector('#username').value = decodeURIComponent(username);
        document.querySelector('.login-signup-container h1').textContent = 'Change Password';
        document.querySelector('.login-signup-container button').textContent = 'Change Password';
        document.querySelector('.login-signup-container a').style.display = 'none';
        document.querySelector('#password').focus();
    } else if (username) {
        document.querySelector('#username').value = decodeURIComponent(username);
        document.querySelector('#password').focus();
    }
};
