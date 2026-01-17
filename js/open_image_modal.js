function viewImage(src) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");

  modalImg.src = src;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

// Cerrar haciendo clic fuera de la imagen
document.getElementById("image-modal").addEventListener("click", (e) => {
  if (e.target.id === "image-modal") {
    e.currentTarget.classList.add("hidden");
    e.currentTarget.classList.remove("flex");
  }
});

function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}