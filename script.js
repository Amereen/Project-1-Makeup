
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    .then((response) => response.json())
    .then((data) => {
      console.log('Data', (data));
      // debugger
      // inputData(data[0])
      data.forEach(obj => {
        inputData(obj)
      });
    })
})
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  inputData(e.target.value)
 
})

const container = document.querySelector(".product_section");
function inputData(makeupInfo){
  const divCard = document.createElement('div')
  const  btn = document.createElement('btn')
  const ratingCounter = document.createElement('likes')
  const cart = document.createElement('cart')
  const name = document.createElement('name')
  const img = document.createElement('img')
  img.setAttribute('class', 'makeup-products')
  const price = document.createElement('price')
  divCard.setAttribute('class', 'card')
// debugger
btn.setAttribute('class', 'like-btn')
btn.setAttribute('id',makeupInfo.id)
btn.innerHTML = '♥'
ratingCounter.innerText = 0
btn.addEventListener('click',function(event) {
  // const newLikes = parseInt(ratingCounter.innerText) + 1 
  ratingCounter.innerText = parseInt(ratingCounter.innerText) + 1 
// ratingCounter.innerText = `${newLikes} likes`
// return newLikes
}) 

// document.querySelector('form').addEventListener('submit', (e) => {
//   e.preventDefault()
  
// })






// function takeAction(container) {
//   container.addEventListener("click", function (event) {
//       let item_id = event.target.id;

//       if (item_id !== "items" && item_id !== "badge") {
//           let item = items_array.filter(function (item) {
//               return item.id == item_id;
//           })[0];

//           let item_in_cart = cart.filter(function (item) {
//               return item.id == item_id;
//           })[0];

//           if (item_in_cart == undefined) {
//               cart.push(item);
//           } else if (action == "add") {
//               item_in_cart.count++;
//           } else if (action == "remove") {
//               item_in_cart.count--;
//           }

//           console.log(cart);
//           displayItems(cart, "cart");
//       };
//   });
// };
// takeAction()







// name.setAttribute('class', 'product-name')
// name.setAttribute('id',makeupInfo.name)
img.src = 'https:' + makeupInfo.api_featured_image
name.innerText = makeupInfo.name
// description.innerText = `Product Description:   ${makeupInfo.description}`
price.innerText = `Price: $${makeupInfo.price}`
// rating.innerText = `Rating:${makeupInfo.rating}`
divCard.append(name,img,price,btn,ratingCounter,cart)
container.append(divCard)
}



















































// document.addEventListener("DOMContentLoaded", () => {
// document.querySelector("form").addEventListener('submit', (e) =>{
//   e.preventDefault()
//   console.log(e.target.name)
// })})
// function category (makeupInfo){
//   let categories = {}
// makeupInfo.forEach(makeupInfo =>{

// if (!Object.keys(categories).includes(makeupInfo.categories)){
//   categories[makeupInfo.categories]={
//     items :{}
//   }
// }
// })
// makeupInfo.forEach(categories).forEach(categories =>{
//   if (makeupInfo.categories === categories){
//     categories.items.push(makeupInfo)
//   }
// })
// console.log(categories);
// }


