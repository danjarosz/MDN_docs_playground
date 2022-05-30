document.addEventListener("DOMContentLoaded", () => {
  const headingEl = document.querySelector(".heading");
  const logoEL = document.querySelector(".logo");
  const changeUserButtonEl = document.querySelector(".change-user-button");

  const setUserName = (injectElement) => {
    if (!injectElement) return;

    let userName = prompt("Please enter your name.");

    if (!userName) return;

    localStorage.setItem("name", userName);
    injectElement.textContent = "Mozilla is cool, " + userName;
  };

  if (!localStorage.getItem("name")) {
    setUserName(headingEl);
  } else {
    let storedName = localStorage.getItem("name");
    if (storedName) {
      headingEl.textContent = "Mozilla is cool, " + storedName;
    }
  }

  changeUserButtonEl.addEventListener("click", () => {
    setUserName(headingEl);
  });

  logoEL.addEventListener("click", () => {
    const images = {
      colorLogo: {
        id: "colorLogo",
        src: "images/firefox-logo.png",
      },
      blackLogo: {
        id: "blackLogo",
        src: "https://cdn.pixabay.com/photo/2016/03/31/18/47/adorable-1294638_960_720.png",
      },
    };

    const src = logoEL.getAttribute("src");

    if (src === images.colorLogo.src) {
      logoEL.setAttribute("src", images.blackLogo.src);
    } else {
      logoEL.setAttribute("src", images.colorLogo.src);
    }
  });
});
