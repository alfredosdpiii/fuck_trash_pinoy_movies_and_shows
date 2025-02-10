const forbiddenGenres = [
  /\b(philippin(e|ian)|filipino|pinoy)\b/i,
  /\b(indian|desi|tamil|telugu)\b/i,
  /\bbollywood\b/i
];

const forbiddenPatterns = [
  /\b(philippin(e|ian)|filipino|pinoy)\b/i,
  /\b(indian|desi|tamil|telugu)\b/i,
  /\bbollywood\b/i,
  /Top 10 (TV Shows|Movies) in the Philippines/i
];

function hideGenreRows() {
  const rows = document.querySelectorAll('[data-automation-id="title-card-list"], .lolomoRow_title_card');
  
  rows.forEach(row => {
    const titleElement = row.querySelector('[data-automation-id="title-card-list-title"], .row-header-title');
    if (!titleElement) return;
    
    const rowText = titleElement.textContent.trim();
    const shouldHide = forbiddenPatterns.some(regex => regex.test(rowText));

    if (shouldHide) {
      row.style.display = 'none';
      row.dataset.filteredGenre = rowText;
    }
  });
}

const style = document.createElement('style');
style.textContent = `
  [data-filtered-genre]::before {
    content: "Filtered: " attr(data-filtered-genre);
    display: block;
    padding: 10px;
    color: #ff4444;
    background: rgba(0,0,0,0.8);
    font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
    font-size: 14px;
    border-bottom: 1px solid #ff4444;
  }
`;
document.head.appendChild(style);

const observer = new MutationObserver(mutations => {
  if (!mutations.some(m => m.addedNodes.length)) return;
  hideGenreRows();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
hideGenreRows();