export function menu() {
    const contentDiv = document.getElementById('content');

    // Create elements
    const container = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    const food = document.createElement('div');
    food.textContent = 'Beverages';

    const drink = document.createElement('div');
    drink.textContent = "Tea";


    // Append elements to contentDiv
    contentDiv.appendChild(container);
    container.appendChild(heading);
    container.appendChild(food);
    container.appendChild(document.createElement('br'));
    container.appendChild(drink);
}
