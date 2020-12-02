//Arithmetic Series Calculator

//global Variables
let output = document.getElementById("output")
//Calculate button click Event Listener
document.getElementById("calculate").addEventListener("click", updateInput)

function updateInput(){
    //inputs
    let d = Number(document.getElementById("d").value)
    let t1 = Number(document.getElementById("t1").value)
    let n = Number(document.getElementById("n").value)
    //output
    output.innerHTML = calculate(d,t1,n)
}

function calculate(d,t1,n){
    //process
    if (n < 0 || Math.round(n) != n) {
        return output.innerHTML = "number of terms must be whole number"
    } else {
        return output.innerHTML = n/2*(2*t1 + d*(n-1))
    }
}