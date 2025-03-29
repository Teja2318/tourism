document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".place-card img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            const fullScreenView = document.createElement("div");
            fullScreenView.classList.add("fullscreen");
            fullScreenView.innerHTML = `<img src="${this.src}" alt="Full View">
                                        <button class="close-btn">Close</button>`;
            document.body.appendChild(fullScreenView);

            document.querySelector(".close-btn").addEventListener("click", function () {
                document.body.removeChild(fullScreenView);
            });
        });
    });
});