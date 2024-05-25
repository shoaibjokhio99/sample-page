const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnim(){
    let tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".bounding-elem",{
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .3,

    })
    .from(".hero-footer",{
        y:-10,
        opacity:0,
        duration:1,
        ease: Expo.easeInOut

        

    })
}


function circleMouseFollower(){
    window.addEventListener("mousemove", function(details){
        document.querySelector(".mini-circle").style.transform = `translate(${details.clientX}px,${details.clientY}px)`;

    })
}

circleMouseFollower();
firstPageAnim();