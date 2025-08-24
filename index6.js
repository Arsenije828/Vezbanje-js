const parent=document.getElementById("parent")
const child=document.getElementById("child")

parent.addEventListener("click",()=>{
 
    alert("Kliknut parent!")
})
child.addEventListener("click",(e)=>{
       e.stopPropagation();
    alert("Kliknut child!")
})