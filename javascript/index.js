let displayInput = "";
let keys = document.querySelectorAll(".keys");

Array.from(keys).map((key) => {
    key.addEventListener("click", (event) => {
        if (event.target.innerHTML == "=") {
            displayInput = eval(displayInput);
            document.querySelector("input").value = displayInput;
        } else if (event.target.innerHTML == "C") {
            displayInput = "";
            document.querySelector("input").value = displayInput;
        } else {
            displayInput = displayInput + event.target.innerHTML;
            document.querySelector("input").value = displayInput;
        }
    });
});
