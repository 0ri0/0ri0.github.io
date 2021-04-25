document.getElementById("submit").onclick = function() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let discriminator = b * b - 4 * a * c;
    if (discriminator < 0) {
        document.getElementById("x1").innerText = "x₁ ∉ ℝ";
        document.getElementById("x2").innerText = "x₂ ∉ ℝ";
        alert("<0");
    } else if (discriminator == 0) {
        document.getElementById("x1").innerText = "x₁ = " + (-b / (2 * a));
        document.getElementById("x2").innerText = "x₂ = " + (-b / (2 * a));
        alert("0");
    } else if (discriminator > 0) {
        document.getElementById("x1").innerText = "x₁ = " + ((-b + Math.sqrt(discriminator)) / (2 * a));
        document.getElementById("x2").innerText = "x₂ = " + ((-b - Math.sqrt(discriminator)) / (2 * a));
    }
}