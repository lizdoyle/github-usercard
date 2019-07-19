/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/lizdoyle')
    .then( data => {
      console.log('api is working', data);
      // createCard(data.res)
      // const cards = document.querySelector('.cards');
      const apiData = data.data;
      GHCards.appendChild(createGHCard(apiData))
      // console.log(cards.appendChild(createGHCard(res.data)))
    })
    .catch (err => {
      console.log('Error, not pulling api', err);
    })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const GHCards = document.querySelector('.cards');

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then( data => {
      console.log('api is working', data);
      const apiData = data.data;
      console.log(apiData)
      GHCards.appendChild(createGHCard(apiData))
    })
  
  .catch (err => {
    console.log('Error, not pulling api', err);
  })
})
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createGHCard(login) {
  
  // creating all elements
  const card = document.createElement('div');
  card.classList.add('card');

  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const userUsername = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // setting text content
  
  // let address.setAttribute('href', link)
  // const link = #; 

  userImg.src = login.avatar_url;
  userName.textContent =  login.name;
  userUsername.textContent = login.login;
  location.textContent = login.location;
  profileLink.textContent = login.url;
  followers.textContent = login.followers;
  following.textContent = login.following;
  bio.textContent = login.bio;

  // adding the classList
  card.classList.add('card');
  cardInfo.classList.add('name');
  userName.classList.add('p');
  userUsername.classList.add('username');
  location.classList.add('p');
  profileLink.classList.add('p');
  followers.classList.add('p');
  following.classList.add('p');
  bio.classList.add('p');





  // cardInfo.classList.add('p');
  // profile.classList.add('a');
  // cardInfo.classList.add('p');
  // cardInfo.classList.add('p');
  // cardInfo.classList.add('p');


// appending
// card.appendChild('userImg');
// console.log(card);
// card.appendChild('cardInfo');

cardInfo.appendChild('userName');
cardInfo.appendChild('userUserName');
cardInfo.appendChild('location');
cardInfo.appendChild('profile');
profile.appendChild('profileLink');
cardInfo.appendChild('followers');
cardInfo.appendChild('following');
cardInfo.appendChild('bio');


return card;
};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// class GHCard {
//   constructor(followersArray) {
//     const cardContainer = document.querySelector('.cards');
//     followersArray.forEach((cardData) => {
//       cardContainer.appendChild(this.createGHCard(cardData));
//     });
//   }

//   // creates gh card with url
//   // returns rootElem of gh card
//   createGHCard(imageURL) {
//     const card = document.createElement('div');
//     const userImg = document.createElement('img');

//     card.classList.add('card');
//     userImg.classList.add('img');

//     userImg.src = imageURL;

//     card.appendChild(userImg);

//     return card;
//   }

//   // createCardData(data) {
//   //   const 
//   // }
// }

// const GHCards = new GHCard();




