const duct = document.querySelector('#duct')
const floor = document.querySelector('#floor')
const floor_duct = document.querySelector('#floor_duct')
const seratus = document.querySelector('#seratus')


const spek = document.querySelector('#spek')
const spekTemplate = (parent, path) => {
    const img = document.createElement('img')
    img.setAttribute('class', 'img-fluid')
    img.setAttribute('src', path)
    parent.appendChild(img)
}


//1
const dataDuct = {}
dataDuct.img = [
    '../../../../img/packaged/non_inverter/duct/spek1.PNG',
    '../../../../img/packaged/non_inverter/duct/spek2.PNG',
    '../../../../img/packaged/non_inverter/duct/spek3.PNG',
]
if(duct){
    dataDuct.img.forEach(value => {
        spekTemplate(spek, value)
    })
}


//2
const dataFloor = {}
dataFloor.img = [
    '../../../../img/packaged/non_inverter/floor/spek.PNG',
]
if(floor){
    dataFloor.img.forEach(value => {
        spekTemplate(spek, value)
    })
}


//3
const dataFloorDuct = {}
dataFloorDuct.img = [
    '../../../../img/packaged/non_inverter/floor_duct/spek1.PNG',
    '../../../../img/packaged/non_inverter/floor_duct/spek2.PNG',
]
if(floor_duct){
    dataFloorDuct.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//4
const dataSeratus = {}
dataSeratus.img = [
    '../../../../img/packaged/non_inverter/100/spek1.PNG',
    '../../../../img/packaged/non_inverter/100/spek2.PNG',
]
if(seratus){
    dataSeratus.img.forEach(value => {
        spekTemplate(spek, value)
    })
}