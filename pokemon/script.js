
//----------------method without await





// const pokemonTypeURL="https://pokeapi.co/api/v2/type/"




// const nameURLMap={}


// //function to serach pokemon directly
// function fetchPokemon(){
//   const pokName= document.getElementById("search").value
//   const pokemonSearchURL=`https://pokeapi.co/api/v2/pokemon/${pokName}`
// console.log(pokemonSearchURL)

//   fetch(pokemonSearchURL)

//   .then(response => response.json())

//   .then(parsedResponse =>{
//     console.log("parsedResponse", parsedResponse)

//     const img=document.createElement("img")
//     img.setAttribute("src",parsedResponse.sprites.front_default);
//     img.setAttribute("height","200px") 
//     img.setAttribute("width","200px") 
   
//     document.body.append(img);

//   })




//   }


// //function to serach pokemon type

//  function fetchPokemonType(){
    
//  fetch(pokemonTypeURL)

   
//     .then(response => response.json())

//     .then(parsedResponse =>{
//       console.log("parsedResponse", parsedResponse)
       
//       const select = document.getElementById("pokemonTypes")

//       for(let i = 0;i<parsedResponse.results.length;i++){    //in api results array is given where all types are there under "name" key
//         const type= parsedResponse.results[i];
//         const typeName= type.name; //result[i].name
//         const typeURL = type.url; //result[i].url
//         nameURLMap[typeName]=typeURL;
        
        
//         const option = document.createElement("option")

//         option.innerText=typeName;
//         option.setAttribute("value",typeName)
//         option.setAttribute("data_url",typeURL)
//         select.append(option)
//       }
//     })
// }


// //function to print all pokemons of that type

// function pokemonNameSearchHandler()

//   {
//      const selectValue = document.getElementById("pokemonTypes").value;
    
//      console.log( selectValue,nameURLMap[selectValue]);

//      fetch(nameURLMap[selectValue])

//     .then(response => response.json())

//     .then(parsedResponse =>{
//       console.log("parsedResponse", parsedResponse)
//     const pokemonsData = parsedResponse.pokemon
   
//     const pokemonsListLength = pokemonsData.length>10 ? 10 : pokemonsData.length

//      const pokemonBox= document.getElementById("pokemonList");

//      pokemonBox.innerHTML="";


//     for(let i =0 ;i<pokemonsListLength;i++){
//       const pokemon = pokemonsData[i].pokemon;

//       const pokemonName = pokemon.name
//       const pokemonURL = pokemon.url; 
      

//     let imageSrcData = '' 
//     fetchPokemonData(pokemonURL).then(imageSrc => {
//       const pokemonDiv = document.createElement("div")

//       const pokemonPicture= document.createElement("img")

//       const pokemonNameSpan = document.createElement("span")

//       pokemonPicture.setAttribute("src",imageSrc)
//       pokemonNameSpan.innerText = pokemonName

//       pokemonDiv.append(pokemonPicture, pokemonNameSpan)

//       console.log(pokemonNameSpan)

//       pokemonBox.append(pokemonDiv);
//     })


  
//     }
//     })
//   }
   

// //function to get image of all the pokemons
//     async function fetchPokemonData(pokemonURL) {

//       const response = await fetch(pokemonURL) //will hold js function till it gets resolved

//       const parsedResponse = await response.json() //will give error as fetch is async task so it may or may not happen
      
//       return parsedResponse.sprites.front_default;
//     }


//----------------------------------------------------








// const user1 = {
//     name : "abc",
//     class : "def",
//     address : "ghi"

// }
// let {name} = user1;
// name="jk"
// console.log(user1);



//------------------------await function usage instead of .then()

const pokemonTypeURL="https://pokeapi.co/api/v2/type/"

let uniqueTypes = new Set();



const nameURLMap={}


//function to serach pokemon directly
function fetchPokemon(){
  const pokName= document.getElementById("search").value
  const pokemonSearchURL=`https://pokeapi.co/api/v2/pokemon/${pokName}`
console.log(pokemonSearchURL)

  fetch(pokemonSearchURL)

  .then(response => response.json())

  .then(parsedResponse =>{
    console.log("parsedResponse", parsedResponse)

    const img=document.createElement("img")
    img.setAttribute("src",parsedResponse.sprites.front_default);
    img.setAttribute("height","200px") 
    img.setAttribute("width","200px") 
   
    document.body.append(img);

  })




  }


//function to serach pokemon type

