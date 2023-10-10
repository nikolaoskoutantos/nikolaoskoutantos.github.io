
// ==== SHOW MENU ==== //
$(document).on('click', '#toggle_btn', function () {
    document.getElementById("nav_menu").classList.add("show");
});


// ==== HIDE MENU ==== //
$(document).on('click', '#close_btn', function () {
    document.getElementById("nav_menu").classList.remove("show");
});


// ==== Animate on Scroll Initialize  ==== //
$(document).ready(function () {
    console.log("In case you are here, I am very happy but I am feeling embarassed too, about my bugs.Feel free to give me feedback at nikolaoskoutantos@gmail.com || 0030 6909214262");
});

function openNewTab(url) {
    window.open(url, '_blank');
}

window.smoothScroll = {
    scrollToElement: function (elementId) {
        var target = document.getElementById(elementId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
};

function BlazorScrollToId(id) {
    const element = document.getElementById(id);
    if (element instanceof HTMLElement) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
}


// ==== GSAP Animations ==== //
