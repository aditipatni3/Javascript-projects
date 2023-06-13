const progress=document.getElementById("progress");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const circles=document.querySelectorAll(".circle");

var currentActive=1;
next.addEventListener("click", ()=>{
    currentActive++;
    if(currentActive>circles.length){
        currentActive=circles.length;
    }
    update();
})

prev.addEventListener("click", ()=>{
    currentActive--;
    if(currentActive<1){
        currentActive=1;
    }
    update();
})


function update(){
    // update active class in circle
    circles.forEach((circle, index)=>{
        if(index < currentActive){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    })


    //update progress bar
var activeCircles=document.querySelectorAll(".active");
progress.style.width=(activeCircles.length-1)/(circles.length-1)*100 +"%";


    //change the button enabled and disabled state
if(currentActive===1){
}
else if(currentActive===circles.length){
    next.disabled=true;
}
else{
    prev.disabled=false;
    next.disabled=false;

}

}