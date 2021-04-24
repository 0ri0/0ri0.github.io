document.getElementById("submit").onclick = function() {
    let a = parseFloat(document.getElementById("a").innerText);
    let b = parseFloat(document.getElementById("a").innerText);
    let c = parseFloat(document.getElementById("a").innerText);

    let dicriminator = b * b - 4 * a * c;

    if (discriminator < 0) {
        document.getElementById("x1").innerText = "x₁ ∉ ℝ";
        document.getElementById("x2").innerText = "x₂ ∉ ℝ";
    } else if (discriminator = 0) {
        document.getElementById("x1").innerText = "x₁ = " + (-b / (2 * a));
        document.getElementById("x2").innerText = "x₂ = " + (-b / (2 * a));
    } else if (discriminator > 0) {
        document.getElementById("x1").innerText = "x₁ = " + ((-b + Math.sqrt(discriminator)) / (2 * a));
        document.getElementById("x2").innerText = "x₂ = " + ((-b - Math.sqrt(discriminator)) / (2 * a));
    }
}