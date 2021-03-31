
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis tellus ullamcorper dui pretium, non imperdiet est posuere. Phasellus nec egestas neque. Vivamus augue magna, rutrum ac euismod sed, euismod at mi.'
var app = new Vue({
  el: '#landing',
  data: {
    lorem: lorem,
    slides: [
      'images/banner1.png',
      'images/banner2.png',
      'images/banner3.png'
    ],
    productos: [
      { title: 'Producto 1', description: lorem },
      { title: 'Producto 2', description: lorem },
      { title: 'Producto 3', description: lorem }
    ],
    enlaces: [
      [
        {texto: 'Texto 1', enlace: '#'},
        {texto: 'Texto 2', enlace: '#'},
      ],
      [
        {texto: 'Texto 3', enlace: '#'},
        {texto: 'Texto 4', enlace: '#'},
      ],
      [
        {texto: 'Texto 5', enlace: '#'},
        {texto: 'Texto 6', enlace: '#'},
      ],
      [
        {texto: 'Texto 7', enlace: '#'},
        {texto: 'Texto 8', enlace: '#'},
      ]
    ]
  }
})