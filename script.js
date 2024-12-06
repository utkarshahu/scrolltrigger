// gsap.to(".card1",{
//     scale:0.7,
//     opacity:0,
//     duration:5,
//     scrollTrigger:{
//         trigger:".card1",
//         start:"top 15%",
//         end:"bottom 15%",
//         scrub:"true",
//         markers:"true",
//     }
// })

// gsap.to(".card2",{
//     scale:0.7,
//     opacity:0,
//     duration:5,
//     scrollTrigger:{
//         trigger:".card2",
//         start:"top 15%",
//         end:"bottom 15%",
//         scrub:"true",
//         markers:"true",
//     }
// })

// gsap.to(".card3",{
//     scale:0.7,
//     opacity:0,
//     duration:5,
//     scrollTrigger:{
//         trigger:".card3",
//         start:"top 15%",
//         end:"bottom 15%",
//         scrub:"true",
//         markers:"true",
//     }
// })

// gsap.to(".card4",{
//     scale:0.7,
//     opacity:0,
//     duration:5,
//     scrollTrigger:{
//         trigger:".card4",
//         start:"top 15%",
//         end:"bottom 15%",
//         scrub:"true",
//         markers:"true",
//     }
// })

// gsap.to(".card5",{
//     scale:0.7,
//     opacity:0,
//     duration:5,
//     scrollTrigger:{
//         trigger:".card5",
//         start:"top 15%",
//         end:"bottom 15%",
//         scrub:"true",
//         markers:"true",
//     }
// })

// gsap.to(".card6",{
//     scale:0.7,
//     opacity:0,
//     duration:5,
//     scrollTrigger:{
//         trigger:".card6",
//         start:"top 15%",
//         end:"bottom 15%",
//         scrub:"true",
//         markers:"true",
//     }
// })


// method2
document.querySelectorAll(".card").forEach(card => {
    gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        duration: 5,
        scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "bottom 15%",
            scrub: true,
            markers: true,
        }
    });
});
