import { initializeContent } from './content.js';
import { about } from './about.js';
import { home } from './home.js';
import { menu } from './menu.js';
import './style.css';

// Call initializeContent function once the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeContent();
});

const homebtn = document.getElementById("home");
homebtn.addEventListener('click',()=>{
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    home();
});

const aboutbtn = document.getElementById("about");
aboutbtn.addEventListener('click',()=>{
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    about();
});

const menubtn = document.getElementById("menu");
menubtn.addEventListener('click',()=>{
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    menu();
});