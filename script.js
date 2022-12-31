
const a1 = document.getElementById("a1");
const q1 = document.getElementById("q1");
q1.addEventListener("click", function() {
    a1.classList.toggle("a-1")
})

const q2 = document.getElementById("q2");
const a2 = document.getElementById("a2");
q2.addEventListener("click", function() {

    a2.classList.toggle("a-1")
})

const a3 = document.getElementById("a3");
const q3 = document.getElementById("q3");
q3.addEventListener("click",function() {
    
    a3.classList.toggle("a-1")
})
const a4 = document.getElementById("a4");
const q4 = document.getElementById("q4");
q4.addEventListener("click", function() {
    a4.classList.toggle("a-1")
})
const q5 = document.getElementById("q5");
const a5 = document.getElementById("a5");
q5.addEventListener("click", function() {
    a5.classList.toggle("a-1")
})


function flip() {
    const icon = document.querySelector("img");
    icon.classList.toggle("flip")
}