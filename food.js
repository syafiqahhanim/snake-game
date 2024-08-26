import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
let food = getRandomFoodPosition()
const EXPANSION_RATE = 5
export function update() {
   if (onSnake(food)) {
     expandSnake(EXPANSION_RATE)
     food = getRandomFoodPosition()
   }
}
export function draw(gameboard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnSart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}
function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == nu11 || onSnake(newFoddPosition)) {
    newFoodPosition = randomGrPosition()
  }
  return newFoodPosition
}
     
