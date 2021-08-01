let taskbar = document.getElementsByClassName("taskbar")[0];
let start_menu = document.getElementsByClassName("start-menu")[0];

taskbar.addEventListener("click", () => {
    if (start_menu.style.bottom == "53px") {
        start_menu.style.bottom = "-650px";
    }
    else {
        start_menu.style.bottom = "53px";
    }
})