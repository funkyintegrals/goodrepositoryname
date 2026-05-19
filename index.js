const hoverZone = document.getElementById('hover-zone');
const sidebar = document.getElementById('sidebar');

let isHoveringSidebar = false;

hoverZone.addEventListener('mouseenter', () => {
  sidebar.classList.add('active');
});

sidebar.addEventListener('mouseenter', () => {
  isHoveringSidebar = true;
});

sidebar.addEventListener('mouseleave', () => {
  isHoveringSidebar = false;
  sidebar.classList.remove('active');
});

hoverZone.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!isHoveringSidebar) {
      sidebar.classList.remove('active');
    }
  }, 200);
});
