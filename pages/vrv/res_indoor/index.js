const slim = document.querySelector('#slim')
const euro = document.querySelector('#euro')
const wall = document.querySelector('#wall')

const spek = document.querySelector('#spek')
const spekTemplate = (parent, path) => {
    const img = document.createElement('img')
    img.setAttribute('class', 'img-fluid')
    img.setAttribute('src', path)
    parent.appendChild(img)
}

const listTemplate = (parent, data) =>{
    const h3 = document.createElement('h3')
    h3.setAttribute('class', 'text-primary')
    h3.textContent = data.title

    const ul = document.createElement('ul')
    data.body.forEach(value => {
        const li = document.createElement('li')
        li.setAttribute('class', 'text-dark')
        li.textContent = value
        ul.appendChild(li)
    })
    parent.append(h3, ul)
}

//1
const dataSlim = {}
dataSlim.img = ['../../../img/vrv/res_indoor/slim/spek.PNG']
if(slim){
    dataSlim.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//2
const dataEuro = {}
dataEuro.img = ['../../../img/vrv/res_indoor/euro/spek.PNG']
if(euro){
    dataEuro.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//3
const dataWall = {}
dataWall.img = ['../../../img/vrv/res_indoor/wall/spek.PNG']
if(wall){
    dataWall.img.forEach(value => {
        spekTemplate(spek, value)
    })
}