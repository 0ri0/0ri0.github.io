var isActivated = false;
var counter = 0;
document.getElementById("click").onclick = function() {
    if (!isActivated) {
        isActivated = true;
        var d = new Date();
        n = d.getTime();
        console.log(n);
        console.log(typeof n)
    }
    counter++;
    document.getElementById("click").innerHTML = counter;
    var x = new Date();
    var y = x.getTime();
    console.log(y);
    console.log(typeof y);
    var difference = y - n;
    console.log(difference);
    document.getElementById("time").innerHTML = difference / 1000;
}
document.getElementById("stop").onclick = function() {
    isActivated = false;
    alert("Your score was:", counter / document.getElementById("time").innerHTML, "cps.");
    counter = 0;
    document.getElementById("time").innerHTML = 0;
    document.getElementById("button").innerHTML = 0;
}