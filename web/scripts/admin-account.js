document.querySelector('form').addEventListener('submit', function(event) {
    var userType = document.querySelector('#userType').value;
    if (userType !== 'admin' && userType !== 'normal') {
        event.preventDefault();
        alert('Please select a valid user type.');
    }
});

function saveDataAdmin() {
    const userType = document.querySelector('#userType').value;
    if (userType === 'admin') {
        if (localStorage.getItem('admin') === 'true') {
            document.querySelector('#save-info').innerHTML = 'You are already an admin!';
            setTimeout(() => {
                document.querySelector('#save-info').innerHTML = 'Save Account Information';
            } , 3000);
            return;
        } else {
            localStorage.removeItem('admin');
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', 'NiceTry');
            window.location.href = "/pages/account/";
            return;
        }
    }

    document.querySelector('#changeAccTypeModal').style.display = 'block';
    document.querySelector('#close-accTypeModal').addEventListener('click', function() {
        document.querySelector('#changeAccTypeModal').style.display = 'none';
    });
    document.querySelector('#confirm-accTypeModal').addEventListener('click', function() {
        document.querySelector('#changeAccTypeModal').style.display = 'none';
        if (userType !== 'admin') {
            localStorage.removeItem('admin');
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', 'NotAdmin');
            window.location.href = "/pages/account/";
        }
    });
}

function newAdminPwd() {
    localStorage.removeItem('admin');
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');
    window.location.href = "/pages/signup/index.html?uname=" + encodeURIComponent('notAdmin') + "&newpwd=true";
}


window.onload = function() {
    if (localStorage.getItem('admin') !== 'true' || localStorage.getItem('loggedIn') !== 'true' || localStorage.getItem('username') !== 'admin') {
        localStorage.removeItem('admin');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        window.location.href = "/pages/account/";
    }
    document.querySelector('#subscription-type').value = 'Permanent';
    document.querySelector('#subscription-expiry').value = 'Never';
};