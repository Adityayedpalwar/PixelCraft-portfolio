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
