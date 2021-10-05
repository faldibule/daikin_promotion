const ckParent = document.querySelector('#fitur-ck')
const c7Parent = document.querySelector('#fitur-c7')
const c5Parent = document.querySelector('#fitur-c5')
const c4Parent = document.querySelector('#fitur-c4')
const c3Parent = document.querySelector('#fitur-c3')

const spek = document.querySelector('#spek')

const spekTemplate = (path, parent) => {
    const img = document.createElement('img')
    img.setAttribute('class', 'img-fluid')
    img.setAttribute('src', path)
    parent.appendChild(img)
}

const fiturTemplate = (path, parent) => {
    const img = document.createElement('img')
    img.setAttribute('class', 'img-fluid')
    img.setAttribute('src', path)
    parent.appendChild(img)
}


//CK
if(ckParent){
    fiturTemplate('../../../img/air_purifier/ck/fitur.PNG', ckParent)
    spekTemplate('../../../img/air_purifier/ck/spek.PNG', spek)
}

//C5
if(c5Parent){
    fiturTemplate('../../../img/air_purifier/c5/fitur.PNG', c5Parent)
    spekTemplate('../../../img/air_purifier/c5/spek.PNG', spek)
}

//C4
if(c4Parent){
    fiturTemplate('../../../img/air_purifier/c4/fitur.PNG', c4Parent)
    spekTemplate('../../../img/air_purifier/c4/spek.PNG', spek)
}

//C3
if(c3Parent){
    fiturTemplate('../../../img/air_purifier/c3/fitur.PNG', c3Parent)
    spekTemplate('../../../img/air_purifier/c3/spek.PNG', spek)
}

//C7
if(c7Parent){
    fiturTemplate('../../../img/air_purifier/c7/fitur.PNG', c7Parent)
    spekTemplate('../../../img/air_purifier/c7/spek.PNG', spek)
}