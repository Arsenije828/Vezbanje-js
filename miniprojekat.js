const box=document.getElementById("box")
const plusBtn=document.getElementById("plusBtn")
const minusBtn=document.getElementById("minusBtn")
function createCounter(){
    let count=0;

    const incerase= ()=>{
        count=count+1
        box.textContent=count
    }
      const decrease= ()=>{
        count=count-1
        box.textContent=count
    }

    return{ incerase ,decrease}
}
const counter=createCounter()
plusBtn.addEventListener("click",counter.incerase)
minusBtn.addEventListener("click",counter.decrease)