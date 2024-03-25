document.addEventListener("DOMContentLoaded", function () {
  let display = document.getElementsByName("display")[0];

  let buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let value = button.value;

      switch (value) {
        case "AC":
          display.value = "";
          break;
        case "DEL":
          display.value = display.value.slice(0, -1);
          break;
        case "=":
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = "Error";
          }
          break;
        default:
          display.value += value;
          break;
      }
    });
  });
});
