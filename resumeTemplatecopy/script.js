const inputField = document.getElementByClass("input1");
const outputField = document.getElementByClass("output1")

inputField.addEventListener('input', function(e){
   const inputValue = e.target.value;

   let inner_div = document.createElement("div");
  
    inner_div.textContent = inputValue;

  inner_div.classList.add("inner_divs");
    outputField.append(inner_div);
  
});