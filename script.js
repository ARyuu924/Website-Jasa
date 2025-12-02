// DARK MODE
const toggle = document.getElementById("darkToggle");
toggle.onclick = () => {
    document.body.classList.toggle("dark");
};

// REVEAL ON SCROLL
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// WA FORM
document.getElementById("waForm").addEventListener("submit", function(e){
    e.preventDefault();
    let nama = document.getElementById("nama").value;
    let layanan = document.getElementById("layanan").value;
    let detail = document.getElementById("detail").value;

    let text = `Halo, saya ${nama}%0ASaya ingin memesan layanan: ${layanan}%0A%0ADetail: ${detail}`;
    window.open(`https://wa.me/62XXXXXXXXXX?text=${text}`, "_blank");
});
