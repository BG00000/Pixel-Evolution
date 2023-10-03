const canvas = document.querySelector('#canvas')


let pixel
let mouseDown = false
let mouseEnter = false
//_-_-_-_-_-_-_-_-_-_-_-
let pixelSize = '40px'
let insertColumns = 10
let border = false
//_-_-_-_-_-_-_-_-_-_-_-


function numberOfColumns(columns) {

    let autoNumberCol = ''

    for (i = 0; i < columns; i ++) {
        autoNumberCol += ' auto'
    }

    canvas.style.gridTemplateColumns = autoNumberCol
}

function createGrid(num) {

    for (i = 0; i < num; i ++) {
        pixel = document.createElement('div')

        pixel.classList.add('pixel')

        pixel.style.height = pixelSize
        pixel.style.width = pixelSize

        canvas.appendChild(pixel)   

        if (!border) {
            canvas.style.gap = '0px'
        }
        
    }
}


function handleMouse () {
    
    const pixelGrid = document.querySelectorAll('.pixel')

    pixelGrid.forEach((pixel) => {

        pixel.addEventListener('mousedown', () => {
            mouseDown = true
            pixel.style.backgroundColor = 'white' 
        })

        pixel.addEventListener('mouseup', () => {
            mouseDown = false
        })
        
        pixel.addEventListener('mouseenter', () => {
            if (mouseDown) {
                pixel.style.backgroundColor = 'white' 
            }
        })

        
    })
}

createGrid(insertColumns ** 2)
numberOfColumns(insertColumns)
handleMouse()

//if the mouse is down, color all divs that it enters