export function about() {
    const contentDiv = document.getElementById('content');

    // Create elements
    const container = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'About';

    const chef = document.createElement('div');
    chef.textContent = 'Gordon Ramsey';

    const role = document.createElement('div');
    role.textContent = "Chef";


    // Append elements to contentDiv
    contentDiv.appendChild(container);
    container.appendChild(heading);
    container.appendChild(chef);
    container.appendChild(document.createElement('br'));
    container.appendChild(role);
}
