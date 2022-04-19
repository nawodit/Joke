let getJoke = document.querySelector('.joke');
let getBtn1 = document.querySelector('.btn1');

let newJoke = ()=>{
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'joke-generator.p.rapidapi.com',
    //         'X-RapidAPI-Key': '3a9e3d17f3msh7bc4f2e9f4a8eadp169278jsnafa55ace3863'
    //     }
    // };
    
    // fetch('https://joke-generator.p.rapidapi.com/generate-joke', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .then((data) =>{
    //                  console.log(data.body)
    //                  getJoke.innerHTML = data.content
    //              })
    //     .catch(err => console.error(err));
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
    //         'X-RapidAPI-Key': '3a9e3d17f3msh7bc4f2e9f4a8eadp169278jsnafa55ace3863'
    //     }
    // };
    
    // fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
    //     .then(response => response.json())
    //     // .then(response => console.log(response))
    //     .then((data) =>{
    //         console.log(data.body)
    //         getJoke.innerHTML = data.body
    //     })
    //     .catch(err => console.error(err));


    let setHeader ={
        headers:{
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res)=> res.json())
    .then((data) =>{
        getJoke.innerHTML = data.joke
    })
    .catch((err)=>{
        console.log(err)
    })
}

getBtn1.addEventListener("click",newJoke);
newJoke();
function openWhatsApp() {
	window.open(`whatsapp://send?text= ${getJoke.innerHTML}\n  sarcasticjoke.netlify.app`);
    }