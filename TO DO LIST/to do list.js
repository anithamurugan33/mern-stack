let inputbox=document.getElementById("inputbox");
let listcontainer=document.getElementsByClassName("list-container")[0];


function add(){
   if(inputbox.value==''){
    alert("You must write something?")
   }

   else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; 
    li.appendChild(span);

     inputbox.value=''
     savedata()

   //   span.onclick = function () {
   //    li.remove();
   //  };
   } 
}

listcontainer.addEventListener("click", function(e) {
   if (e.target.tagName === 'LI') { 
       e.target.classList.toggle("checked");
       savedata()
   } 
   
   else if (e.target.tagName === 'SPAN') {  
       e.target.parentElement.remove(); 
       savedata()
   }
}, false);

function savedata(){
       localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask(){
   listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();
 