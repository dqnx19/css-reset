document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".copy-box button");
    const input = document.querySelector(".copy-box input");

    button.addEventListener("click", async () => {
        await navigator.clipboard.writeText(input.value);

        button.textContent = "Copied";

        setTimeout(() => {
            button.textContent = "Copy";
        }, 1500);
    });
})