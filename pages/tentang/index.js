const galleryParent = document.querySelector("#gallery")

const isiGallery = (images) => {
    images.forEach(image => {
        const img = document.createElement('img')
        img.setAttribute('src', `../../img/tentang/${image}`);
        img.setAttribute('style', 'object-fit: cover; height: 200px; width: 200px; object-position: center')   
        img.setAttribute('data-aos-offset', '300')
        img.setAttribute('data-aos', 'fade-left')
        img.setAttribute('class', 'img-fluid')
        galleryParent.appendChild(img)
    })
}

const images = [
    'foto kerja 1.png',
    'foto kerja 2.png',
    'foto produk 2.jpg',
    'foto produk 3.jpg',
    'foto produk.jpg'
]

isiGallery(images)
