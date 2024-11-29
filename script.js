document.addEventListener('DOMContentLoaded', () => {
    // Handle form submissions
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            alert('Thank you for submitting!');
            form.reset();
        });
    });
});

// Toggle visibility of subsections (for country-specific pages)
function toggleSubsection(id) {
    const content = document.getElementById(id);
    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
