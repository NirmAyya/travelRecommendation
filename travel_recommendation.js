


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

