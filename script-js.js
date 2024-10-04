document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Modal functionality for Privacy Policy and Terms of Service
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const privacyPolicyLink = document.getElementById("privacy-policy");
    const termsOfServiceLink = document.getElementById("terms-of-service");
    const closeBtn = document.getElementsByClassName("close")[0];

    function openModal(title, content) {
        modalTitle.textContent = title;
        modalText.textContent = content;
        modal.style.display = "block";
    }

    privacyPolicyLink.onclick = function(e) {
        e.preventDefault();
        openModal("Privacy Policy", "This is where the privacy policy content would go.");
    }

    termsOfServiceLink.onclick = function(e) {
        e.preventDefault();
        openModal("Terms of Service", "This is where the terms of service content would go.");
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
