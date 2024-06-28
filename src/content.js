export function initializeContent() {
    const contentDiv = document.getElementById('content');

    // Create elements
    const img = document.createElement('img');
    img.src = "https://media.cntraveler.com/photos/654bd5e13892537a8ded0947/16:9/w_2560%2Cc_limit/phy2023.din.oss.restaurant-lr.jpg";
    img.alt = "Picture of Restaurant";

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Restaurant';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Discover our delightful menu and cozy ambiance. Join us for an unforgettable dining experience.';

    // Append elements to contentDiv
    contentDiv.appendChild(img);
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
}
