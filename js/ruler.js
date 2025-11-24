'use strict'

function init() {
    const strHtmls = []

    for (var i = 0; i < 10; i++){
        strHtmls.push(`<span>${i * 10}%</span>`)    
    }
    document.querySelector('.ruler').innerHTML = strHtmls.join('')
}