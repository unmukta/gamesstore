$(document).ready(function () {
    // Display the number of items in the cart (Little number at the top of the page).
    DisplayNumberOfItemsInCart();
});

// The purpose of this function is to load the details page type into localStorage.
function LoadDetailsPage(type) {
    // Load the page key into localStorage. ex: pageType, "Overwatch" would load "Overwatch" into the page key.
    window.localStorage.setItem("pageType", type);
}

// The purpose of this function is to add items to the cart.
function AddToCart() {
    // If there's already item(s) in the cart.
    if (window.localStorage.getItem("cartCount") >= "1") {

        // Update the cart count.
        var count = Number(window.localStorage.getItem("cartCount")) + 1;
        window.localStorage.setItem("cartCount", count);

        // Update the cart display count.
        window.localStorage.setItem("cartDisplayCount", count);

    // There are no items in the cart.
    } else {

        // Set the cart count to 1.
        window.localStorage.setItem("cartCount", 1);

        // Set the cart display count to 1.
        window.localStorage.setItem("cartDisplayCount", 1);
    }

    // Load the relevant properties into a JavaScript object representing the item.
    var item = {image: document.getElementById("image").src, name: $("#name").text(), price: $("#price").text(), qty: document.getElementById("qty").value};

    // Convert the object into a JSON string (localStorage can only store strings).
    var itemJSON = JSON.stringify(item);

    // Display the updated number of items in cart.
    DisplayNumberOfItemsInCart();

    // Store the item in localStorage.
    window.localStorage.setItem("cartItem" + window.localStorage.getItem("cartCount"), itemJSON);
    console.log(window.localStorage) //this is for debugging -Kam
}

// The purpose of this function is to display the number of items in the cart.
function DisplayNumberOfItemsInCart() {
    // Retrieve the number of items in the cart from localStorage.
    var numberOfItems = window.localStorage.getItem("cartDisplayCount");

    // If the number of items in the cart is both not null and not 0.
    if (numberOfItems != null && numberOfItems != 0) {
        // Update the display of number of items on the page.
        document.getElementById("itemsInCart").innerHTML = numberOfItems;

        // Set the display of the element to "flex".
        document.getElementById("itemsInCart").style.display = "flex";
    }    
}