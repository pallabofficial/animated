// ---------------------------------------moving the green cursor and blurred cursor--------------------------------------
function movingPointer(){
    window.addEventListener("mousemove", function(event){
        console.log(event);
    })
}
movingPointer();



let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    cursorBlur.style.transform = `translate(${dets.clientX - 100}px , ${dets.clientY - 100}px)`;

    // cursor.style.left = dets.x + "px";
    // cursor.style.top = dets.y+ "px";
    // cursorBlur.style.left = dets.x -100 + "px";
    // cursorBlur.style.top = dets.y+ -100 + "px";
})

// ------------------------------------------navbar animations--------------------------------------

gsap.to("#nav", {
    backgroundColor: "black",
    duration:"1",
    height:"14vh",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
    
})

// -------------------------------------------main div animations---------------------------------

gsap.to("#main", {
    backgroundColor:"black", 
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:"3",
    }

})