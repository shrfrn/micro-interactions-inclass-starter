'use strict'

function toggleMoveAround(){
    const elParagraph = document.querySelector('p')

    if(elParagraph.style.animationPlayState === 'paused'){
        elParagraph.style.animationPlayState = 'running'
    } else {
        elParagraph.style.animationPlayState = 'paused'
    }
}
function spanAllLetters() {
    var elParagraph = document.querySelector('p')

    var str = elParagraph.innerText
    var strHTML = ''

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ') strHTML += ' '
        else strHTML += `<span>${str.charAt(i)}</span>`
    }

    elParagraph.innerHTML = strHTML
    var elSpans = document.querySelectorAll('span')
    
    for(var j = 0; j < elSpans.length; j++){
        var elSpan = elSpans[j]
        elSpan.style.animationDelay = getRandomInt(1, 5000) + 'ms'
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}
