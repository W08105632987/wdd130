document.addEventListener("DOMContentLoaded", function () {
    function startSlider(sliderId) {
        const images = document.querySelectorAll(`#${sliderId} img`);
        let index = 0;
        
        function showImage() {
            images.forEach((img, i) => {
                img.style.opacity = i === index ? "1" : "0";
            });
            index = (index + 1) % images.length;
        }
        
        showImage();
        setInterval(showImage, 3000);
    }

    startSlider("pos-slider");
    startSlider("nin-slider");
    startSlider("bvn-slider");
});
