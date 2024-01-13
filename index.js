gsap.to("#nav", {
    backgroundColor: "black",
    duration:"1",
    height:"14vh",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
    
})

gsap.to("#main", {
    backgroundColor:"black", 
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:"3",
    }

})