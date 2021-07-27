document.getElementById("remove").onclick = function()
{   
    let input = document.getElementById("input").value;
    document.getElementById("results").innerHTML = input/1.17;
}
document.getElementById("add").onclick = function()
{
    let input = document.getElementById("input").value;
    document.getElementById("results").innerHTML = input * 1.17;
}