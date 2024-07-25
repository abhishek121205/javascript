function speed() {
    var rotate = document.getElementById('input').value
    if (rotate >= 0 && rotate <= 240) {
        // let rotated2 = document.getElementById('arrow-wrapper-2')
        let rotated = document.getElementById('arrow-wrapper')
        rotated.style.transform = `rotate(${rotate}deg)`;
        // rotated2.style.transform = `rotate(${rotate}deg)`;
    } else {
        window.alert('wrong value...')
    }
}