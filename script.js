const BTN = document.querySelector("#btn");
const JOKE_DISPLAY = document.querySelector("#joke-display");

function showJoke({joke}){
    JOKE_DISPLAY.innerText = joke;
    BTN.innerText = "GIVE ME MORE"
    JOKE_DISPLAY.classList.add("joke-animation");
    setTimeout(()=>{
        JOKE_DISPLAY.classList.remove("joke-animation");
    },2100);
}

function fetchJoke(){

    BTN.innerText = "LOADING..."

    fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1",{

        headers:{
            "X-Api-Key" : "dW93VfS4c4ZMrLYUbf4/dQ==Mmq2aDl4YYvFIJ77"
        }

    }).then(response => {

        if(!response.ok){

            throw new Error(`HTTP error! Status: ${response.status}`);

        }

        return response.json();

    }).then(data => {

        showJoke(data[0]);

    }).catch(error => {

        console.error("There was a problem during the fetch operation", error);

    })

}

BTN.addEventListener("click",fetchJoke);