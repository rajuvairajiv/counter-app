let count = 0;

const counterEl = document.getElementById("counter");




document.getElementById("incrsbtn").addEventListener
    ("click", function () {
        count++;
        counterEl.textContent = count;
    });

document.getElementById("dcrsbtn").addEventListener
    ("click", function () {
        count--;
        counterEl.textContent = count;
    });

document.getElementById("incrsbyten").addEventListener
    ("click", function () {
        count = count + 10;
        counterEl.textContent = count;
    });

document.getElementById("reset").addEventListener
    ("click", function () {
        count = "";
        counterEl.textContent = count;
    });


