function comp() {
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value

    if (n1 > n2) {
        abc = console.log('n1 is greater')
    }
    else if (n1 < n2) {
        console.log('n2 is greater')
    }
    else {
        console.log('both are equal')
    }
}