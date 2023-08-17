const menuBtn = document.querySelector('.show-menu')
const sideBar = document.querySelector('.sidebar')
const close = document.querySelector('.btn-close')

const menuItems = [
  { label: 'Inicio', url: '#' },
  { label: 'Productos', url: '#' },
  { label: 'Servicios', url: '#' },
  { label: 'Contacto', url: '#' }
];

const menuElement = document.getElementById('menu');

menuItems.forEach(item => {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = item.url;
  link.textContent = item.label;
  li.appendChild(link);
  // menuElement.appendChild(li);
});

const closeHandler = (e) => {
  sideBar.style.display = "none"
}


const menuHandler = (e) => {
  sideBar.style.display = "block"
}
menuBtn.addEventListener('click', menuHandler)
close.addEventListener('click', closeHandler)



