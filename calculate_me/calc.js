let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
     // else if (action === "backspace") {
        //       string = string.slice(0, -1);
        //       document.querySelector("input").value = string;
        //     }

      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "E") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    }
    // Handle additional button actions if necessary
   else if (e.target.classList.contains("deleteOne")) {
    deleteOneElement(e.target);
   }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
