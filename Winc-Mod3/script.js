let SelectedItems = document.querySelectorAll('input[name="menuselect"]');
for (i = 0; i < SelectedItems.length; i++) {
    SelectedItems[i].addEventListener("change", function () {
        let value = this.value;
        changeColor(value);
        toggleNav("close");
    });
};

let setColorValue = function (key) {
    let setColor = "home";

    switch (key.code) {
        case "Digit1":
            setColor = "home";
            break;
        case "Digit2":
            setColor = "red";
            break;
        case "Digit3":
            setColor = "orange";
            break;
        case "Digit4":
            setColor = "purple";
            break;
        case "Digit5":
            setColor = "green";
            break;
        case "Digit6":
            setColor = "blue";
            break;
    }
    changeColor(setColor);
    let SelectedItem = document.getElementById(setColor + "-selected");
    SelectedItem.checked = true;
};


document.addEventListener("keypress", setColorValue);

let toggleNav = function (toggleNavStatus) {
    let getColorSelectMenu = document.querySelector(".color-select-menu");
    let getColorSelectMenuUl = document.querySelector(".color-select-menu ul");
    if (toggleNavStatus === "open") {
        getColorSelectMenuUl.style.opacity = "1";
        getColorSelectMenu.style.width = "200px";

    } else if (toggleNavStatus === "close") {
        getColorSelectMenu.style.width = "40px";
        getColorSelectMenuUl.style.opacity = "0";

    }
}

let navHover = document.getElementsByClassName("top-nav");
for (i = 0; i < navHover.length; i++) {
    navHover[i].addEventListener("mouseover", function () { toggleNav("open") });
};


let changeColor = function (itemSelected) {
    const bodyClassList = document.body.classList;
    const mainDiv = document.getElementById("main");
    bodyClassList.value = "";
    bodyClassList.add(itemSelected);
    mainDiv.innerHTML = itemSelected;
};
