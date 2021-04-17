var username = prompt();
console.log(username);
if (username == "owo") {
    alert("OWO?")
}
if (username == "what's your name?") {
    alert("My name is Jeff");
}
var counter = 0
document.getElementById("button").onclick = function() {
    counter++;
    document.getElementById("button").innerHTML = counter;
}