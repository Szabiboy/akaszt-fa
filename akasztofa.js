const szavak = ["alma", "béka", "iskola"];
const random = Math.floor(Math.random() * szavak.length);
const randomszó = szavak[random];
let kitalálandó = [];
let tipp = 0;
let téves = [];
for (var i = 0; i < randomszó.length; i++) {
    kitalálandó.push("_");
}
document.addEventListener("keydown", e => {
    if (e.key == "Enter") {
        myFunction()
    }
})
document.getElementById("szoveg").innerHTML = kitalálandó.join(" ");
function myFunction() {
    let betű = document.getElementById("input");
    let találat = false;
    for (var i = 0; i < randomszó.length; i++) {
        if (randomszó[i] == betű.value) {
            kitalálandó[i] = betű.value;
            találat = true;
        }
    }
    if (!találat) {
        tipp++;
        téves.push(betű.value);
    }
    if (tipp == 7) {
        window.alert("Vesztettél! A megfelelő szó a(z) " + randomszó + " volt.");
        tipp = 6;
    }
    betű.value = "";
    document.getElementById("szoveg").innerHTML = kitalálandó.join(" ");
    document.getElementById("tipp").innerHTML = "Téves tipp: " + tipp + "/6";
    document.getElementById("téves").innerHTML = "Téves betűk: " + téves;
    if (kitalálandó.join('') == randomszó) {
        window.alert("Nyertél!");
        window.location.href = window.location.href;
    }
}