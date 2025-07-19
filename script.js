const tabel = document.getElementById("calculator");
const rezultat = document.getElementById("rezultat");

let count = 0;
let semne = ["+", "-", "*", "/", ".", "%", "//"];
tabel.addEventListener("click", function(e) {
    const obiect = e.target.textContent;
    let ultimul = rezultat.textContent.slice(-1);
    if (semne.includes(obiect) && semne.includes(ultimul)) {
        if (obiect !== ultimul) {
            rezultat.textContent = rezultat.textContent.slice(0, -1) + obiect;
        }
        return;
    }
    if (obiect === "=") {
        rezultat.textContent = eval(rezultat.textContent);
    }
    if (obiect === "C") {
        rezultat.textContent = "";
    }
    if (e.target.id === "radical") {
        rezultat.textContent = Math.sqrt(rezultat.textContent);
    }
    if (e.target.id === "backspace") {
        rezultat.textContent = rezultat.textContent.slice(0, -1);
    }
    if (obiect !== "C" && obiect !== "=" && e.target.id !== "radical" && e.target.id !== "backspace"&& e.target.id !== "pow") {
        rezultat.textContent += obiect;    
    }
    if (e.target.id === "pow") {
        if (rezultat.textContent && !semne.includes(ultimul)) {
            rezultat.textContent = Math.pow(valoare, 2);
        }
        else{
            rezultat.textContent = rezultat.textContent.slice(0, -1);
            let valoare = eval(rezultat.textContent);
            rezultat.textContent = Math.pow(valoare, 2);
        };
    }
})
