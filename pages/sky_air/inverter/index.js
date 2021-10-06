const flow = document.querySelector('#flow')
const slim_duct = document.querySelector('#slim_duct')
const suspended = document.querySelector('#suspended')
const compact = document.querySelector('#compact')
const middle = document.querySelector('#middle')
const floor = document.querySelector('#floor')
const wall = document.querySelector('#wall')



const spek = document.querySelector('#spek')
const kiri = document.querySelector('#kiri')
const kanan = document.querySelector('#kanan')

const spekTemplate = (parent, path) => {
    const img = document.createElement('img')
    img.setAttribute('class', 'img-fluid')
    img.setAttribute('src', path)
    parent.appendChild(img)
}

const listTemplate = (parent, data) =>{
    const h3 = document.createElement('h3')
    h3.setAttribute('class', 'text-primary')
    h3.textContent = data.title

    const ul = document.createElement('ul')
    data.body.forEach(value => {
        const li = document.createElement('li')
        li.setAttribute('class', 'text-dark')
        li.textContent = value
        ul.appendChild(li)
    })
    parent.append(h3, ul)
}



//flow
const dataFlow = {}
dataFlow.kiri = {
    title: 'Kaset AC dengan aliran udara seragam 360 ° menetapkan standar.',
    body: [
        'Hindari suhu yang tidak merata dan ketidaknyamanan yang disebabkan oleh angin',
        'Kenyamanan ditingkatkan dengan Round Flow',
        'Mudah beradaptasi dengan ruang instalasi',
        'Tubuh kompak dan operasi yang tenang',
        'Cepat dan mudah dipasang',
        'Lebih mudah dirawat'
    ]
}
dataFlow.kanan = {
    title: 'Kaset AC dengan aliran udara seragam 360 ° menetapkan standar.',
    body: [
        'Sirkulasi Aliran Udara',
        'Kontrol Arah Aliran Udara Individual',
        '360 ° Aliran Udara',
        'Pola Aliran Udara yang Dapat Dipilih',
        'Sensor Ganda',
        'Fungsi Aliran Udara Otomatis',
        'Kenyamanan dan Penghematan Energi Mencegah pendinginan berlebihan',
        'Fungsi sensor penginderaan',
        'Instalasi Cepat & Mudah',
        'Perawatan mudah'
    ]
}
dataFlow.img = [
    '../../../img/sky_air/inverter/flow/spek1.PNG',
    '../../../img/sky_air/inverter/flow/spek2.PNG',
    '../../../img/sky_air/inverter/flow/spek3.PNG',
    '../../../img/sky_air/inverter/flow/spek4.PNG'
]

if(flow) {
    listTemplate(kiri, dataFlow.kiri)
    listTemplate(kanan, dataFlow.kanan)
    dataFlow.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}


//slim duct
const slim = {}
slim.img = ['../../../img/sky_air/inverter/slim_duct/spek.PNG']
if(slim_duct){
    slim.img.forEach(value => {
        spekTemplate(spek, value)
    })
}


//Suspended
const dataSuspended = {}
dataSuspended.kiri = {
    title: 'Aliran udara yang nyaman mengalir ke seluruh ruangan',
    body: [
        'Model yang stylish',
        'Cocok untuk langit-langit tinggi',
        'Pengoperasian yang tenang Fleksibilitas pemasangan untuk kebebasan desain',
        'Instalasi Fleksibel',
        'Perawatan mudah'
    ]
}
dataSuspended.kanan = {
    title: 'Kaset AC dengan aliran udara seragam 360 ° menetapkan standar',
    body: [
        'Hindari suhu yang tidak merata dan ketidaknyamanan yang disebabkan oleh angin',
        'Kenyamanan ditingkatkan dengan Round Flow',
        'Mudah beradaptasi dengan ruang instalasi',
        'Tubuh kompak dan operasi yang tenang',
        'Cepat dan mudah dipasang',
        'Lebih mudah dirawat'
    ]
}
dataSuspended.img = [
    '../../../img/sky_air/inverter/suspended/spek1.PNG',
    '../../../img/sky_air/inverter/suspended/spek2.PNG',
    '../../../img/sky_air/inverter/suspended/spek3.PNG',
    '../../../img/sky_air/inverter/suspended/spek4.PNG'
]

if(suspended) {
    listTemplate(kiri, dataSuspended.kiri)
    listTemplate(kanan, dataSuspended.kanan)
    dataSuspended.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}



