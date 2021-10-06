const flow = document.querySelector('#flow')
const duct = document.querySelector('#duct')
const floor = document.querySelector('#floor')
const suspended = document.querySelector('#suspended')
const wayFlow = document.querySelector('#wayFlow')



const spek = document.querySelector('#spek')
const kiri = document.querySelector('#kiri')
const kanan = document.querySelector('#kanan')

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


//Flow
const dataFlow = {}
dataFlow.img = [
    '../../../img/sky_air/non_inverter/flow/spek1.PNG',
    '../../../img/sky_air/non_inverter/flow/spek2.PNG',
]

if(flow) {
    dataFlow.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}


//Suspended
const dataSuspended = {}
dataSuspended.img = [
    '../../../img/sky_air/non_inverter/suspended/spek1.PNG',
    '../../../img/sky_air/non_inverter/suspended/spek2.PNG',
]

if(suspended) {
    dataSuspended.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}


//Duct
const dataWayFlow = {}
dataWayFlow.img = [
    '../../../img/sky_air/non_inverter/wayFlow/spek.PNG'
]

if(wayFlow) {
    dataWayFlow.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}


//wayFlow
const dataDuct = {}
dataDuct.img = [
    '../../../img/sky_air/non_inverter/duct/spek1.PNG',
    '../../../img/sky_air/non_inverter/duct/spek2.PNG',
]

if(duct) {
    dataDuct.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}


//floor
const dataFloor = {}
dataFloor.img = [
    '../../../img/sky_air/non_inverter/floor/spek.PNG',
]

if(floor) {
    dataFloor.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}
