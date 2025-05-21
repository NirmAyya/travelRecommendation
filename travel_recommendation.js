
//results will store the reccomendations to show on the page
let results=[];


function sendMessage(){
    const name= document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`${name} we will send you an email at ${email} very soon!`);

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
}




function search() {
    // Lists of keywords to make searching more streamlined
    const BeachVariations = ["beach", "beaches", "beache", "beech"];
    const templeVariations = ["temple", "temples", "tempel", "tempels"];
    const australiaVariations = ["australia", "oceania", "astralia", "ostralia", "sydney", "melbourne"];
    const japanVariations = ["japan", "tokyo", "kyoto", "rising sun", "japans"];
    const brazilVariations = ["brazil", "rio de janeiro", "rio", "são paulo", "sao paulo"];

    // Get user input and target elements
    const searchText = document.getElementById("travelInput").value.trim().toLowerCase();
    const recommendationsTitle = document.querySelector("h2"); 
    const resultsContainer = document.getElementById("results"); 

    // Show loading state
    resultsContainer.innerHTML = ""; 



    // Fetch JSON data
    fetch("travel_recommendation_api.json")
        .then(response => response.json()) 
        .then(data => {
            let results = [];

            // Identify search category
            if (BeachVariations.includes(searchText)) {
                results = data.beaches;
            } else if (templeVariations.includes(searchText)) {
                results = data.temples;
            } else {
                // Identify country based on variations
                if (australiaVariations.includes(searchText)) {
                    results = data.countries.find(c => c.name.toLowerCase() === "australia")?.cities || [];
                } else if (japanVariations.includes(searchText)) {
                    results = data.countries.find(c => c.name.toLowerCase() === "japan")?.cities || [];
                } else if (brazilVariations.includes(searchText)) {
                    results = data.countries.find(c => c.name.toLowerCase() === "brazil")?.cities || [];
                } else {
                    results = []; // No match found
                }
            }
            

            // Ensure results are correctly displayed
            if (results.length > 0) {
                recommendationsTitle.textContent = "Search Results"; 

                results.forEach(item => {
                    // Create a div for each result
                    let itemDiv = document.createElement("div");
                    itemDiv.classList.add("card"); 

                    let itemImage = document.createElement("img");
                    let itemName = document.createElement("h3");
                    let itemDescription = document.createElement("p");

                    // Set content
                    itemImage.src = item.imageUrl;
                    itemImage.alt = item.name;
                    itemName.textContent = item.name;
                    itemDescription.textContent = item.description;

                    // Append elements in the correct order
                    itemDiv.appendChild(itemImage);
                    itemDiv.appendChild(itemName);
                    itemDiv.appendChild(itemDescription);

                    // Append itemDiv inside #results div
                    resultsContainer.appendChild(itemDiv);
                });
            } else {
                recommendationsTitle.textContent = "No results found.";
            }
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
            recommendationsTitle.textContent = "Error loading data.";
        });
}


function resetPage(){
    results=[];
     const resultsContainer = document.getElementById("results");
     const recommendationsTitle = document.querySelector("h2");
    resultsContainer.innerHTML = ""; 
    recommendationsTitle.textContent = "search for travel destinations"; 
   
}

