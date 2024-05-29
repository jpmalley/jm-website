function animateBoxes() {
    gsap.from(".grid-container > div, .tab-footer", {
        y: "100%", 
        autoAlpha: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: "power3.out" 
    });
}
function animateRows() {
    gsap.from("#development .row, .tab-footer", {
        y: "100%", 
        autoAlpha: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: "power3.out" 
    });
}

// Run animation on tab shown
document.getElementById('design-tab').addEventListener('shown.bs.tab', function (event) {
    animateBoxes();
});
document.getElementById('development-tab').addEventListener('shown.bs.tab', function (event) {
    animateRows();
});

// Run animation on initial load if tab is active
if (document.getElementById('design').classList.contains('show')) {
    animateBoxes();
}

document.addEventListener("DOMContentLoaded", function() {
    const grids = document.querySelectorAll('.grid-container > div');

    grids.forEach(grid => {
        grid.addEventListener('mouseenter', () => {
            gsap.to(grid, {
                scale: 1.01,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        grid.addEventListener('mouseleave', () => {
            gsap.to(grid, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
            gsap.to(grid, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        grid.addEventListener('mousemove', (e) => {
            const rect = grid.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const moveX = (x - rect.width / 2) / rect.width * 20;
            const moveY = (y - rect.height / 2) / rect.height * 20;

            gsap.to(grid, {
                x: moveX,
                y: moveY,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
});

// GSAP animation for hover effect
function applyHoverEffects() {
    if (window.innerWidth >= 992) {
        document.querySelectorAll('.grid-link').forEach(anchor => {
            const badge = anchor.querySelector('.badge');
            const text = badge.querySelector('.badge-text');
    
            anchor.addEventListener('mouseenter', () => {
                gsap.to(badge, { width: "auto", borderRadius: "50px", duration: 0.3 });
                gsap.to(text, { opacity: 1, x: "0%", duration: 0.3 });
                badge.classList.add('expanded');
            });
    
            anchor.addEventListener('mouseleave', () => {
                gsap.to(badge, { width: "20px", height: "20px", borderRadius: "50%", duration: 0.3 });
                gsap.to(text, { opacity: 0, x:"-100%", duration: 0.3 });
                badge.classList.remove('expanded');
            });
        });
    }
}

function removeHoverEffects() {
    document.querySelectorAll('.grid-link').forEach(anchor => {
        const badge = anchor.querySelector('.badge');
        const text = badge.querySelector('.badge-text');

        anchor.removeEventListener('mouseenter', () => {
            gsap.to(badge, { width: "auto", borderRadius: "50px", duration: 0.3 });
            gsap.to(text, { opacity: 1, x: "0%", duration: 0.3 });
            badge.classList.add('expanded');
        });

        anchor.removeEventListener('mouseleave', () => {
            gsap.to(badge, { width: "20px", height: "20px", borderRadius: "50%", duration: 0.3 });
            gsap.to(text, { opacity: 0, x:"-100%", duration: 0.3 });
            badge.classList.remove('expanded');
        });
    });
}

// Initial call
applyHoverEffects();

// Re-apply hover effects on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        applyHoverEffects();
    } else {
        removeHoverEffects();
    }
});

$(document).ready(function() {
    $(".read-more").on("show.bs.collapse", function(event) {
        const chevron = $(event.target).prev().find(".fa-chevron-down").get(0);
        const title = $(event.target).prev().find("h2");
        title.addClass("active");
        gsap.to(chevron, { rotate: -180, duration: 0.3 });
    });

    $(".read-more").on("hide.bs.collapse", function(event) {
        const chevron = $(event.target).prev().find(".fa-chevron-down").get(0);
        const title = $(event.target).prev().find("h2");
        title.removeClass("active");
        gsap.to(chevron, { rotate: 0, duration: 0.3 });
    });
});

$(document).ready(function() {
    $(".switch-tab-dev").on("click", function() {
        $('#development-tab').tab('show');
    });
    $(".switch-tab-design").on("click", function() {
        $('#design-tab').tab('show');
    });
});