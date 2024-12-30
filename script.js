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