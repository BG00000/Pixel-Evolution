const canvasContainer = document.querySelector('.canvas-container')
const color = 'black'
let size = 150
let isMouseDown = false // Flag to track mouse button state

function populateCanvas(size) {
    canvasContainer.innerHTML = '' // Clear the canvas before populating
    canvasContainer.style.setProperty('--size', size)

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')

        // Event listeners for mouse actions
        div.addEventListener('mousedown', () => {
            isMouseDown = true
            div.style.backgroundColor = color
        });

        div.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                div.style.backgroundColor = color
            }
        });

        div.addEventListener('mouseup', () => {
            isMouseDown = false
        });

        canvasContainer.appendChild(div)
    }
}

populateCanvas(size)

// Event listener to track mouseup globally
document.addEventListener('mouseup', () => {
    isMouseDown = false
});

// Prevent text selection when dragging over the canvas
canvasContainer.addEventListener('selectstart', (e) => {
    e.preventDefault()
});
