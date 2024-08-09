

function menuBar() {
    const nav = document.querySelector('nav');
    const navList = document.querySelector('.nav-list');
    const cta = document.querySelector('.cta');
    
    // Toggle the nav height between 60px and 90vh
    if (nav.style.height === '90vh') {
        nav.style.height = '60px';
        navList.style.display = 'none'; 
        cta.style.display = 'none';
    } else {
        nav.style.height = '90vh';
        navList.style.display = 'flex'; 
        cta.style.display = 'flex'; 
        navList.style.flexDirection = 'column';
    }
}

function resetNav() {
    const nav = document.querySelector('nav');
    const navList = document.querySelector('.nav-list');
    const cta = document.querySelector('.cta');

    // Reset nav styles when screen is resized back to laptop size or larger
    if (window.innerWidth > 768) {
        nav.style.height = '60px'; // Default nav height for larger screens
        navList.style.display = 'flex'; // Display nav list for larger screens
        cta.style.display = 'flex'; // Display CTA for larger screens
        navList.style.flexDirection = 'row'; // Set the layout back to row
    }
    else{
        menuBar()
    }
}
window.addEventListener('resize', resetNav);


