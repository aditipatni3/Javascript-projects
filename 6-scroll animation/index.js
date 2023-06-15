// alert("helllo");

const blocks=document.querySelectorAll(".block");

window.addEventListener("scroll", scrolling);

function scrolling(){
    const triggerBottom= window.innerHeight *(4/5);

    blocks.forEach(block => {
        const blockTop= block.getBoundingClientRect().top;
        if(triggerBottom>blockTop){
            block.classList.add("show");
        }
        else{
            block.classList.remove("show");
        }
    })
}