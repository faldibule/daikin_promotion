const x = document.querySelector('#x')
const a = document.querySelector('#a')
const s = document.querySelector('#s')
const q = document.querySelector('#q')
const hw = document.querySelector('#hw')
const w = document.querySelector('#w')


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


//outdoor

const dataX = {}
dataX.img = ['../../../img/vrv/outdoor/x/spek.PNG']
if(x){
    dataX.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

const dataA = {}
dataA.img = ['../../../img/vrv/outdoor/a/spek.PNG']
if(a){
    dataA.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

const dataS = {}
dataS.img = ['../../../img/vrv/outdoor/s/spek.PNG']
if(s){
    dataS.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

const dataQ = {}
dataQ.img = ['../../../img/vrv/outdoor/s/spek.PNG']
if(q){
    dataQ.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

const dataHw = {}
dataHw.img = [
        '../../../img/vrv/outdoor/hw/spek1.PNG',
        '../../../img/vrv/outdoor/hw/spek2.PNG',
    ]
if(hw){
    dataHw.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

const dataW = {}
dataW.img = ['../../../img/vrv/outdoor/w/spek.PNG']
if(w){
    dataW.img.forEach(value => {
        spekTemplate(spek, value)
    })
}