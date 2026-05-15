const button = document.querySelector(".copy-box button");
const input = document.querySelector(".copy-box input");

button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(input.value);

    button.textContent = "Zkopírováno";

    setTimeout(() => {
        button.textContent = "Kopírovat";
    }, 1500);
});