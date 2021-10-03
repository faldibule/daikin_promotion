const breezeParent = document.querySelector('#fitur-breeze')
const superParent = document.querySelector('#fitur-super')
const liteParent = document.querySelector('#fitur-lite')


const fiturTemplate = (value, parent) =>{
    const row = document.createElement('div')
    row.setAttribute('class', 'row justify-content-center mb-5')

    const text = document.createElement('h2')
    text.setAttribute('class', 'text-center')
    text.textContent = value.title

    const col = document.createElement('div')
    col.setAttribute('class', 'col-md-6')

    const img = document.createElement('img')
    img.setAttribute('class', 'img-fluid')
    img.setAttribute('src', `../../../../img/single_split/non_inverter/${value.img}`)
    
    col.appendChild(img)
    row.appendChild(text)
    row.appendChild(col)
    parent.appendChild(row)
}



// super
const superMiniSplit = [
    {
        title: 'Kenyamanan',
        img: 'super/kenyamanan.PNG',
    },
    {
        title: 'Efesiensi Energi',
        img: 'super/efisien.PNG',
    },
    {
        title: 'Daya Tahan',
        img: 'super/daya_tahan.PNG',
    },
    {
        title: 'Kemudahan',
        img: 'super/kemudahan.PNG',
    },
]

if(superParent){
    superMiniSplit.forEach(value => {
        fiturTemplate(value, superParent)
    })
}


//Lite
const lite = [
    {
        title: 'Kenyamanan',
        img: 'lite/kenyamanan.PNG',
    },
    {
        title: 'Efesiensi Energi',
        img: 'lite/efisien.PNG',
    },
    {
        title: 'Kemudahan',
        img: 'lite/kemudahan.PNG',
    },
]
if(liteParent){
    lite.forEach(value => {
        fiturTemplate(value, liteParent)
    })
}

// breeze
const breeze = [
    {
        title: 'Kenyamanan',
        img: 'breeze/kenyamanan.PNG',
    },
    {
        title: 'Efesiensi Energi',
        img: 'breeze/efisien.PNG',
    },
    {
        title: 'Kemudahan',
        img: 'breeze/kemudahan.PNG',
    },
]
if(breezeParent){
    breeze.forEach(value => {
        fiturTemplate(value, breezeParent)
    })
}