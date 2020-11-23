//Arithmetic Series Calculator
document.getElementById("calculate").addEventListener("click", calculate)

function calculate(){
    //inputs
    let d = Number(document.getElementById("d").value)
    let t1 = Number(document.getElementById("t1").value)
    let n = Number(document.getElementById("n").value)
    let output = document.getElementById("output")
    //process
    if (n < 0 || Math.round(n) == !n) {
        output.innerHTML = "number of terms must be whole number"
    } else {
        //output
        output.innerHTML = n/2*(2*t1 + d*(n-1))
    }
}