const cardTemplate = (value, parent) =>{
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
    cardLink.textContent = 'Cek Harga Product'
    cardLink.setAttribute('class', 'btn btn-primary mb-3')

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardLink)

    divParent.appendChild(img)
    divParent.appendChild(cardBody)

    parent.appendChild(divParent)
}


//PREMIUM SERIES
const premium = [
    {
        title: 'Urusara 7',
        link: '/daikin_promotion/pages/single_split/product/premium/urusara7.html',
        img: '../../img/single_split/premium/urusara7.png',
    },
    {
        title: 'Multi Split',
        link: '/daikin_promotion/pages/single_split/product/premium/euro.html',
        img: '../../img/single_split/premium/euro.png',

    }
]

const listProductPremium = document.querySelector('#list-product-premium')

premium.forEach((value, i) => {
    cardTemplate(value, listProductPremium)
})


//Inverter
const inverter = [
    {
        title: 'Premium Inverter',
        link: '/daikin_promotion/pages/single_split/product/inverter/premium.html',
        img: '../../img/single_split/inverter/premium.jpg',
    },
    {
        title: 'Star Inverter',
        link: '/daikin_promotion/pages/single_split/product/inverter/star.html',
        img: '../../img/single_split/inverter/star.png',
    },
    {
        title: 'Flash Inverter',
        link: '/daikin_promotion/pages/single_split/product/inverter/flash.html',
        img: '../../img/single_split/inverter/flash.png',
    }
]

const listProductInverter = document.querySelector('#list-product-inverter')
inverter.forEach((value, i) => {
    cardTemplate(value, listProductInverter)
})



//Non-Inverter
const nonInverter = [
    {
        title: 'Super Mini Split',
        link: '/daikin_promotion/pages/single_split/product/non_inverter/super.html',
        img: '../../img/single_split/non_inverter/super.png',
    },
    {
        title: 'Lite',
        link: '/daikin_promotion/pages/single_split/product/non_inverter/lite.html',
        img: '../../img/single_split/non_inverter/lite.png',
    },
    {
        title: 'Breeze',
        link: '/daikin_promotion/pages/single_split/product/non_inverter/breeze.html',
        img: '../../img/single_split/non_inverter/breeze.png',

    }
]

const listProductNonInverter = document.querySelector('#list-product-nonInverter')


nonInverter.forEach((value, i) => {
    cardTemplate(value, listProductNonInverter)
})