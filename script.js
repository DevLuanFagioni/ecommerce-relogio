const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const image = document.querySelector("#headphone");

btn1.addEventListener('click', () => {
  image.src = 'imagens/product1.png'
})

btn2.addEventListener('click', () => {
  image.src = 'imagens/product2.png'
})

btn3.addEventListener('click', () => {
  image.src = 'imagens/product3.png'
})