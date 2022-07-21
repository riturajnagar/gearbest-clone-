// importing navbar
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

// importing footer
import footer from "../components/footer.js";

document.getElementById("footer").innerHTML = footer();

document.getElementById("icon").addEventListener("click", refresh);
document.getElementById("footer_logo").addEventListener("click", refresh);
function refresh() {
  window.location.href = "../index.html";
};

