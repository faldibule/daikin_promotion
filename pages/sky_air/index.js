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

const parentInverter = document.querySelector('#list-productInverter')
const parentNonInverter = document.querySelector('#list-productNonInverter')


//inverter 
const inverter = [
    {
        title: 'Ceiling Mounted Cassette Round Flow',
        link: 'file:///C:/xampp/htdocs/job/daikin_promotion/pages/sky_air/inverter/flow.html',
        img: '../../img/sky_air/inverter/flow.png'
    },
    {
        title: 'Ceiling Mounted Slim Duct',
        link: 'file:///C:/xampp/htdocs/job/daikin_promotion/pages/sky_air/inverter/slim_duct.html',
        img: '../../img/sky_air/inverter/slim_duct.png'
    },
    {
        title: 'Ceiling Suspended',
        link: 'file:///C:/xampp/htdocs/job/daikin_promotion/pages/sky_air/inverter/suspended.html',
        img: '../../img/sky_air/inverter/suspended.png'
    },
    {
        title: 'Compact Multi Flow Cassette',
        link: 'file:///C:/xampp/htdocs/job/daikin_promotion/pages/sky_air/inverter/compact.html',
        img: '../../img/sky_air/inverter/compact.png'
    },
    {
        title: 'Duct Connection Middle Static Pressure',
        link: 'file:///C:/xampp/htdocs/job/daikin_promotion/pages/sky_air/inverter/middle.html',
        img: '../../img/sky_air/inverter/middle.png'
    },
    {
        title: 'Floor Standing',
        link: 'file:///C:/xampp/htdocs/job/daikin_promotion/pages/sky_air/inverter/floor.html',
        img: '../../img/sky_air/inverter/floor.png'
    },
    {
        title: 'Wall Mounted',
        link: 'file:///C:/xampp/htdocs/job/daikin_promotion/pages/sky_air/inverter/wall.html',
        img: '../../img/sky_air/inverter/wall.png'
    },
]

inverter.forEach(value => {
    cardTemplate(value, parentInverter, 'Lihat Detail')
})

//nonInverter 
const nonInverter = [
    {
        title: 'Ceiling Mounted Cassette Round Flow',
        link: '/daikin_promotion/pages/sky_air/non_inverter/flow.html',
        img: '../../img/sky_air/non_inverter/flow.png'
    },
    {
        title: 'Ceiling Suspended',
        link: '/daikin_promotion/pages/sky_air/non_inverter/suspended.html',
        img: '../../img/sky_air/non_inverter/suspended.png'
    },
    {
        title: 'Duct Connection Low & Middle Static Pressure',
        link: '/daikin_promotion/pages/sky_air/non_inverter/duct.html',
        img: '../../img/sky_air/non_inverter/duct.png'
    },
    {
        title: 'Ceiling Mounted Cassette 4 Way Flow',
        link: '/daikin_promotion/pages/sky_air/non_inverter/wayFlow.html',
        img: '../../img/sky_air/non_inverter/wayFlow.png'
    },
    {
        title: 'Floor Standing',
        link: '/daikin_promotion/pages/sky_air/non_inverter/floor.html',
        img: '../../img/sky_air/non_inverter/floor.png'
    },
]

nonInverter.forEach(value => {
    cardTemplate(value, parentNonInverter, 'Lihat Detail')
})