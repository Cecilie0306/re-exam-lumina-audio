"use strict";

// Henter DOM Elementer for sections //
const getSec2 = document.getElementById("sec-scroll");
const getSec3 = document.getElementById("sec3-flip");
const getSec4 = document.getElementById("sec4-flip");
const getSec5 =document.getElementById("sec5-flip");
const getproduktBtn = document.getElementById("produktBtn");

getproduktBtn.addEventListener("click", () => {
    getSec2.scrollIntoView({
        behavior: "smooth"
    });
});

const sections = document.querySelectorAll(".sec2, .sec3, .sec4, .sec5");

sections.forEach(section => {
    const frontContent = section.innerHTML;
    section.innerHTML=`
    <div class="flip-inner">
    <div class="flip-front">
    ${frontContent}
    </div>
    <div class="flip-back">
    <h3>Produkt Info</h3>
    <p>Bluetooth</p>
    <p>20 Timers Batteri</p>
    <p>Vandafvisende</p>
    </div>
    </div>
    `;
    section.addEventListener("click", () => {
        section.classList.toggle("flipped");
    });
});



