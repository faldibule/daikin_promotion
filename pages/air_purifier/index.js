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


const product = [
    {
        title: 'MCK55TVM6',
        link: '/daikin_promotion/pages/air_purifier/product/ck.html',
        img: '../../img/air_purifier/ck.png',
    },
    {
        title: 'MC55UVM6',
        link: '/daikin_promotion/pages/air_purifier/product/c5.html',
        img: '../../img/air_purifier/c5.png',
    },
    {
        title: 'MC40UVM6',
        link: '/daikin_promotion/pages/air_purifier/product/c4.html',
        img: '../../img/air_purifier/c4.png',
    },
    {
        title: 'MC30VVM-H',
        link: '/daikin_promotion/pages/air_purifier/product/c3.html',
        img: '../../img/air_purifier/c3.png',
    },
    {
        title: 'MC70MVM6',
        link: '/daikin_promotion/pages/air_purifier/product/c7.html',
        img: '../../img/air_purifier/c7.png',
    },
]

const productParent = document.querySelector('#list-product')
product.forEach(value => {
    cardTemplate(value, productParent, 'Lihat Product')
})