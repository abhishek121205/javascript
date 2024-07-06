
function Sal() {
    const baseSalary = document.getElementById('baseSalary').value
    const othAllow = document.getElementById('othAllow').value
    const Pf = document.getElementById('Pf').value
    const Hi = document.getElementById('Hi').value
    Sal = parseInt(baseSalary) + parseInt(othAllow) - parseInt(Pf) - parseInt(Hi)
    document.getElementById('javab').innerHTML = Sal
    console.log(Sal)
}