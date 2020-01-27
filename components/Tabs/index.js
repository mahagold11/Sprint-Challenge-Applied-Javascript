// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// create component

const topicCreator = (topics) => {
    const newTab = document.createElement('div');

    newTab.classList.add('tab');
    newTab.textContent = topics;

    return newTab
}

// entry point

const entryPoint = document.querySelector('.topics');

// get promise

const dataPromise = axios.get("https://lambda-times-backend.herokuapp.com/topics");

//.then 
dataPromise.then(response => {
    // console.log('res',response);
    // console.log(response.data.topics);

    response.data.topics.forEach(item =>  {
        const topicTab =  topicCreator(item)
        entryPoint.appendChild(topicTab)
    })
})
