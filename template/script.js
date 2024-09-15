/* Open the overlay */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* Select an item and highlight it */
function selectItem(item) {
    // Remove 'selected' class from all items
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(i => i.classList.remove('selected'));

    // Add 'selected' class to the clicked item
    item.classList.add('selected');
}
