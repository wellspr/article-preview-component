const shareOptions = document.querySelector(".share");
shareOptions.style.display = "none";
let shareOptionsIsVisible = false;

const authorDetails = document.querySelector(".author");

const btns = document.querySelectorAll(".share-btn");

const toggleShareVisibility = () => {
    if (!shareOptionsIsVisible) {
        shareOptions.style.display = "block";
        authorDetails.style.display = "none";
        shareOptionsIsVisible = true;
    }
    else {
        shareOptions.style.display = "none";
        authorDetails.style.display = "flex";
        shareOptionsIsVisible = false;
    }
};

Object.values(btns).map(btn => {
    btn.addEventListener("click", toggleShareVisibility)
});