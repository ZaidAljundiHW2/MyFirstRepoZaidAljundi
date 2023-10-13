let slideCount = 1;

function nextSlide(){
    slideCount++;
    let x = document.getElementsByClassName("mySlides");
    for (var i = 1; i < x.length + 1; i++) {

        x[i].style.display="none";
    }

    if (slideCount > x.length) {

        alert("You have reached the end of the SlideShow");
        slideCount = x.length;

    }

    else {
        x[slideCount].style.display="absolute";
    }


}

function prevSlide(){
    slideCount--;
    let x = document.getElementsByClassName("mySlides");
    for (var i = 1; i < x.length + 1; i++) {

        x[i].style.display="none";
    }

    if (slideCount = 0) {

        alert("You have reached the end of the SlideShow");
        slideCount = 1;

    }

    else {
        x[slideCount].style.display="absolute";

    }

}