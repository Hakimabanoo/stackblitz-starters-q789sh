// Existing Script
const apiKey = 'HAKIMA_API_KY'; // Your API key

async function searchBooks() {
  const query = document.getElementById('book-query').value.trim();
  if (!query) {
    alert('Please enter a book title, author, or ISBN.');
    return;
  }

  const bookUrl = `https://www.mesho.com/search?q=${query}`; // Redirect to Mesho for book search
  const amazonUrl = `https://www.amazon.com/s?k=${query}`; // Redirect to Amazon for book search
  window.open(bookUrl, '_blank'); // Open book URL in new tab

  try {
    const apiUrl = `https://example-api.com/search?query=${query}&apikey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && data.books && data.books.length > 0) {
      alert('Books found: ' + data.books.length);
    } else {
      alert('No books found.');
    }
  } catch (error) {
    console.error('Error fetching book data:', error);
    alert('Failed to fetch data. Please try again later.');
  }
}

function openPreferences() {
  window.location.href =
    'https://www.bookfinder.com/my/preferences/?ref=bf_uu_hd_4';
}

function openHelp() {
  window.location.href = 'https://www.bookfinder.com/help/?ref=bf_uu_hd_6';
}

function openFeedback() {
  window.location.href = 'https://www.hotjar.com/blog/website-feedback/';
}

function openPrivacy() {
  alert('By using our site, you agree to our Privacy Policy.');
}
