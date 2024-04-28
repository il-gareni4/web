const submitButton = document.getElementById("form-input-submit");

function changeTheme() {
    document.documentElement.classList.toggle("dark");
}

document.getElementById("theme-changer-button").addEventListener("click", changeTheme);

function validateNameInput(ev) {
    if (ev.currentTarget && ev.currentTarget.value.length < 4) {
        submitButton.disabled = true;
        ev.currentTarget.classList.add("invalid-input");
    }
    else {
        submitButton.disabled = false;
        ev.currentTarget.classList.remove("invalid-input");
    }
}

document.getElementById("name-input").addEventListener("blur", validateNameInput);