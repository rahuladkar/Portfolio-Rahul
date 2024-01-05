function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

// rotating an arrow in navbar

gsap.to("#nav svg", {
    rotate: 90,
    duration: 1,
    backgroundColor: "#222",
    scrollTrigger: {
        trigger: "#nav svg",
        scroller: "#main",
        start: "top -5%",
        end: "top -6%",
        scrub: 1
    }
})
gsap.to("#nav svg", {
    backgroundColor: "#222",
    scrollTrigger: {
        trigger: "#nav svg",
        scroller: "#main",
        start: "top -15%",
        end: "top -400%",
        scrub: 3
    }
})

gsap.to("#scroller-h1 h1", {
    transform: "translateX(-20%)",
    scrollTrigger: {
        trigger: "#scroller-h1",
        scroller: "#main",
        start: "top 60%",
        end: "bottom 30%",
        scrub: 5,
    },
});

// resume download code

function downloadPDF() {
    var pdfPath = 'https://drive.google.com/file/d/1uMZp3MQLpHn0lz6ejgsiHxe5CSEZmxGE/view?usp=drive_link';
    var link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'downloaded_file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }