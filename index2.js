const box=document.getElementById("box");

box.addEventListener("mouseover",()=>{
    box.style.background="orange";   
});
box.addEventListener("mouseout",()=>{
    box.style.background="lightblue";   
});
box.addEventListener("click",()=>{
    alert("Kliknuo si na kvvadrat!")
});