//Compact
const dataCompact = {}
dataCompact.kiri = {
    title: 'Bentuk campuran dekorasi yang tenang dan pemasangan yang mudah di gedung baru atau lama',
    body: [
        'Ringkas: Berukuran agar pas di dalam kisi plafon lebar 600 mm',
        'Pengoperasian yang tenang telah dicapai bahkan dengan bodi yang ringkas dan penutup hub spiral yang dikembangkan yang mengurangi tekanan statis di dalam unit dalam-ruang.',
        'Dirancang untuk kinerja rancangan yang rendah menghadirkan kenyamanan optimal',
        'Dengan Sistem Multi-Aliran, arah udara dapat dipilih sesuai dengan pemasangan.'
    ]
}
dataCompact.kanan = {
    title: 'Bentuk campuran dekorasi yang tenang dan pemasangan yang mudah di gedung baru atau lama',
    body: [
        'Ringkas: Berukuran agar pas di dalam kisi plafon lebar 600 mm',
        'Pengoperasian yang tenang telah dicapai bahkan dengan bodi yang ringkas dan penutup hub spiral yang dikembangkan yang mengurangi tekanan statis di dalam unit dalam-ruang.',
        'Dirancang untuk kinerja rancangan yang rendah menghadirkan kenyamanan optimal',
        'Dengan Sistem Multi-Aliran, arah udara dapat dipilih sesuai dengan pemasangan.',
    ]
}
dataCompact.img = [
    '../../../img/sky_air/inverter/compact/spek1.PNG',
    '../../../img/sky_air/inverter/compact/spek2.PNG'
]

if(compact) {
    listTemplate(kiri, dataCompact.kiri)
    listTemplate(kanan, dataCompact.kanan)
    dataCompact.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}



//Middle
const dataMiddle = {}
dataMiddle.kiri = {
    title: 'Desain yang lebih tipis memungkinkan fleksibilitas instalasi yang lebih besar',
    body: [
        'Fleksibilitas desain dan pemasangan',
        'Perawatan mudah',
        'Kenyamanan',
        'Efisiensi tinggi',
        'Bersih'
    ]
}
dataMiddle.kanan = {
    title: 'Desain yang lebih tipis memungkinkan fleksibilitas instalasi yang lebih besar',
    body: [
        'Fleksibilitas desain dan pemasangan',
        'Perawatan mudah',
        'Kenyamanan',
        'Efisiensi tinggi',
        'Bersih'
    ]
}
dataMiddle.img = [
    '../../../img/sky_air/inverter/compact/spek1.PNG',
    '../../../img/sky_air/inverter/compact/spek2.PNG'
]

if(middle) {
    listTemplate(kiri, dataMiddle.kiri)
    listTemplate(kanan, dataMiddle.kanan)
    
}


//Floor
const dataFloor = {}
dataFloor.kiri = {
    title: 'Kaset AC dengan aliran udara seragam 360 ° menetapkan standar',
    body: [
        'Hindari suhu yang tidak merata dan ketidaknyamanan yang disebabkan oleh angin',
        'Kenyamanan ditingkatkan dengan Round Flow',
        'Mudah beradaptasi dengan ruang instalasi',
        'Tubuh kompak dan operasi yang tenang',
        'Cepat dn mudah dipasang',
        'Lebih mudah dirawat'
    ]
}
dataFloor.kanan = {
    title: 'Kontrol aliran udara baru untuk kenyamanan lebih',
    body: [
        'Kontrol aliran udara nyaman baru',
        'Kontrol kecepatan kipas yang nyaman',
        'Operasi yang tenang',
        'Instalasi dan pemeliharaan yang cepat dan mudah',
        'Hemat energi'
    ]
}
dataFloor.img = [
    '../../../img/sky_air/inverter/floor/spek1.PNG',
    '../../../img/sky_air/inverter/floor/spek2.PNG',
    '../../../img/sky_air/inverter/floor/spek3.PNG',
    '../../../img/sky_air/inverter/floor/spek4.PNG',
]

if(floor) {
    listTemplate(kiri, dataFloor.kiri)
    listTemplate(kanan, dataFloor.kanan)
    dataFloor.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}


//wall
const dataWall = {}
dataWall.kiri = {
    title: 'Desain yang ringkas dan pemasangan yang mudah',
    body: [
        'Desain Ringkas & Canggih',
        'Ayunan udara yang nyaman',
        'Mudah Dibersihkan',
        'Fleksibilitas Desain & Instalasi',
    ]
}
dataWall.kanan = {
    title: 'Bentuk campuran dekorasi yang tenang dan pemasangan yang mudah di gedung baru atau lama',
    body: [
        'Ringkas: Berukuran agar pas di dalam kisi plafon lebar 600 mm',
        'Pengoperasian yang tenang telah dicapai bahkan dengan bodi yang ringkas dan penutup hub spiral yang dikembangkan yang mengurangi tekanan statis di dalam unit dalam-ruang.',
        'Dirancang untuk kinerja rancangan yang rendah menghadirkan kenyamanan optimal',
        'Dengan Sistem Multi-Aliran, arah udara dapat dipilih sesuai dengan pemasangan.'
    ]
}
dataWall.img = [
    '../../../img/sky_air/inverter/wall/spek1.PNG',
    '../../../img/sky_air/inverter/wall/spek2.PNG',
]

if(wall) {
    listTemplate(kiri, dataWall.kiri)
    listTemplate(kanan, dataWall.kanan)
    dataWall.img.forEach(value =>{
        spekTemplate(spek, value)
    })
}