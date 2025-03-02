// document.addEventListener("click", function () {
//     // Function to generate a random color
//     function getRandomColor() {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }
//     const container = document.getElementById("container");
//     const themeBtn = document.getElementById("themeBtn");
//     container.style.backgroundColor = getRandomColor();
// });

// Function to format the date dynamically
function formatDate(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, <br> <span class="text-xl font-bold">${month} ${day} ${year}</span>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const date = document.getElementById("date");
    const currentDate = new Date();
    date.innerHTML = formatDate(currentDate);
});