const colorBox = document.getElementById("colorBox");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

// Change color dynamically
colorPicker.addEventListener("input", function () {
    colorBox.style.backgroundColor = colorPicker.value;
});

// Reset color to default
resetBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = "lightgray";
    colorPicker.value = "#d3d3d3";
});
