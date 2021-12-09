 var openbtn = document.getElementById("cart-btn");
 const closebtn = document.getElementById("close");
 const displaymodal= document.getElementById("bg-modal");

 
    openbtn.addEventListener("click", function open(){
        displaymodal.removeAttribute('display'); 
    
    });
  
 


 decrease.addEventListener("click", function reduce(){
    count = count - 1;
    //updating count element
  value.textContent = count;
  });
