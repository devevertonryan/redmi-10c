// ---------- MENU ---------------
const header = document.querySelector(".header");
const openMenu = document.querySelector(".open-menu");

openMenu.addEventListener("click", () => {
    header.classList.toggle("open");
    openMenu.classList.toggle("open");
});

// ---------- ACCORDION ----------
const accordionBtn = document.querySelectorAll(".accordion-btn");

accordionBtn.forEach(e => {
    e.addEventListener("click", () => {
        const chevronDown = e.querySelector("i");
        const accordionResp = e.nextElementSibling;

        if (accordionResp.style.maxHeight == 0 || accordionResp.style.maxHeight == null) {
            chevronDown.style.transform = "rotate(-180deg)";
            accordionResp.style.maxHeight = accordionResp.scrollHeight + "px";
        } else {
            chevronDown.style.transform = "rotate(0)";
            accordionResp.style.maxHeight = null;
        }
    });
});