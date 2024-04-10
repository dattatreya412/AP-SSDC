function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('open');
    const rows = Array.from(document.querySelectorAll('.zigzag a'));

    function slideOut(row) {
        row.classList.add('slide-out');
    }

    function slideIn(row, index) {
        setTimeout(function() {
            row.classList.remove('slide-out');
        }, (index + 5) * 50);
    }

    rows.forEach(slideOut);

    setTimeout(function() {
        rows.forEach(slideIn);
    }, 0);
}