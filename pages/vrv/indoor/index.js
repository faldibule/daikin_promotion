const sensing = document.querySelector('#sensing')
const round_flow = document.querySelector('#round_flow')
const multi_flow = document.querySelector('#multi_flow')
const double_flow = document.querySelector('#double_flow')
const corner = document.querySelector('#corner')
const slim = document.querySelector('#slim')
const slim_duct = document.querySelector('#slim_duct')
const duct = document.querySelector('#duct')
const middle = document.querySelector('#middle')
const wall = document.querySelector('#wall')
const suspended = document.querySelector('#suspended')
const wayFlow = document.querySelector('#wayFlow')
const floor = document.querySelector('#floor')
const floor_duct = document.querySelector('#floor_duct')
const con_floor = document.querySelector('#con_floor')
const clean = document.querySelector('#clean')
const air = document.querySelector('#air')


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
const dataSensing = {}
dataSensing.img = ['../../../img/vrv/indoor/sensing/spek.PNG']
if(sensing){
    dataSensing.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//2
const dataRoundFlow = {}
dataRoundFlow.img = ['../../../img/vrv/indoor/round_flow/spek.PNG']
if(round_flow){
    dataRoundFlow.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//3
const dataDoubleFlow = {}
dataDoubleFlow.img = ['../../../img/vrv/indoor/double_flow/spek.PNG']
if(double_flow){
    dataDoubleFlow.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//4
const dataCorner = {}
dataCorner.img = ['../../../img/vrv/indoor/corner/spek.PNG']
if(corner){
    dataCorner.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//5
const dataSlim = {}
dataSlim.img = ['../../../img/vrv/indoor/slim/spek.PNG']
if(slim){
    dataSlim.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//6
const dataSlimDuct = {}
dataSlimDuct.img = ['../../../img/vrv/indoor/slim_duct/spek.PNG']
if(slim_duct){
    dataSlimDuct.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//7
const dataDuct = {}
dataDuct.img = ['../../../img/vrv/indoor/duct/spek.PNG']
if(duct){
    dataDuct.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//8
const dataWall = {}
dataWall.img = ['../../../img/vrv/indoor/wall/spek.PNG']
if(wall){
    dataWall.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//9
const dataSuspended = {}
dataSuspended.img = ['../../../img/vrv/indoor/suspended/spek.PNG']
if(suspended){
    dataSuspended.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//10
const dataWayFlow = {}
dataWayFlow.img = ['../../../img/vrv/indoor/wayFlow/spek.PNG']
if(wayFlow){
    dataWayFlow.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//11
const dataFloor = {}
dataFloor.img = ['../../../img/vrv/indoor/floor/spek.PNG']
if(floor){
    dataFloor.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//12
const dataFloorDuct = {}
dataFloorDuct.img = ['../../../img/vrv/indoor/floor_duct/spek.PNG']
if(floor_duct){
    dataFloorDuct.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//13
const dataConFloor = {}
dataConFloor.img = ['../../../img/vrv/indoor/con_floor/spek.PNG']
if(con_floor){
    dataConFloor.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//14
const dataClean = {}
dataClean.img = ['../../../img/vrv/indoor/clean/spek.PNG']
if(clean){
    dataClean.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//15
const dataAir = {}
dataAir.img = ['../../../img/vrv/indoor/air/spek.PNG']
if(air){
    dataAir.img.forEach(value => {
        spekTemplate(spek, value)
    })
}


//tak berurut
//16
const dataMiddle = {}
dataMiddle.img = ['../../../img/vrv/indoor/middle/spek.PNG']
if(middle){
    dataMiddle.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//17
const dataMultiFlow = {}
dataMultiFlow.img = ['../../../img/vrv/indoor/multi_flow/spek.PNG']
if(multi_flow){
    dataMultiFlow.img.forEach(value => {
        spekTemplate(spek, value)
    })
}