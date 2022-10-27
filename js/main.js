//DOM WORK....

let generalContainer = document.getElementById("characters");

const getRickAndMorty = async () => {

    //This syntax is aka "SUGAR SYNTAX"
    try {

        let res = await axios.get("https://rickandmortyapi.com/api/character");

        // console.log(res.data.results);

        let characters = res.data.results;

        if(characters[0].id != undefined){
            generalContainer.innerHTML = "";
            //Then I just render the stuff on the html
            characters.map(character => {
                generalContainer.innerHTML += `<div class="rickAndMorty">${character.name}<img src="${character.image}" alt="${character.id}"/></div>`; 
            })

        }

    } catch (error) {

        console.log(error);
    }
    
}


const selectCharacter = (character) => {
    console.log(character);
}

setTimeout(()=>{
    getRickAndMorty();
},1500);
