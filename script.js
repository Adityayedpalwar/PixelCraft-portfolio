function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
}

const portfolioGrid = document.querySelector('.portfolio-grid');

setInterval(() => {
    portfolioGrid.style.animation = 'scroll-portfolio 20s linear infinite';
}, 20000);

// FULLSCREEN FUNCTION
function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { 
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { 
        element.msRequestFullscreen();
    }
}

// Apply fullscreen on all images + videos
document.querySelectorAll('.portfolio-item img, .portfolio-item video').forEach(item => {
    item.addEventListener('click', () => openFullscreen(item));
});
