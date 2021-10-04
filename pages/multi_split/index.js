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


//HOT
const hot = [
    {
        title: 'Storage Water Heater',
        link: 'https://irp-cdn.multiscreensite.com/a94dfc3e/files/uploaded/CI190129016_files2019-01-29_13-36-45files%5B1%5D.pdf',
        img: '../../img/multi_split/hot/storage.jpg',
    },
    {
        title: 'Wall Mounted Type',
        link: 'https://irp-cdn.multiscreensite.com/a94dfc3e/files/uploaded/CI190129017_files2019-01-29_13-36-58files.pdf.pdf',
        img: '../../img/multi_split/hot/wall.png',

    },
    {
        title: 'Duct Connected Type',
        link: 'https://irp-cdn.multiscreensite.com/a94dfc3e/files/uploaded/CI190129018_files2019-01-29_13-39-05files.pdf',
        img: '../../img/multi_split/hot/duct.png',

    },
    {
        title: 'Compact Multi-Flow Type',
        link: 'https://irp-cdn.multiscreensite.com/a94dfc3e/files/uploaded/CI190129012_files2019-01-29_13-35-51files.pdf',
        img: '../../img/multi_split/hot/compact.png',

    },
    {
        title: 'Outdoor Unit',
        link: 'https://irp-cdn.multiscreensite.com/a94dfc3e/files/uploaded/CI190129015_files2019-01-29_13-36-29files.pdf',
        img: '../../img/multi_split/hot/outdoor.png',

    },
]

const listProductHot = document.querySelector('#list-product-hot')

hot.forEach((value, i) => {
    cardTemplate(value, listProductHot, 'Lihat Spesifikasi')
})


//R32
const r32 = [
    {
        title: 'FTKJ-N Series',
        link: 'https://irp-cdn.multiscreensite.com/a94dfc3e/files/uploaded/CI190129001_files2019-01-29_11-42-44files.pdf',
        img: '../../img/multi_split/r32/ftkj.png',
    },
    {
        title: 'CTKM-P Series',
        link: 'https://irp-cdn.multiscreensite.com/a94dfc3e/files/uploaded/CI190129002_files2019-01-29_11-43-00files.pdf',
        img: '../../img/multi_split/r32/ctkm.png',

    },
    {
        title: 'Duct-Connected Type',
        link: 'https://irp-cdn.multiscreensite.com/a94dfc3e/files/uploaded/CI190129003_files2019-01-29_11-43-13files.pdf',
        img: '../../img/multi_split/r32/duct.png',

    },
    {
        title: 'Outdoor Unit',
        link: 'https://irp-cdn.multiscreensite.com/a94dfc3e/files/uploaded/CI190129004_files2019-01-29_11-43-25files.pdf',
        img: '../../img/multi_split/r32/outdoor.jpg',

    },
]

const listProductR32 = document.querySelector('#list-product-r32')

r32.forEach((value, i) => {
    cardTemplate(value, listProductR32, 'Lihat Spesifikasi')
})



//Multi-s
const multi = [
    {
        title: 'Multi-S 2 Connection',
        link: '/daikin_promotion/pages/multi_split/multi_s/multis3.html',
        img: '../../img/multi_split/multi/multi2.jpg',
    },
    {
        title: 'Multi-S 3 Connection',
        link: '/daikin_promotion/pages/multi_split/multi_s/multis3.html',
        img: '../../img/multi_split/multi/multi2.jpg',

    },
]

const listProductMulti = document.querySelector('#list-product-multi-s')

multi.forEach((value, i) => {
    cardTemplate(value, listProductMulti, 'Lihat Detail')
})