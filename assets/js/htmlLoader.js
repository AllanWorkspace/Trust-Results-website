// Function to load HTML into a specified element
function loadHTML(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('../components/navbar/navbar.html', 'navbar');
});

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('../components/footer/footer.html', 'footer');
});