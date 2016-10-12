// GO!

//PART 1
var disappearButtonNode = document.querySelector('#button1')
var barNode = document.querySelector('.nav-menu')

var barState = {
    hidden: false
}

var disappearBar = function() {
    if(barState.hidden) {
        barNode.style.opacity = 1
        barState.hidden = false
    }
    else {
        barNode.style.opacity = 0
        barState.hidden = true
    }
}

disappearButtonNode.addEventListener('click', disappearBar)

//PART 2

var nameListNode = document.querySelector('#add-guest .guest-list')
var inputNode = document.querySelector('#add-guest .answer-box input')

var addName = function(clickEvent) {
    if(clickEvent.keyCode === 13) {
        var guestName = clickEvent.target.value
        var liNode = document.createElement('li')
        liNode.textContent = guestName
        nameListNode.appendChild(liNode)
        inputNode.value = ''
    }
}

inputNode.addEventListener('keydown', addName)

//PART 3

var nameListNode = document.querySelector('#add-guest-bonus .guest-list')
var inputNode = document.querySelector('#add-guest-bonus .answer-box input')

var addName = function(clickEvent) {
    if(clickEvent.keyCode === 13) {
        var guestName = clickEvent.target.value
        var liNode = document.createElement('li')
        liNode.textContent = guestName
        nameListNode.appendChild(liNode)
        nameListNode.appendChild(liNode)
        inputNode.value = ''
    }
}