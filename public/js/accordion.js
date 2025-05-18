window.onload = function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var myElement = this.querySelector(".readMore");
        if (myElement.innerHTML == "Read more") {
            myElement.innerHTML = "Read less";
        } else if (myElement.innerHTML == "Read less") {
            myElement.innerHTML = "Read more";
        }

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
    }
}
