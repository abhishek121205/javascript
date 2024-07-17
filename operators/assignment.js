function sum() {
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value
    sum = parseInt(x) + parseInt(y)
    document.getElementById('javab-1').innerHTML = sum
    console.log(sum)
}

function mul() {
    let x2 = document.getElementById('x2').value
    let y2 = document.getElementById('y2').value
    mul = parseInt(x2) * parseInt(y2)
    document.getElementById('javab-2').innerHTML = mul
    console.log(mul)
}