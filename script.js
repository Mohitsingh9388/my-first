alert("sep10 welcome by mohit singh")

// Food image functionality
let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food1.png')";
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food.jpg')";
})

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    searchInput.focus();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // You can add actual search functionality here
            searchInput.value = '';
        }
    }
});

// Dropdown menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const dropdownContent = document.querySelector('.dropdown-content');

menuToggle.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.matches('.menu-toggle') && !e.target.matches('.dropdown-content') && !e.target.matches('.dropdown-item')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});

// Dropdown item click handlers
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const menuItem = item.textContent;
        alert(`Selected: ${menuItem}`);
        dropdownContent.classList.remove('show');
        // You can add navigation functionality here
    });
});