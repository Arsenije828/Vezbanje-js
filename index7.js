const lista=document.getElementById("list")
lista.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI"){
    alert("Kliknuo si na: "+ event.target.innerText);

    }
})