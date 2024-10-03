document.querySelector("#toggle-nav").addEventListener('click', (event) => {
    event.preventDefault();
    const navItems = document.querySelector("#nav-items");
    navItems.classList.toggle("show");
}); 