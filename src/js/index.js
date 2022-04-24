const shareOptionsMobile = document.querySelector(".share");
shareOptionsMobile.style.display = "none";
let shareOptionsMobileIsVisible = false;

const authorDetails = document.querySelector(".author");

const btnsMobile = document.querySelectorAll(".share-btn.mobile");

const showShareOptionsMobile = () => {
    shareOptionsMobile.style.display = "block";
    authorDetails.style.display = "none";
    shareOptionsMobileIsVisible = true;
};

const hideShareOptionsMobile = () => {
    shareOptionsMobile.style.display = "none";
    authorDetails.style.display = "flex";
    shareOptionsMobileIsVisible = false;
};

const toggleShareVisibility = () => {
    if (!shareOptionsMobileIsVisible) {
        showShareOptionsMobile();
    }
    else {
        hideShareOptionsMobile();
    }
};

Object.values(btnsMobile).map(btn => {
    btn.addEventListener("click", toggleShareVisibility)
});

// Desktop
const shareOptionsDesktop = document.querySelector(".share");
shareOptionsDesktop.style.display = "none";
let shareOptionsDesktopIsVisible = false;

const btnDesktop = document.querySelector(".share-btn.desktop");
const iconNormal = document.querySelector(".share-btn.desktop .icon-share");
const iconInverted = document.querySelector(".share-btn.desktop .icon-share-inverted");

const showShareOptions = () => {
    shareOptionsDesktop.style.display = "block";
    iconInverted.style.display = "flex";
    btnDesktop.classList.add("clicked");
    iconNormal.style.display = "none";
    shareOptionsDesktopIsVisible = true;
};

const hideShareOptions = () => {
    shareOptionsDesktop.style.display = "none";
    iconInverted.style.display = "none";
    btnDesktop.classList.remove("clicked");
    iconNormal.style.display = "flex";
    shareOptionsDesktopIsVisible = false;
};

const toggleShareVisibilityDesktop = () => {
    if (!shareOptionsDesktopIsVisible) {
        showShareOptions();
    }
    else {
        hideShareOptions();
    }
};

btnDesktop.addEventListener("click", toggleShareVisibilityDesktop);


const hideOptions = () => {
    hideShareOptions();
    hideShareOptionsMobile()
};

window.addEventListener("resize", hideOptions);