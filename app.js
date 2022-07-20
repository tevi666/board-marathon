const board = document.querySelector('#board');
const colors = ['#FFA07A','#DC143C','#8B0000','#FF69B4','#FF1493','#C71585','#FF4500','#FFA500','#FFD700','#FFFF00','#4B0082','#6A5ACD','#FF00FF','#EE82EE','#800000','#FF00FF','#800080','#00FF00','#0000FF']
const SQUARES_NUMBER = 5008

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',setColor)
    square.addEventListener('mouseleave',removeColor)


    board.append(square)
}
function setColor(event){
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor(event){
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000` 

}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}