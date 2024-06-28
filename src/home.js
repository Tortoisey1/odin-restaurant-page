export function home() {
    const contentDiv = document.getElementById('content');

    // Create elements
    const container = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Restaurant';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Discover our delightful menu and cozy ambiance. Join us for an unforgettable dining experience.';

    // Append elements to contentDiv
    container.appendChild(heading);
    container.appendChild(paragraph);

    contentDiv.appendChild(container);
}
