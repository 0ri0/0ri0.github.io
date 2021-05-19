var f = [];

function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;
}

document.getElementById("submit").onclick = function() {
    let n = document.getElementById("n").value;
    let k = document.getElementById("k").value;
    let p = document.getElementById("p").value;

    console.log("n =", n, "k =", k, "p =", p);

    let binomial_coefficient = factorial(n) / (factorial(k) * factorial(n - k));

    document.getElementById("results").innerHTML = (binomial_coefficient * Math.pow(p, k) * Math.pow(1 - p, n - k)).toFixed(10);
}