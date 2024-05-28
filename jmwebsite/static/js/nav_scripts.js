function getScrollbarWidth() {
    const scrollDiv = document.createElement('div');
    scrollDiv.style.visibility = 'hidden';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);

    const innerDiv = document.createElement('div');
    scrollDiv.appendChild(innerDiv);

    const scrollbarWidth = scrollDiv.offsetWidth - innerDiv.offsetWidth;

    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
}

$("#mainNav").on("show.bs.collapse", () => {
    const scrollbarWidth = getScrollbarWidth();
    $("body").addClass("no-scroll").css("padding-right", `${scrollbarWidth}px`);
    $(".main-area>section.content").css("padding-right", `${scrollbarWidth}px`);

    gsap.to(".nav-gradient", {
        autoAlpha: 1,
        duration: .3,
        top: 0,
    });
});

$("#mainNav").on("hide.bs.collapse", () => {
    $("body").removeClass("no-scroll").css("padding-right", "");
    $(".main-area>section.content").css("padding-right", "");

    gsap.to(".nav-gradient", {
        autoAlpha: 0,
        duration: .3,
        top: "-100%",
    });
});
