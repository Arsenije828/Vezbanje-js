const unos=document.getElementById("unos");

unos.addEventListener("keydown", (event)=>{
    console.log("Pritisnut taster:"+event.key);
    
});
unos.addEventListener("keyup",(event)=>{
    console.log("Otpusten taster:"+event.key);
    
});