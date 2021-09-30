
//style pada hero image
const getImg = document.querySelectorAll('.img-fluid')
for (let index = 0; index < getImg.length; index++) {
    const element = getImg[index];
    getImg[index].setAttribute('style', "width: 100%; height: 400px; object-fit: cover;object-position: center;");
}


//insert product image
const data = [
    {
        title: 'title 1',
        body: 'lapdoawjdoawjdoajwodjawojdoawjdoajwdaw '
    },
    {
        title: 'title 2',
        body: 'lapdoawjdoawjdoajwodjawojdoawjdoajwdaw '
    },
    {
        title: 'title 3',
        body: 'lapdoawjdoawjdoajwodjawojdoawjdoajwdaw '
    },
]

const listProductParent = document.querySelector('#list-product')

for (let i = 0; i < data.length; i++) {
    
}

data.forEach((value, i) => {
    const divParent = document.createElement('div')
    divParent.setAttribute('class', 'col-md-4 mt-3') 
    
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.setAttribute('style', 'width: 18rem;')

    const img = document.createElement('img')
    img.setAttribute('src', `img/${i+1}.jpg`)
    img.setAttribute('class', 'card-img-top')

    const cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')

    const cardTitle = document.createElement('h5')
    cardTitle.textContent = value.title

    const cardText = document.createElement('p')
    cardText.textContent = value.body

    const cardLink = document.createElement('a')
    cardLink.href = '#'
    cardLink.textContent = 'Cek Harga Product'
    cardLink.setAttribute('class', 'btn btn-primary')

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardLink)

    divParent.appendChild(img)
    divParent.appendChild(cardBody)

    listProductParent.appendChild(divParent)
})




