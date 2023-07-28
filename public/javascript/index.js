const toggle_button = document.querySelector(".toggle_button")
const containers = document.querySelectorAll(".container")
const titles = document.querySelectorAll(".title")
const my_picture = document.querySelector(".my_picture")
const main_section = document.querySelector(".main_section")
const root = document.querySelector(":root")






function checkboxFunction() {
    if (!toggle_button.checked) {
        main_section.style.setProperty("background-image", "url(../images/white_background.jpg)")
        root.style.setProperty("--primary_dark_color", "rgb(250, 250, 250)");
        root.style.setProperty("--accent_dark_color", "rgb(124, 124, 124)");
        root.style.setProperty("--primary_font_color", "black");
        root.style.setProperty("--accent_font_color", "rgb(220, 220, 220)")
        root.style.setProperty("--primary_button_color", "white")
        my_picture.style.setProperty("opacity", "1")

        

        for (let title of titles) {
            title.style.setProperty("color", "white")
        }
        for (let container of containers) {
            container.style.setProperty("box-shadow", "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px")
        }
    }
    else {
        root.style.setProperty("--primary_dark_color", "black");
        root.style.setProperty("--accent_dark_color", "#151315");
        root.style.setProperty("--primary_font_color", "white");
        root.style.setProperty("--accent_font_color", "#666166")
        main_section.style.removeProperty("background-image")
    }
}





// const sections = document.querySelectorAll("section");

// window.onscroll = () => {
//     console.log(window.scrollY)
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;

//         if (top >= offset && top < offset + height) {
//             sec.classList.add("show")
//         }
//         else {
//             sec.classList.remove("show")
//         }
//     })
// }


