let d;
let t1;
let n;
document.getElementById("calculate").addEventListener("click", calculate)

function calculate(){
    d = Number(document.getElementById("d").value)
    t1 = Number(document.getElementById("t1").value)
    n = Number(document.getElementById("n").value)
    if (n < 0 || Math.round(n) == !n) {
        document.getElementById("output").innerHTML = "number of terms must be whole number"
    } else {
    document.getElementById("output").innerHTML = n/2*(2*t1 + d*(n-1))
    }
}