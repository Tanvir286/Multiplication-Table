


let box  = document.querySelector(".box ")
let btn  =document.querySelector(".btn")
let error  =document.querySelector(".error")
let show  =document.querySelector(".show")


btn.addEventListener("click",function () {
   if(box.value == ""){
      error.innerHTML = ("this is empty number");
   }

   else if( (!(box.value-1) === 0 ) || (box.value >= 0)){
                 
            for (i=1;i<=10;i++){ 
               show.innerHTML += `<ul class="test${i}"></ul>`
               document.querySelector(`.test${i}`).innerHTML += `<li>  ${box.value}  X  ${i} = ${i*box.value} </li>` }   
   }
 
   else if(!(box.value-1)){
      error.innerHTML =("Error");
   }

    
   else{
      error.innerHTML =("positive number");
   }
  
});


