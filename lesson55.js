
let bo = document.getElementById('bo')
let demo = document.getElementById('demo')

let table = document.createElement('table')
table.border = '1'

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td')
        td.style.width = '50px'
        td.style.height = '50px'
        td.style.border = '1px solid black'
        td.style.textAlign = 'center'
        td.style.fontSize = '24px'
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
bo.appendChild(table)


let x = document.getElementsByTagName('td')
let k = true 
let scoreX = 0
let scoreO = 0


for (let b = 0; b < x.length; b++) {
    x[b].addEventListener('click', myf)
}


function myf(obj) {
    if (obj.target.innerHTML != '') return

    if (k) {
        obj.target.innerHTML = 'X'
        k = false
    } else {
        obj.target.innerHTML = 'O'
        k = true
    }

    if (x[0].innerHTML == x[1].innerHTML && x[0].innerHTML == x[2].innerHTML && x[0].innerHTML != '') {
        updateScore(x[0].innerHTML)
    } else if (x[3].innerHTML == x[4].innerHTML && x[3].innerHTML == x[5].innerHTML && x[3].innerHTML != '') {
        updateScore(x[3].innerHTML)
    } else if (x[6].innerHTML == x[7].innerHTML && x[6].innerHTML == x[8].innerHTML && x[6].innerHTML != '') {
        updateScore(x[6].innerHTML)
    } else if (x[0].innerHTML == x[3].innerHTML && x[0].innerHTML == x[6].innerHTML && x[0].innerHTML != '') {
        updateScore(x[0].innerHTML)
    } else if (x[1].innerHTML == x[4].innerHTML && x[1].innerHTML == x[7].innerHTML && x[1].innerHTML != '') {
        updateScore(x[1].innerHTML)
    } else if (x[2].innerHTML == x[5].innerHTML && x[2].innerHTML == x[8].innerHTML && x[2].innerHTML != '') {
        updateScore(x[2].innerHTML)
    } else if (x[0].innerHTML == x[4].innerHTML && x[0].innerHTML == x[8].innerHTML && x[0].innerHTML != '') {
        updateScore(x[0].innerHTML)
    } else if (x[2].innerHTML == x[4].innerHTML && x[2].innerHTML == x[6].innerHTML && x[2].innerHTML != '') {
        updateScore(x[2].innerHTML)
    }
}

function updateScore(winner) {
    if (winner === 'X') scoreX++
    else scoreO++

    demo.innerHTML = 'Points: ' + scoreX + ' : ' + scoreO   
    setTimeout(() => {
        for (let i = 0; i < x.length; i++) x[i].innerHTML = ''
        k = true 
    }, 500)
}
