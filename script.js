const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

// Show modal, focus on input:
function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

// Modal event listeners:
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (event) => (event.target === modal ? modal.classList.remove('show-modal') : false));

// Handle data from form:
function storeBookmark(event) {
    // preventDefault method ensures that while this is a static webpage (no back-end component), the default behaviour for an HTML form (sending request to server) is *not* triggered:
    event.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
        urlValue = `https://${urlValue}`;
    }
    console.log(nameValue, urlValue);
}

// Event listener:
bookmarkForm.addEventListener('submit', storeBookmark);
