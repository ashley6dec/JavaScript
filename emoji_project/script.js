function searchEmoji(){
    let inputValue=document.getElementById("Search_field").value;
      displayResult(inputValue);
      return false;
}


function displayResult(searchQuery=""){
    let filteredData = emojiList.filter((e) =>{
        if(e.description.indexOf(searchQuery)!= -1){  //if it is found
            return true;
        }
        if(e.tags.some(ele=>ele.startsWith(searchQuery))){
    return true;
        }
    if(e.aliases.some(ele=>ele.startsWith(searchQuery))){
    return true;}
    })

    let parent=document.getElementById("Search_result_container");

   parent.innerHTML=""; //to clear data to display ans

    filteredData.forEach((e)=>{   //emojiList is directly from emoji.js file
        let newRow=document.createElement("tr");
        let new_Emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_desc = document.createElement("td");
       
       new_Emoji.innerText = e.emoji;  //object fetching from emoji.js file
       new_aliases.innerText = e.aliases;
       new_desc.innerText = e.description;
       
        // new_Emoji.classList.add("emoji");
        // new_aliases.classList.add("aliases");
        // new_desc.classList.add("description");
        
      newRow.appendChild(new_Emoji);
      newRow.appendChild(new_aliases);
      newRow.appendChild(new_desc);
      

      parent.appendChild(newRow);

    })

}

document.getElementById("Search_field").
    addEventListener("keyup",searchEmoji);



window.onload= () =>displayResult();


