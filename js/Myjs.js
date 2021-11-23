let sum = " ";

function addToSum(operator) {
    sum = sum + operator;
    console.log(operator);
    document.getElementById("Screen").innerText = sum;
    
}

function evaluateSum() {
    document.getElementById("Screen").innerText = eval(sum);
}

function clearSum() {
    document.getElementById("Screen").innerText = " "
    sum= " ";
    }

