


function sendMessage(){
    const name= document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`${name} we will send you an email at ${email} very soon!`);

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
}


fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); 
    })
    .catch(error => console.error('Error loading JSON:', error));

function search(){

//lists of keywords to make searching more streamlined
const BeachVariations=["beach","beaches","beache","beech",];

//keywords for temples
const templeVariations=["temple","temples","tempel","tempels"];

//keywords for countries
const australiaVariations=["australia","oceania","astralia","ostralia","sydney","melbourne"];
const japanVariations=["japan","tokyo","kyoto","rising sun","japans"];
const brazilVariations=["japan","rio de janeiro","rio","são paulo","sao paulo"];




var searchText=document.getElementById("travelInput").value;

//preprocess the text
searchText=searchText.trim().toLowerCase();

//match the input to beach, temple or country
switch (true) {
    case BeachVariations.includes(searchText):
        


        break;
    case templeVariations.includes(searchText):
        

        break;
    case australiaVariations.includes(searchText):

        break;
    case japanVariations.includes(searchText):

    break;
    case brazilVariations.includes(searchText):

    break;
    default:
        
        

}


}

function loadRecommendations(country){



}
