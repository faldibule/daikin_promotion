const dropDivider = () =>{
  const li = document.createElement('li')
  const hr = document.createElement('hr')
  hr.setAttribute('class', 'dropdown-divider')
  li.appendChild(hr)
  return li;
}

const dropItem = (value, link) =>{
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.setAttribute('class', 'dropdown-item')
  a.setAttribute('href', link)
  a.textContent = value
  li.appendChild(a);
  return li;
}
const dropdown = (parent) =>{
    const div = document.createElement('div')
    div.setAttribute('class', 'dropdown nav-link')

    const p = document.createElement('p')
    p.setAttribute('class', 'dropdown-toggle')
    p.setAttribute('type', 'dropdown-toggle')
    p.setAttribute('id', 'dropdownMenuButton1')
    p.setAttribute('data-bs-toggle', 'dropdown')
    p.setAttribute('aria-expanded', 'false')
    p.setAttribute('style', 'cursor:pointer;')
    p.textContent = "Product"
    

    const ul = document.createElement('ul')
    ul.setAttribute('class', 'dropdown-menu')
    ul.setAttribute('aria-labelledby', 'dropdownMenuButton1')

    const hr1 = dropDivider()
    const hr2 = dropDivider()
    const hr3 = dropDivider()
    const hr4 = dropDivider()
    const hr5 = dropDivider()

    const single_split = dropItem('Single Split', '/daikin_promotion/pages/single_split/index.html')
    const multi_split = dropItem('Multi Split', '/daikin_promotion/pages/multi_split/index.html')
    const air_purifier = dropItem('Air Purifier', '/daikin_promotion/pages/single_split/index.html')
    const sky_air = dropItem('Sky Air', '/daikin_promotion/pages/single_split/index.html')
    const vrv = dropItem('VRV', '/daikin_promotion/pages/single_split/index.html')
    const packaged = dropItem('Packaged Air Conditioner', '/daikin_promotion/pages/single_split/index.html')
    

    // ul.appendChild(single_split)
    // ul.appendChild(li)
    // ul.appendChild(multi_split)
    // ul.appendChild(li)
    // ul.appendChild(air_purifier)
    // ul.appendChild(li)
    // ul.appendChild(sky_air)
    // ul.appendChild(li)
    // ul.appendChild(vrv)
    // ul.appendChild(li)
    // ul.appendChild(packaged)

    ul.append(single_split, hr1, multi_split, hr2, air_purifier, hr3, sky_air, hr4, vrv, hr5, packaged)

    div.appendChild(p)
    div.appendChild(ul)
    parent.appendChild(div)
}






//pembuatan Navbar dengan JS createElement
const body = document.querySelector('body')


const nav = document.createElement('nav')
nav.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-primary')

const container = document.createElement('div')
container.setAttribute('class', 'container mt-3')

const containerA = document.createElement('a')
containerA.setAttribute('class', 'navbar-brand mb-3')
containerA.setAttribute('href', '#')
containerA.textContent = 'Daikin'

const containerButton = document.createElement('button')
containerButton.setAttribute('class', 'navbar-toggler')
containerButton.setAttribute('type', 'button')
containerButton.setAttribute('data-bs-toggle', 'collapse')
containerButton.setAttribute('data-bs-target', '#navbarNav')
containerButton.setAttribute('aria-controls', 'navbarNav')
containerButton.setAttribute('aria-expanded', 'false')
containerButton.setAttribute('aria-label', 'Toggle navigation')

const buttonSpan = document.createElement('span')
buttonSpan.setAttribute('class', 'navbar-toggler-icon')

containerButton.appendChild(buttonSpan)

const containerDiv = document.createElement('div')
containerDiv.setAttribute('class', 'collapse navbar-collapse')
containerDiv.setAttribute('id', 'navbarNav')

const divUl = document.createElement('ul')
divUl.setAttribute('class', 'navbar-nav')

const divLi1 = document.createElement('li')
divLi1.setAttribute('class', 'nav-item')
const li1A = document.createElement('a')
li1A.setAttribute('class', 'nav-link')
li1A.setAttribute('aria-current', 'page')
li1A.setAttribute('href', '/daikin_promotion/pages/tentang.html')
li1A.textContent = 'Tentang';
divLi1.appendChild(li1A)

const divLi2 = document.createElement('li')
divLi2.setAttribute('class', 'nav-item')
const li2A = document.createElement('a')
li2A.setAttribute('class', 'nav-link')
li2A.setAttribute('href', '#')
li2A.textContent = 'Download Katalog'
divLi2.appendChild(li2A)

const liDropDown = document.createElement('li')
liDropDown.setAttribute('class', 'nav-item')
dropdown(liDropDown)

divUl.appendChild(divLi1)
divUl.appendChild(liDropDown)
divUl.appendChild(divLi2)

containerDiv.appendChild(divUl)
container.appendChild(containerA)
container.appendChild(containerButton)
container.appendChild(containerDiv)

nav.appendChild(container)

body.prepend(nav)


