let x = 0;
function hsh() {
    if (x == 0) {
        document.getElementById("ipm").style.display = "block";
        x++
    }
    else {
        document.getElementById("ipm").style.display = "none";
        x = 0;
    }


}