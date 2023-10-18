const toggle_button = document.querySelector(".toggle_button");
const containers = document.querySelectorAll(".container");
const titles = document.querySelectorAll(".title");
const my_picture = document.querySelector(".my_picture");
const main_section = document.querySelector(".main_section");
const root = document.querySelector(":root");
const skills = document.querySelectorAll(".skill_fill");
const modal = document.querySelectorAll("[data-open-modal]");
const dialog = document.querySelectorAll("[data-modal]");
const modal_image = document.querySelector(".preview_image");
const close_button = document.querySelectorAll(".close_button");
const bar = document.querySelector(".scroll-indicator");
const scrollDown = document.querySelector(".mouse");
const navbar = document.querySelector("nav div");

window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;

  if (winScroll >= 1) {
    navbar.style.backgroundColor = "black";
  }
  if (!winScroll) {
    navbar.style.backgroundColor = "transparent";
  }

  if (winScroll >= 200) {
    scrollDown.remove();
  }

  bar.style.width = scrolled + "%";
};

for (project of modal) {
  project.addEventListener("click", (e) => {
    let Modal = document.querySelector("." + e.target.title);
    Modal.showModal();

    for (let closeButton of close_button) {
      closeButton.addEventListener("click", (e) => {
        Modal.close();
      });
    }
  });
}

function checkboxFunction() {
  if (!toggle_button.checked) {
    main_section.style.setProperty(
      "background-image",
      "url(../images/white_background.jpg)"
    );
    root.style.setProperty("--primary_dark_color", "rgb(250, 250, 250)");
    root.style.setProperty("--accent_dark_color", "rgb(204, 204, 204)");
    root.style.setProperty("--primary_font_color", "black");
    root.style.setProperty("--accent_font_color", "rgb(220, 220, 220)");
    root.style.setProperty("--primary_button_color", "white");
    root.style.setProperty("--skills_color", "rgb(45, 123, 34)");
    my_picture.style.setProperty("opacity", "1");

    for (let title of titles) {
      title.style.setProperty("color", "white");
    }
    for (let container of containers) {
      container.style.setProperty(
        "box-shadow",
        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
      );
    }
  } else {
    root.style.setProperty("--primary_dark_color", "black");
    root.style.setProperty("--accent_dark_color", "#151315");
    root.style.setProperty("--primary_font_color", "white");
    root.style.setProperty("--accent_font_color", "#666166");
    root.style.setProperty("--primary_button_color", "black");
    root.style.setProperty("--skills_color", "rgb(84, 240, 214)");
    main_section.style.removeProperty("background-image");
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate_in");
    } else {
      return;
    }
  });
});

skills.forEach((entry) => {
  observer.observe(entry);
});
