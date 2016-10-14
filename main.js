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

var guestListNode = document.querySelector('.guest-list')
var addInputNode = document.querySelector('#add-guest')

var addGuest = function(evt) {
    if(evt.keyCode === 13) {
        var guestName = evt.target.value
        var liNode = document.createElement('li')
        liNode.innerHTML = guestName
        guestListNode.appendChild(liNode)
    }
}

addInputNode.addEventListener('keydown', addGuest)

//PART 3

var inputNode = document.querySelector('#new-guest')
var listNode = document.querySelector('#guest-list')
var buttonNode = document.createElement('button')

var addNewGuest = function(evt) {
    if(evt.keyCode === 13) {
        var guestName  = evt.target.value

        var liNode = document.createElement('li')


        liNode.innerHTML = guestName
        buttonNode.innerHTML = 'x'
        liNode.appendChild(buttonNode)

        listNode.appendChild(liNode)
        return buttonNode
    }
}

var removeGuest = function(liNode) {
    listNode.removeChild(liNode)
}

buttonNode.addEventListener('click', removeGuest)
inputNode.addEventListener('keydown', addNewGuest)

