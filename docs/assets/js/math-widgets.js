// Example reusable widget. Extend this file with new widgets as needed.
function initAdditionDemo() {
  document.querySelectorAll("[data-addition-demo]").forEach((widget) => {
    // Prevent duplicated event handlers during repeated navigation.
    if (widget.dataset.initialized === "true") return;
    widget.dataset.initialized = "true";

    const inputA = widget.querySelector("[data-a]");
    const inputB = widget.querySelector("[data-b]");
    const button = widget.querySelector("[data-run]");
    const output = widget.querySelector("[data-result]");

    button.addEventListener("click", () => {
      if (inputA.value.trim() === "" || inputB.value.trim() === "") {
        output.textContent = "Введите оба числа.";
        return;
      }
      const a = Number(inputA.value);
      const b = Number(inputB.value);
      if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b) || a < 0 || b < 0 ||
          !Number.isSafeInteger(a + b)) {
        output.textContent = "Введите небольшие целые неотрицательные числа.";
        return;
      }
      output.textContent = `${a} + ${b} = ${a + b}`;
    });
  });
}

if (typeof document$ !== "undefined") {
  document$.subscribe(initAdditionDemo);
} else {
  document.addEventListener("DOMContentLoaded", initAdditionDemo);
}
