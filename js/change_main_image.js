function toExchangeImage(el){
    const mainImage = document.getElementById("img_main");
    const selectedImage = el.src;
    mainImage.src = selectedImage;
    mainImage.alt = el.alt;
}