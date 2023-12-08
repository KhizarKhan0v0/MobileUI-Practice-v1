let a = document.getElementById("menu-btn");
let menubox = document.getElementById("Menu");
console.log(a);
a.addEventListener("click",()=>{
    console.log("clicked");
    menubox.style.display="flex";
    menubox.style.position="absolute";
    menubox.style.bottom="0%";
    

    
});
document.getElementById("wallpaper").addEventListener("touchmove",()=>{
    console.log("clicked");
    menubox.style.display="flex";
    menubox.style.position="absolute";
    menubox.style.bottom="0%";
    menubox.style.backgroundColor="#13ffebbb";
    

    
});
document.getElementById("Menu").addEventListener("click",()=>{
    console.log("clicked");
    menubox.style.display="flex";
    menubox.style.position="absolute";
    menubox.style.bottom="-553rem";
    menubox.style.backgroundColor="#13ffebbb";
    

    
});

