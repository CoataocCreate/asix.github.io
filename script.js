function exe() {
    var textArea = document.getElementById('kernal');
    var text = textArea.value.trim();

    if (text === "sayHello") {
        alert("Hello, User!");
    } else if (text === "goodbye") {
        alert("Goodbye, User!");
    } else {
        alert("Unrecognized command.");
    }
}

function tokensyn(targetElement, patterns) {
    const preElement = document.getElementById(targetElement);

    // Escape HTML special characters in the original text
    const escapeHtml = text =>
        text.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Get the original text and escape it
    const originalText = escapeHtml(preElement.textContent);

    // Apply patterns sequentially
    let highlightedText = originalText;
    patterns.forEach(({ pattern, className }) => {
        highlightedText = highlightedText.replace(pattern, match => {
            return `<span class="${className}">${match}</span>`;
        });
    });

    // Update the <pre> element with the highlighted HTML
    preElement.innerHTML = highlightedText;
}

// Define syntax highlighting patterns
tokensyn('un', [
    { pattern: /#.*$/gm, className: 'comment' },                  // Comments
    { pattern: /".*?"|'.*?'/g, className: 'string' },             // Strings
    { pattern: /\b(import)\b/g, className: 'import' }, // Keywords
    { pattern: /\b(math)\b/g, className: 'builtin' },              // Built-in modules
    { pattern: /\b(def)\b/g, className: 'def' }             // function
]);

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.task');
    const progressBars = document.querySelectorAll('.progress-bar');

    // Intersection Observer to trigger task animations on scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    tasks.forEach(task => {
        observer.observe(task);
    });

    // Animate progress bars from 0 to their final value
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        window.addEventListener('load', () => {
            setTimeout(() => {
                bar.classList.add('animate');
                bar.style.width = width;
            }, 200);
        });
    });
});

