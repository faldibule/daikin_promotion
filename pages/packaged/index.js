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


const data = [
    {
        title: 'Air Cooled Packaged Inverter',
        link: '/daikin_promotion/pages/packaged/product/inverter.html',
        img: '../../img/packaged/inverter.png'
    },
    {
        title: 'Air Cooled Packaged Non Inverter',
        link: '/daikin_promotion/pages/packaged/product/non_inverter.html',
        img: '../../img/packaged/non_inverter.png'
    },
]

data.forEach(value => cardTemplate(value, parent, 'Lihat Detail'))