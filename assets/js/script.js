const sidebar = document.querySelector(".sidebar")
const sidebarMenu = document.querySelector(".sidebar-menu")
const closeBar = document.querySelector(".sidebar-close")
sidebarMenu.addEventListener("click",()=>{
    sidebar.style.display = "flex";
    gsap.from(".sidebar",{
        right: "-100vw",
        duration : 2
    })
})
closeBar.addEventListener("click",()=>{
    gsap.to(".sidebar",{
        right: "-100vw",
        duration : 2
    })
    console.log("clicked")
})
// Starting Lunch Animations
window.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
}) 
let tl = gsap.timeline();

tl.from(".lines",{
    opacity:0,
    duration:1,
})
tl.from(".circle-1",{
    opacity:0,
    duration:0.5,
})
tl.from(".circle-2",{
    opacity:0,
    duration:0.5,
})
tl.from(".circle-3",{
    opacity:0,
    duration:0.5,
})

tl.from(".navbar",{
    opacity:0,
    duration:1,
})
tl.from(".intro",{
    opacity:0,
    duration:1,
})
gsap.from(".about h3",{
    opacity:0,
    x:-50,
    duration:0.5,
    scrollTrigger:{
        trigger:".about h3",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from(".about p",{
    opacity:0,
    x:-50,
    duration:1,
    scrollTrigger:{
        trigger:".about p",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from(".about .left",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".about .left",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 30%",
        scrub:1,
    }
})
gsap.from(".about .right",{
    opacity:0,
    x:-100,
    duration:2,
    scrollTrigger:{
        trigger:".about .right",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from(".services h3",{
    opacity:0,
    x:-50,
    duration:0.5,
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from(".services .ser-p",{
    opacity:0,
    x:-50,
    duration:1,
    scrollTrigger:{
        trigger:".services .ser-p",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from(".s-c-1",{
    opacity:0,
    scale:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".s-c-1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1,
    }
})
gsap.from(".s-c-2",{
    opacity:0,
    scale:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".s-c-2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1,
    }
})
gsap.from(".s-c-3",{
    opacity:0,
    scale:0.2,
    duration:1,
    scrollTrigger:{
        trigger:".s-c-3",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1,
    }
})
gsap.from(".s-c-4",{
    opacity:0,
    scale:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".s-c-4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1,
    }
})
gsap.from(".projects h3",{
    opacity:0,
    x:-100,
    duration:2,
    scrollTrigger:{
        trigger:".projects h3",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from(".projects p",{
    opacity:0,
    x:-50,
    duration:0.5,
    scrollTrigger:{
        trigger:".projects p",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from(".projects .main",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".projects .main",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from("footer .left",{
    opacity:0,
    x:-50,
    duration:0.5,
    scrollTrigger:{
        trigger:"footer .left",
        scroller:"body",
        start:"top 90%",
        end:"top 30%",
        scrub:2,
        // markers:true
    }
})
gsap.from("footer .right ul",{
    opacity:0,
    x:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"footer .left",
        scroller:"body",
        start:"top 90%",
        end:"top 30%",
        scrub:2,
        // markers:true
    }
})
gsap.from("footer .bottom p",{
    opacity:0,
    x:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"footer .for-bottom",
        scroller:"body",
        start:"top 90%",
        end:"top 30%",
        scrub:3,
    }
})

