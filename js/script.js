
// Change slider order

window.onload = function() {
    const element = document.querySelector('.hero-slider');

    if (window.innerWidth <= 900) {
        let loadCount = localStorage.getItem('loadCount');

        if (loadCount === null) {
            loadCount = 1;
            localStorage.setItem('loadCount', loadCount);
            element.style.flexDirection = 'column';
        } 
        else if (loadCount === '1') {
            loadCount = 2;
            localStorage.setItem('loadCount', loadCount);
            element.style.flexDirection = 'column-reverse';
        } 
        else {
            const random = Math.random() < 0.5 ? 'column' : 'column-reverse';
            element.style.flexDirection = random;
        }
    }
};
