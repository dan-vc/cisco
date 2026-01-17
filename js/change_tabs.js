document.addEventListener("DOMContentLoaded", () => {
    const productTab = document.getElementById("product-tab");
    const imagesTab = document.getElementById("images-tab");

    const infoSection = document.getElementById("information-section");
    const imagesSection = document.getElementById("images-section");

    // Función que cambia entre pestañas
    function switchTab(show) {
        if (show === "product") {
            infoSection.classList.remove("hidden");
            imagesSection.classList.add("hidden");

            productTab.classList.add("bg-blue-600", "text-white");
            productTab.classList.remove("bg-gray-100", "text-gray-700");

            imagesTab.classList.add("bg-gray-100", "text-gray-700");
            imagesTab.classList.remove("bg-blue-600", "text-white");
        }
        else if (show === "images") {
            infoSection.classList.add("hidden");
            imagesSection.classList.remove("hidden");

            imagesTab.classList.add("bg-blue-600", "text-white");
            imagesTab.classList.remove("bg-gray-100", "text-gray-700");

            productTab.classList.add("bg-gray-100", "text-gray-700");
            productTab.classList.remove("bg-blue-600", "text-white");
        }
    }

    // Eventos de los botones
    productTab.addEventListener("click", () => switchTab("product"));
    imagesTab.addEventListener("click", () => switchTab("images"));
});
