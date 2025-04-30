document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Byt ut med dina bilders sökvägar
    const imageContainer = document.querySelector('.image-container');
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      imageContainer.src = images[currentIndex];
    }
  
    setInterval(showNextImage, 5000); // Byt ut 5000 med önskad timeout i millisekunder
  });