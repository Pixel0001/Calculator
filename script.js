const tabel = document.getElementById("calculator");
const rezultat = document.getElementById("rezultat");

let count = 0;
let semne = ["+", "-", "*", "/", ".", "%"];
tabel.addEventListener("click", function(e) {
    const obiect = e.target.textContent;
    let ultimul = rezultat.textContent.slice(-1);

    // Dacă obiectul este semn și ultimul caracter este semn
    if (semne.includes(obiect) && semne.includes(ultimul)) {
        if (obiect !== ultimul) {
            // Înlocuiește semnul vechi cu cel nou
            rezultat.textContent = rezultat.textContent.slice(0, -1) + obiect;
        }
        // Dacă obiectul e identic cu ultimul, nu face nimic (previne duplicate)
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
    if(e.target.id === "pow"){
        rezultat.textContent = Math.pow(rezultat.textContent, 2);
    }
})