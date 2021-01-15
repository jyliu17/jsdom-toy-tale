let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  const toyListings = document.querySelector('#toy-collection')

  
  function getToys() {
    fetch('http://localhost:3000/toys')
    .then(data => data.json())
    .then(data => data.forEach (toy => renderToy(toy)))
    
  }


  getToys()





  // * `h2` tag with the toy's name
  // * `img` tag with the `src` of the toy's image attribute and the class name "toy-avatar"
  // * `p` tag with how many likes that toy has
  // * `button` tag with a class "like-btn"


  

function renderToy (toyObj) {

const newToy = document.createElement('div')
newToy.classList.add("newToy")
newToy.setAttribute('id', parseInt(toyObj.id))


const toyH2 = document.createElement("h2")
toyH2.textContent = toyObj.name

const toyImg = document.createElement('img')
toyImg.setAttribute('class', 'toy-avatar')
toyImg.src = toyObj.image

const toyLikes = document.createElement("p")
toyLikes.setAttribute('id', 'likes')
toyLikes.textContent = `${toyObj.likes} "Likes`

const likeBtn = document.createElement("button")
likeBtn.classList.add("like-btn")
likeBtn.textContent = ("Like <3")

newToy.append(toyH2, toyImg, toyLikes, likeBtn)
toyListings.append(newToy)

// likeBtn.addEventListener('click', function(event){
//  const newLike = toyObj.likes + 1
  
//     fetch(`http://localhost:3000/toys/${toyObj.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({likes: newLike})
//     })
//     .then(response => response.json()) 
//     .then(data => {
//       toyLikes.textContent = `${data.likes} Likes`
//       toyObj.likes = data.likes
//       console.log(data.likes)
//     })
//   })
}






const addToyForm = document.querySelector('form.add-toy-form')

addToyForm.addEventListener('submit',function (event) {
event.preventDefault()
console.log(event.target.name.value)
console.log(event.target.image.value)
const newToy = {
  name: event.target.name.value,
  image: event.target.image.value,
  likes: 0
}

addNewToy(newToy)
})

function addNewToy (newToy) {

  fetch('http://localhost:3000/toys/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newToy),
  })
  .then(response => response.json()) 
  .then(data => renderToy(data))
} 



toyListings.addEventListener("click", function(event){
  if (event.target.matches("button.like-btn")) {
    div.dataset.id
    likedToy = event.target.closest(`div.newToy`)
    likes = likedToy.closest('p#likes')
    console.log(likedToy)
    console.log(likes,)
    fetch(`http://localhost:3000/toys/${likedToy.id}`, {
      method: 'PATCH', 
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({likes: likes + 1}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })

  console.log(event.target.closest('div'))
  }


})


});
