const outerCell = document.querySelectorAll('[data-cell]')
const innerCell = document.querySelector('[data-cell-center]')


document.body.onload = function() {
    outerCell.forEach((element,index)=>{
      element.innerText = gameLetters.outer[index]
    })
    innerCell.innerText = gameLetters.inner
}


let gameLetters = {
    outer: ['C','H','K','P','T','U'],
    inner: 'E',
    solution: ['KETCHUP', 'CHECK', 'CHECKUP', 'CHEEK', 'CHEEP', 'CHUTE', 'CUKE', 'CUTE', 'ETCH', 'HECK', 'KEEP', 'KEPT', 'PECK', 'PEEK', 'PEEP', 'PEKE', 'PUCE', 'PUKE', 'PUPPET', 'TECH', 'TEEPEE', 'TEETH', 'TEETHE', 'THEE', 'UPKEEP']
}

const shuffleButton = document.getElementById("shuffle-button")
const letterInput = document.querySelector('#letter-input')
const deleteButton = document.getElementById("delete-button")
shuffleButton.addEventListener('click', shuffle)
deleteButton.addEventListener('click', deleteLetter)

function shuffle(array) {
    array = gameLetters.outer
   
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    } //Fisher-Yates algo

    outerCell.forEach((element,index)=>{
        element.innerText = array[index]
      })
}

function selectLetter(){
    outerCell.forEach(cell => {
        cell.addEventListener('click', handleClick)  
    })
    innerCell.addEventListener('click', handleClick)
}
selectLetter()

function handleClick(e){
    e = e || window.event;
    let target = e.target || e.srcElement,
        text = target.textContent || target.innerText

    letterInput.innerText += text
}

function deleteLetter(){
    letterInput.textContent = letterInput.textContent.substring(0, letterInput.textContent.length - 1);
}






