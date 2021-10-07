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

const parentOutdoor = document.querySelector('#list-productOutdoor')
const paretIndoor = document.querySelector('#list-productIndoor')
const parentResIndoor = document.querySelector('#list-productResIndoor')

//outdoor
const outdoor = [
    {
        title: 'VRV-X',
        link: '/daikin_promotion/pages/vrv/outdoor/x.html',
        img: '../../img/vrv/outdoor/x.png',
    },
    {
        title: 'VRV-A',
        link: '/daikin_promotion/pages/vrv/outdoor/a.html',
        img: '../../img/vrv/outdoor/a.png',
    },
    {
        title: 'VRV IV-S',
        link: '/daikin_promotion/pages/vrv/outdoor/s.html',
        img: '../../img/vrv/outdoor/s.png',
    },
    {
        title: 'VRV-Q',
        link: '/daikin_promotion/pages/vrv/outdoor/q.html',
        img: '../../img/vrv/outdoor/q.png',
    },
    {
        title: 'VRV HRHW',
        link: '/daikin_promotion/pages/vrv/outdoor/hw.html',
        img: '../../img/vrv/outdoor/hw.png',
    },
    {
        title: 'VRV IV W',
        link: '/daikin_promotion/pages/vrv/outdoor/w.html',
        img: '../../img/vrv/outdoor/w.png',
    },
]
outdoor.forEach(value => {
    cardTemplate(value, parentOutdoor, 'Lihat Detail')
})


//indoor
const indoor = [
    {
        title: 'Ceiling Mounted Cassette',
        link: '/daikin_promotion/pages/vrv/indoor/sensing.html',
        img: '../../img/vrv/indoor/sensing.png',
    },
    {
        title: 'Ceiling Mounted Cassette',
        link: '/daikin_promotion/pages/vrv/indoor/round_flow.html',
        img: '../../img/vrv/indoor/round_flow.png',
    },
    {
        title: 'Ceiling Mounted Cassette',
        link: '/daikin_promotion/pages/vrv/indoor/multi_flow.html',
        img: '../../img/vrv/indoor/multi_flow.png',
    },
    {
        title: 'Ceiling Mounted Cassette',
        link: '/daikin_promotion/pages/vrv/indoor/double_flow.html',
        img: '../../img/vrv/indoor/double_flow.png',
    },
    {
        title: 'Ceiling Mounted Cassette Corner',
        link: '/daikin_promotion/pages/vrv/indoor/corner.html',
        img: '../../img/vrv/indoor/corner.png',
    },
    {
        title: 'Slim Ceiling Mounted Duct',
        link: '/daikin_promotion/pages/vrv/indoor/slim.html',
        img: '../../img/vrv/indoor/slim.png',
    },
    {
        title: 'Slim Ceiling Mounted Duct Type',
        link: '/daikin_promotion/pages/vrv/indoor/slim_duct.html',
        img: '../../img/vrv/indoor/slim_duct.png',
    },
    {
        title: 'Ceiling Mounted Duct',
        link: '/daikin_promotion/pages/vrv/indoor/duct.html',
        img: '../../img/vrv/indoor/duct.png',
    },
    {
        title: 'Middle Static Pressure Ceiling Mounted Duct',
        link: '/daikin_promotion/pages/vrv/indoor/middle.html',
        img: '../../img/vrv/indoor/middle.png',
    },
    {
        title: 'Wall Mounted',
        link: '/daikin_promotion/pages/vrv/indoor/wall.html',
        img: '../../img/vrv/indoor/wall.png',
    },
    {
        title: 'Ceiling Suspended',
        link: '/daikin_promotion/pages/vrv/indoor/suspended.html',
        img: '../../img/vrv/indoor/suspended.png',
    },
    {
        title: '4-Way Flow Ceiling Suspended',
        link: '/daikin_promotion/pages/vrv/indoor/wayFlow.html',
        img: '../../img/vrv/indoor/wayFlow.png',
    },
    {
        title: 'Floor Standing',
        link: '/daikin_promotion/pages/vrv/indoor/floor.html',
        img: '../../img/vrv/indoor/floor.png',
    },
    {
        title: 'Floor Standing Duct',
        link: '/daikin_promotion/pages/vrv/indoor/floor_duct.html',
        img: '../../img/vrv/indoor/floor_duct.png',
    },
    {
        title: 'Concealed Floor Standing',
        link: '/daikin_promotion/pages/vrv/indoor/con_floor.html',
        img: '../../img/vrv/indoor/con_floor.png',
    },
    {
        title: 'Clean Room Air Conditioner',
        link: '/daikin_promotion/pages/vrv/indoor/clean.html',
        img: '../../img/vrv/indoor/clean.png',
    },
    {
        title: 'Air Handling Unit',
        link: '/daikin_promotion/pages/vrv/indoor/air.html',
        img: '../../img/vrv/indoor/air.png',
    },
]
indoor.forEach(value => {
    cardTemplate(value, paretIndoor, 'Lihat Detail')
})


//Res Indoor
const resIndoor = [
    {
        title: 'Slim Ceiling Mounted Duct',
        link: '/daikin_promotion/pages/vrv/res_indoor/slim.html',
        img: '../../img/vrv/res_indoor/slim.png',
    },
    {
        title: 'European Design Wall Mounted',
        link: '/daikin_promotion/pages/vrv/res_indoor/euro.html',
        img: '../../img/vrv/res_indoor/euro.png',
    },
    {
        title: 'Wall Mounted',
        link: '/daikin_promotion/pages/vrv/res_indoor/wall.html',
        img: '../../img/vrv/res_indoor/wall.png',
    },
]
resIndoor.forEach(value => {
    cardTemplate(value, parentResIndoor, 'Lihat Detail')
})