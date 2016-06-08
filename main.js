// GO!

//PART 1
var disappearButtonNode = document.querySelector('#button1')
var barNode = document.querySelector('.nav-menu')

var disappearBar = function() {
    barNode.style.opacity = 0
}

disappearButtonNode.addEventListener('click', disappearBar)