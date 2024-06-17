document.querySelector('form').addEventListener('submit', function(event) {
    var userType = document.querySelector('#userType').value;
    if (userType !== 'admin' && userType !== 'normal') {
        event.preventDefault();
        alert('Please select a valid user type.');
    }
});

function saveDataAdmin() {
    const userType = document.querySelector('#userType').value;
    if (userType !== 'admin') {
        localStorage.removeItem('admin');
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', 'NotAdmin');
        window.location.href = "/pages/account/";
    } else {
        if (localStorage.getItem('admin') === 'true') {
            alert('You are already logged in as an admin.');
        }
    }
}

function newAdminPwd() {
    localStorage.removeItem('loggedIn');
    window.location.href = "/pages/signup/index.html?uname=" + encodeURIComponent('notAdmin') + "&newpwd=true";
}
