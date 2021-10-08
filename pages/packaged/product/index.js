const inverter = document.querySelector('#inverter')
const non_inverter = document.querySelector('#non_inverter')

const parent = document.querySelector('#list-product')


const cardTemplate = (value, parent, linkText) =>{
    const divParent = document.createElement('div')
    divParent.setAttribute('class', 'col-md-4 mt-3 border shadow') 
    
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.setAttribute('style', 'width: 18rem;')

    const img = document.createElement('img')
    img.setAttribute('src', `${value.img}`)
    img.setAttribute('class', 'card-img-top')
    img.setAttribute('style', 'width: 350px; height: 200px; object-fit: cover; object-position: center;')

    const cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body text-center')

    const cardTitle = document.createElement('h5')
    cardTitle.textContent = value.title

    const cardLink = document.createElement('a')
    cardLink.href = value.link
    cardLink.textContent = linkText
    cardLink.setAttribute('class', 'btn btn-primary mb-3')

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardLink)

    divParent.appendChild(img)
    divParent.appendChild(cardBody)

    parent.appendChild(divParent)
}

const spek = document.querySelector('#spek')
const spekTemplate = (parent, path) => {
    const img = document.createElement('img')
    img.setAttribute('class', 'img-fluid')
    img.setAttribute('src', path)
    parent.appendChild(img)
}


//1
const dataInverter = {}
dataInverter.img = ['../../../img/packaged/inverter/spek.PNG']
if(inverter){
    dataInverter.img.forEach(value => {
        spekTemplate(spek, value)
    })
}

//2
const dataNonInverter = {}
dataNonInverter.data = [
    {
        title: 'Ceiling Mounted Duct Type',
        link: '/daikin_promotion/pages/packaged/product/non_inverter/duct.html',
        img: '../../../img/packaged/non_inverter/duct.png'
    },
    {
        title: 'Floor Standing Direct Air Blow Type',
        link: '/daikin_promotion/pages/packaged/product/non_inverter/floor.html',
        img: '../../../img/packaged/non_inverter/floor.png'
    },
    {
        title: 'Floor Standing Duct Connection Blow Type',
        link: '/daikin_promotion/pages/packaged/product/non_inverter/floor_duct.html',
        img: '../../../img/packaged/non_inverter/floor_duct.png'
    },
    {
        title: 'Ceiling Mounted Duct Type - 100% Fresh Air',
        link: '/daikin_promotion/pages/packaged/product/non_inverter/100.html',
        img: '../../../img/packaged/non_inverter/100.png'
    },
]
if(non_inverter){
    dataNonInverter.data.forEach(value => cardTemplate(value, parent, 'Lihat Product'))
}