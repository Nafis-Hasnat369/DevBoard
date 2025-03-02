// Random color generator
function randomColor() {
    const letters = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++)
        hex += letters[Math.floor(Math.random() * 16)];
    return hex;
}

// Function to format the date dynamically
function formatDate(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `
        <h4>${dayName},</h4>
        <h2 class="text-2xl font-bold">${month} ${day} ${year}</h2>
    `
}
// Current time
document.addEventListener("DOMContentLoaded", function () {
    const date = document.getElementById("currentDate");
    const currentDate = new Date();
    date.innerHTML = formatDate(currentDate);
});

function reduceTask() {
    const taskAssigned = document.getElementById('taskAssigned');
    const taskAssignedValue = parseInt(taskAssigned.innerHTML);
    taskAssigned.innerHTML = `0${taskAssignedValue - 1}`;
    if (taskAssignedValue - 1 === 0)
        alert("Congratulation!!! You have completed all the current task.")
}
function increasePoints() {
    const points = document.getElementById('points');
    const pointsValue = parseInt(points.innerHTML);
    points.innerHTML = `${pointsValue + 1}`;
}

function completedTaskBtn(id) {
    alert("Board updated Successfully");
    title = document.getElementById(`${id}-title`).innerHTML;
    const button = document.getElementById(id);
    button.disabled = true;
    button.style.opacity = "0.2";
    const parent = document.getElementById('history');
    const newElement = document.createElement('ul');
    const time = new Date().toLocaleTimeString('en-US', { hour12: true });
    newElement.innerHTML = `
        <div class="bg-[#F4F7FF] p-3 rounded-xl my-4">
            <h4 class>You have Complete The Task ${title} at ${time}.</h4>
        </div>
    `;
    parent.appendChild(newElement);
    reduceTask();
    increasePoints();
};

document.getElementById('btn-theme').addEventListener('click', function () {
    document.getElementById('body').style.background = randomColor();
});

document.getElementById('btn-1').addEventListener('click', function (event) {
    completedTaskBtn(event.target.id);
});
document.getElementById('btn-2').addEventListener('click', function (event) {
    completedTaskBtn(event.target.id);
});
document.getElementById('btn-3').addEventListener('click', function (event) {
    completedTaskBtn(event.target.id);
});
document.getElementById('btn-4').addEventListener('click', function (event) {
    completedTaskBtn(event.target.id);
});
document.getElementById('btn-5').addEventListener('click', function (event) {
    completedTaskBtn(event.target.id);
});
document.getElementById('btn-6').addEventListener('click', function (event) {
    completedTaskBtn(event.target.id);
});

document.getElementById('btn-clear').addEventListener('click', function () {
    document.getElementById('history').innerHTML = ' ';
});