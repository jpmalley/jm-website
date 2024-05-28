$("#mainNav").on("show.bs.collapse", () => {
    $("body").addClass("no-scroll");
    gsap.to(".nav-gradient", {
        autoAlpha: 1,
        duration: .3,
        top: 0,
    });
});

$("#mainNav").on("hide.bs.collapse", () => {
    $("body").removeClass("no-scroll");
    gsap.to(".nav-gradient", {
        autoAlpha: 0,
        duration: .3,
        top: "-100%",
    });
});