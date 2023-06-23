const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const clearButton = document.getElementById('clear-button');
const colorPicker = document.getElementById('color-picker');
const brushSize = document.getElementById('brush-size');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
clearButton.addEventListener('click', clearCanvas);

function startDrawing(event) {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
}

function draw(event) {
    if (!isDrawing) return;

    context.strokeStyle = colorPicker.value;
    context.lineWidth = brushSize.value;
    context.lineCap = 'round';

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();

    [lastX, lastY] = [event.offsetX, event.offsetY];
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
