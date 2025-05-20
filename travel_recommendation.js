
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

    const searchText = document.getElementById("travelInput").value.trim().toLowerCase();
    const recommendationsTitle = document.querySelector("h2"); // Target the <h2> element
    recommendationsTitle.innerHTML = "Searching..."; // Temporary update while fetching

    fetch("travel_recommendation_api.json")
        .then(response => response.json()) // Convert response to JSON
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

            // Update the <h2> with the search results
            if (results.length > 0) {
                recommendationsTitle.innerHTML = ""; // Clear previous text

                results.forEach(item => {
                    // Create elements
                    let itemImage = document.createElement("img");
                    let itemName = document.createElement("h3");
                    let itemDescription = document.createElement("p");

                    // Set content
                    itemImage.src = item.imageUrl;
                    itemImage.alt = item.name;
                    itemName.textContent = item.name;
                    itemDescription.textContent = item.description;

                    // Append to <h2> instead of #results
                    recommendationsTitle.appendChild(itemImage);
                    recommendationsTitle.appendChild(itemName);
                    recommendationsTitle.appendChild(itemDescription);
                });
            } else {
                recommendationsTitle.innerHTML = "No results found.";
            }
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
            recommendationsTitle.innerHTML = "Error loading data.";
        });
    }



function resetPage(){
    results=[];
    resultsContainer.innerHTML = "";
}

