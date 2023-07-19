
// function setBackgroundBasedOnTime() {
//     const header = document.querySelector('.header');
//     const currentTime = new Date().getHours();
//
//     if (currentTime >= 9 && currentTime < 18) {
//         // Daytime
//         header.style.backgroundImage = "url('public/img/1.jpg')";
//
//     } else if (currentTime >= 18 && currentTime < 20) {
//         // Sunset
//         header.style.backgroundImage = "url('public/img/sunset.png')";
//     } else if (currentTime >= 5 && currentTime < 9){
//
//     } else {
//         // Nighttime
//         header.style.backgroundImage = "url('public/img/night.png')";
//     }
// }
//
// setBackgroundBasedOnTime(); // Set initial background based on current time
//
// // Update background image every minute to handle changing time
// setInterval(setBackgroundBasedOnTime, 60000);

function redirectToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

