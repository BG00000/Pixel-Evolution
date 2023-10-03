const canvas = document.querySelector('#canvas')

let pixelSize = '10px'
let insertColumns = 30

function numberOfColumns(columns) {

    let autoNumberCol = ''

    for (i = 0; i < columns; i ++) {
        autoNumberCol += ' auto'
    }

    canvas.style.gridTemplateColumns = autoNumberCol
}

function createGrid(num) {

    for (i = 0; i < num; i ++) {
        let pixel = document.createElement('div')

        pixel.classList.add('pixel')

        pixel.style.height = pixelSize
        pixel.style.width = pixelSize

        canvas.appendChild(pixel)   
    }
}

createGrid(insertColumns ** 2)
numberOfColumns(insertColumns)