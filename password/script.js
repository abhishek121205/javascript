function cha() {
    let pass = 1212
    let oldPass = document.getElementById('oldPass').value
    let newPass = document.getElementById('newPass').value
    let conPass = document.getElementById('conPass').value

    if (oldPass == pass) {
        if (oldPass == newPass) {
            console.log('same password invalid...')
            document.getElementById('ok').innerHTML = ('same password invalid..')
        } else {
            oldPass = newPass
            if (newPass == conPass) {
                console.log(oldPass)
                console.log('password updated successfully..')
                document.getElementById('ok').innerHTML = ('password updated successfully..')
            } else {
                console.log('new password not confirm')
                document.getElementById('ok').innerHTML = ('new password not confirm..')
            }
        }
    } else {
        console.log(oldPass + ' invalid old password..')
        document.getElementById('ok').innerHTML = ('invalid old password..')
    }
}