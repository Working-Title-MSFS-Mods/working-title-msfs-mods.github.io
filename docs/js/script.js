
function customscroll(type, element = false) {
    var offset = 120;
    if (type == "content-top") {
        element = document.getElementsByClassName("whitesection")[0];
        offset = 200;
    }
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    return false;
}

function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        let topbar = document.getElementsByClassName("topbar")[0];
        let menubar = document.getElementsByClassName("menubar")[0];
        let toggle = document.getElementsByClassName("menutoggle")[0];
        let menu = document.getElementsByClassName("menu")[0];

        if (window.location.hash) {
            var hash = window.location.hash.substr(1);
            var element = document.getElementById(hash)
            customscroll("element", element);
            element.classList.add("active");
            console.log(document.getElementById(hash + "-collapse"));
            document.getElementById(hash + "-collapse").classList.add("show");
        };

        toggle.addEventListener('click', function (e) {
            menu.classList.toggle("active");
            topbar.classList.toggle("active");
            menubar.classList.toggle("active");
        });

        let h2s = document.getElementsByTagName("h2");
        Array.from(h2s).forEach(function (el) {
            if (isElementInViewport(el)) {
                el.classList.add("in");
            } else {
                el.classList.remove("in");
            };
        })

        document.addEventListener('scroll', function (e) {
            if (window.scrollY != 0) {
                topbar.classList.add("dark");
                menubar.classList.add("dark");
            } else {
                topbar.classList.remove("dark");
                menubar.classList.remove("dark");
            };
            Array.from(h2s).forEach(function (el) {
                if (isElementInViewport(el)) {
                    el.classList.add("in");
                } else {
                    el.classList.remove("in");
                };
            });
        });
    };
};