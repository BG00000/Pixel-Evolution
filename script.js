const canvas = document.querySelector('#canvas')

let pixel
let mouseDown = false

//_-_-_-_-_-_-_-_-_-_-_-
let pixelSize = '5px'
let insertColumns = 100
let border = false
let drawColor = 'black'
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
            pixel.style.backgroundColor = drawColor
        })

        pixel.addEventListener('mouseup', () => {
            mouseDown = false
        })
        
        pixel.addEventListener('mouseenter', () => {
            if (mouseDown) {
                pixel.style.backgroundColor = drawColor
            }
        })
    })
}

createGrid(insertColumns ** 2)
numberOfColumns(insertColumns)
handleMouse()

