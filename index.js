
//style pada hero image
const getImg = document.querySelectorAll('.img-fluid')
for (let index = 0; index < getImg.length; index++) {
    const element = getImg[index];
    getImg[index].setAttribute('style', "width: 100%; height: 400px; object-fit: cover;object-position: center;");
}


//insert product image
const data = [
    {
        title: 'Single Split',
        link: '/daikin_promotion/pages/single_split/index.html',
        img: 'single.png',
    },
    {
        title: 'Multi Split',
        link: '/daikin_promotion/pages/multi_split/index.html',
        img: 'multi.png',
    },
    {
        title: 'Air Purifier',
        link: '/daikin_promotion/pages/air_purifier/index.html',
        img: 'air_purifier.png',
    },
    {
        title: 'Sky Air',
        link: '/daikin_promotion/pages/sky_air/index.html',
        img: 'sky_air.png',
    },
    {
        title: 'VRV',
        link: '/daikin_promotion/pages/vrv/index.html',
        img: 'vrv.png',
    },
    {
        title: 'Packaged Air Conditioner',
        link: '/daikin_promotion/pages/packaged/index.html',
        img: 'packaged.png',
    }

]

const listProductParent = document.querySelector('#list-product')

data.forEach((value, i) => {
    const divParent = document.createElement('div')
    divParent.setAttribute('class', 'col-md-4 mt-3 border shadow') 
    
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.setAttribute('style', 'width: 18rem;')

    const img = document.createElement('img')
    img.setAttribute('src', `img/genre_img/${value.img}`)
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

    listProductParent.appendChild(divParent)
})




