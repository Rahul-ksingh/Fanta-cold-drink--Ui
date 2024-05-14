var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",                //.two wale div pe trigger lagega
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,                    //it means jo animate hua haik niche jane par wo upar aane pe wapas apni position pe aaye
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",                     //scrolltrigger lagaya hai to top se 120% and
    left: "0%"                       //left se 0% ki diretion me jaaye
}, 'orange')                          //har jagah 'orange' isliye likha hai ki saare ek saath scroll ho
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')
