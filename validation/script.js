var info = {
    user: 'abc',
    pass: 123
}

function myFun() {
    var userN = document.getElementById('user').value;
    var passW = document.getElementById('password').value;

    var userCheck = passcheck = true;
    if (userN == "") {
        dynamic('userError', 'enter username');
    } else if (userN != info.user) {
        dynamic('userError', 'invalid user');
    } else {
        dynamic('userError', '');
        userCheck = false;
    }

    if (passW == "") {
        dynamic('passError', 'enter password');
    } else if (passW != info.pass) {
        dynamic('passError', 'invalid password');
    } else {
        dynamic('passError', '');
        passcheck = false;
    }

    if (userCheck || passcheck == true) {
        return false;
    } else {
        alert('successfully submited');
    }

    function dynamic(id, msg) {
        document.getElementById(id).innerHTML = msg;
    }
}