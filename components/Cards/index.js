// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// create component

const articleCreator = (articleHeadline, articleAuthor, articleImg) => {

    const newCard = document.createElement('div');
    const newHeadline = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newImg = document.createElement('div');
    const newImgUrl = document.createElement('img');
    const newAuthorName = document.createElement('span');

    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    newImg.classList.add('img-container');

    newHeadline.textContent = articleHeadline;
    newAuthorName.textContent = `By ${articleAuthor}`;
    newImgUrl.src = articleImg;

    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newImg);
    newImg.appendChild(newImgUrl);
    newAuthor.appendChild(newAuthorName);

    return newCard;
}

// entry point

const cardsContainer = document.querySelector('.cards-container');


// get promise

const articlesPromise = axios.get("https://lambda-times-backend.herokuapp.com/articles");

articlesPromise.then(response => {
    // console.log('res',response);
    // console.log(response.data.articles);
    
    articlesArray = Object.values(response.data.articles);

     articlesArray.forEach(item => {
        item.forEach( article => cardsContainer.appendChild(articleCreator(article.headline, article.authorName, article.authorPhoto)))
        //  console.log('item',item);
     })
})
