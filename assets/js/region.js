document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("region")) {
        const region = navigator.language || 'en-US';
        localStorage.setItem("region", region);
        console.log("Region set to:", region);
    }
});