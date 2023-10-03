const canvas = document.querySelector('#canvas')


let pixel

//_-_-_-_-_-_-_-_-_-_-_-
let pixelSize = '30px'
let insertColumns = 10
let border = true
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

createGrid(insertColumns ** 2)
numberOfColumns(insertColumns)
