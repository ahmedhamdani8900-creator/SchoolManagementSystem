
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".sidebar .nav-link").forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
