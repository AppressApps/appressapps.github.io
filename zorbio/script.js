document.addEventListener('DOMContentLoaded', () => {
    // Generate Stars
    const container = document.querySelector('.stars-container');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.opacity = Math.random();

        container.appendChild(star);
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-pop').forEach(card => {
        observer.observe(card);
    });

    // Platform Detection for Download Buttons
    const detectPlatform = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const body = document.body;

        if (/android/i.test(userAgent)) {
            body.classList.add('android');
            document.querySelectorAll('.android-only').forEach(el => el.style.display = 'inline-block');
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            body.classList.add('ios');
            document.querySelectorAll('.ios-only').forEach(el => el.style.display = 'inline-block');
        } else {
            // Desktop or other
            body.classList.add('desktop');
            // On desktop, we can show both or a specific one. Let's show both as per CSS.
        }
    };

    detectPlatform();
});
