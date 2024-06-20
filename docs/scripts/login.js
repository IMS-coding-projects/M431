async function hashString(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hash = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

document.querySelector('div.login-signup-container').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const hashedPassword = await hashString(password);
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
    localStorage.setItem('username', username);
    const hashedAdminPwd = '8ebd449afedf357eb250d7a22991fb75560af9d0e5646e975b4eb47df8fcfeb9';
    if (username === 'admin' && hashedPassword === hashedAdminPwd) {
        window.location.href = "/M431-WebProject/pages/admin/";
        localStorage.setItem('admin', true);
        localStorage.setItem('loggedIn', true);
    }
    else if (username === 'admin' && hashedPassword !== hashedAdminPwd) {
        localStorage.removeItem('username');
        errorMsg.innerHTML = 'Invalid username or password.';
        errorMsg.style.color = 'red';
        errorMsg.style.margin = '10px 10px 35px 10px';
    } else {
        localStorage.setItem('loggedIn', true);
        window.location.href = "/M431-WebProject/pages/account/";
    }
});

window.onload = function() {
    let username = localStorage.getItem('username');
    if (username) {
        document.querySelector('#username').value = username;
    }
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = "/M431-WebProject/pages/account/";
    }
}