async function fetchPokemonType(){
    
  const response = await fetch(pokemonTypeURL)

   const parsedResponse = await response.json()
  
       
      const select = document.getElementById("pokemonTypes")

      for(let i = 0;i<parsedResponse.results.length;i++){    //in api results array is given where all types are there under "name" key
        const type= parsedResponse.results[i];
        const typeName= type.name; //result[i].name
        const typeURL = type.url; //result[i].url
        nameURLMap[typeName]=typeURL;
        
        
        const option = document.createElement("option")
       
        option.innerText=typeName;
        option.setAttribute("value",typeName)
        option.setAttribute("data_url",typeURL)
        select.append(option)
      }
    }



//function to print all pokemons of that type

async function pokemonNameSearchHandler()

  {
     const selectValue = document.getElementById("pokemonTypes").value;
    
    //  console.log( selectValue,nameURLMap[selectValue]);

     const response = await fetch(nameURLMap[selectValue])
      
     const parsedResponse = await response.json()

    const pokemonsData = parsedResponse.pokemon
   
    const pokemonsListLength = pokemonsData.length>10 ? 10 : pokemonsData.length

     const pokemonBox= document.getElementById("pokemonList");

     pokemonBox.innerHTML="";


    for(let i =0 ;i<pokemonsListLength;i++){
      const pokemon = pokemonsData[i].pokemon;

      const pokemonName = pokemon.name
      const pokemonURL = pokemon.url; 
      

    let imageSrcData = '' 
    const imageSrc = await fetchPokemonData(pokemonURL)
  
      const pokemonDiv = document.createElement("div")
      pokemonDiv.classList.add("flip-card")
      pokemonDiv.id = `${pokemon.name}`
      pokemonBox.append(pokemonDiv);




   

   



//----------------------
const flipCardInner = document.createElement("div")
flipCardInner.classList.add("flip-card-inner")
flipCardInner.id = `${pokemon.type}`
pokemonDiv.append(flipCardInner)


// front of card
const frontCard = document.createElement("div")
frontCard.classList.add('front-pokemon-card')

const pokemonPicture= document.createElement("img")
pokemonPicture.src = `${pokemon.frontImage}`
pokemonPicture.classList.add("front-pokemon-image")

const pokemonNameSpan = document.createElement("span")
pokemonNameSpan.innerHTML = `<a href="/pokemon.html?pokemon_id=${pokemon.pokemon_id}">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>`

const frontPokeID = document.createElement('p')
frontPokeID.textContent = `#${pokemon.pokemon_id}`
frontPokeID.classList.add("front-poke-id")

const frontDescription = document.createElement("p")


const frontPokeType = document.createElement('p')
frontPokeType.textContent = `${pokemon.type.toUpperCase()}`
frontPokeType.classList.add("front-pokemon-type")

frontCard.append(frontImage, frontPokeID, frontPokeName, frontDescription, frontPokeType)

// back of card
const backCard = document.createElement("div")
backCard.classList.add('back-pokemon-card')

const backImage = document.createElement('img')
backImage.src = `${pokemon.backImage}`
backImage.classList.add("back-pokemon-image")

const backPokeID = document.createElement('p')
backPokeID.textContent = `#${pokemon.pokemon_id}`
backPokeID.classList.add("back-poke-id")

const backPokeName = document.createElement('h2')
backPokeName.innerHTML = `<a href="/pokemon.html?pokemon_id=${pokemon.pokemon_id}">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>`
backPokeName.classList.add("back-pokemon-name")

const backPokeAbilities = document.createElement("p")
backPokeAbilities.innerHTML = `<p>Abilities:<br>${pokemon.abilities}<p>`
backPokeAbilities.classList.add("back-pokemon-abilities")

backCard.append(backImage, backPokeID, backPokeName, backPokeAbilities)
flipCardInner.append(frontCard, backCard);
uniqueTypes.add(pokemon.type);








      
      // pokemonPicture.setAttribute("src",imageSrc)
      // pokemonNameSpan.innerText = pokemonName

      // pokemonDiv.append(pokemonPicture, pokemonNameSpan)

      // console.log(pokemonNameSpan)

       pokemonBox.append(pokemonDiv);
    }


  
    }
    
  
   

//function to get image of all the pokemons
    async function fetchPokemonData(pokemonURL) {

      const response = await fetch(pokemonURL) //will hold js function till it gets resolved

      const parsedResponse = await response.json() //will give error as fetch is async task so it may or may not happen
      
      return parsedResponse.sprites.front_default;
    }

