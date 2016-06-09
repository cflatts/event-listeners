// GO!

//PART 1
var disappearButtonNode = document.querySelector('#button1')
var barNode = document.querySelector('.nav-menu')

var disappearBar = function() {
    barNode.style.opacity = 0
}

disappearButtonNode.addEventListener('click', disappearBar)

//PART 2

var nameListNode = document.querySelector('.guest-list')
var inputNode = document.querySelector('.answer-box input')

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

var nameListNode = document.querySelector('.guest-list')
var inputNode = document.querySelector('.answer-box input')

var addName = function(clickEvent) {
    if(clickEvent.keyCode === 13) {
        var guestName = clickEvent.target.value
        var liNode = document.createElement('li')
        var removeNode = document.createElement('button')
        liNode.textContent = guestName
        nameListNode.appendChild(liNode)
        nameListNode.appendChild(liNode)
        inputNode.value = ''
    }
}