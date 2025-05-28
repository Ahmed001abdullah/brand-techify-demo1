<!-- assets/js/script.js -->
// Load header and footer dynamically
fetch("includes/header.html").then(res => res.text()).then(data => {
  document.getElementById("header").innerHTML = data;
});
fetch("includes/footer.html").then(res => res.text()).then(data => {
  document.getElementById("footer").innerHTML = data;
});
