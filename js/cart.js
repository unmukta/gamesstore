// Variable to hold the running total price of the items in the cart.
var total = 0;

$(document).ready(function () {   
    // Show the items in cart. 
    ShowCartContents();

    // Display the price information of the cart.
    DisplayTotalCartPrice();
});

// The purpose of this function is to display the contents of the cart to the page.
function ShowCartContents() {
    // Get the cartCount (number of items in the cart. Or more accurately, the number of times the "add to cart" button was pressed). Store it in a variable "count".
    var count = Number(window.localStorage.getItem("cartCount"));   

    for (var i = 1; i <= count; i++) {
        num = i.toString();

        // If the item we are attempting to display (cartItem[i]) is not null.
        if (window.localStorage.getItem("cartItem" + num) != null) {
            // Retrieve the item information from localStorage in the form of a JSON file.
            var itemJSON = window.localStorage.getItem("cartItem" + num);

            // Use JSON.parse to parse the JSON into a JavaScript object, the properties of which we can use to display the item.
            var cartItem = JSON.parse(itemJSON);

            // Retrieve the cart item information, wrap it in HTML, and store it in variables.
            var image = "<img src=" + "'" + cartItem.image + "'" + "class='cartImage'" + "><img>";
            var name = "<h4>" + cartItem.name + "</h4>";
            var price = "<h4>" + cartItem.price + "</h4>";
            var qty = "<h4>Qty: " + cartItem.qty + "</h4>";
            var button = "<button onclick='RemoveFromCart(" + num + ")'" + "style='display:block; margin:auto; width:100px;'>" + "Remove from cart</button>";

            // Get the element you want to insert the item information into and insert the information in the proper order.
            document.getElementById("item" + num).insertAdjacentHTML("beforeend", image);
            document.getElementById("item" + num).insertAdjacentHTML("beforeend", name);
            document.getElementById("item" + num).insertAdjacentHTML("beforeend", price);
            document.getElementById("item" + num).insertAdjacentHTML("beforeend", qty);
            document.getElementById("item" + num).insertAdjacentHTML("beforeend", button);
            
            // Add this item's (cartItem[i]) price to the total. We remove the dollar sign with .slice and multiply the price by the quantity of the item.
            total += (Number(cartItem.price.slice(1)) * Number(cartItem.qty));
        } else { 
            // Since the item with this index doesn't exist, we know it was removed.  
            var removedItem = document.getElementById("item" + num);

            // Set the display of the removed item to "none" to make the display a little prettier.
            removedItem.style.display = "none";
        }   
    }
}

// The purpose of this function is to remove items from the cart.
function RemoveFromCart(itemNumber) {
    // Remove the item from localStorage.
    window.localStorage.removeItem("cartItem" + itemNumber);

    // Update the display count (used for the little number at the top of the page for the amount of items in cart).
    var displayCount = Number(window.localStorage.getItem("cartDisplayCount")) - 1;
    window.localStorage.setItem("cartDisplayCount", displayCount);

    // Reload the page, this effectively removes the item from the display because the ShowCart function relies on localstorage, and we removed the item from localStorage.
    window.location.reload();
}

// The purpose of this function is to clear the cart of any and all items.
function ClearCart() {
    // Prompt the user for if they want to clear their cart.
    var confirm = window.confirm("Are you sure you want to clear your cart of all items?");

    // If the user confirms that they want to clear their cart.
    if (confirm == true) {
        // Clear all localStorage.
        window.localStorage.clear();

        // Reload the page.
        window.location.reload();
    }  
}

// The purpose of this function is to display the cart price information.
function DisplayTotalCartPrice() {
    // Calculate the price, tax, and total. Limit it to 2 decimal places for the cents.
    var price = total.toFixed(2);
    var tax = (total * 0.05).toFixed(2);
    var checkoutTotal = (Number(price) + Number(tax)).toFixed(2);

// Display the price information on the page.
    document.getElementById("checkoutPrice").insertAdjacentHTML("beforeend", " " + price);
    document.getElementById("checkoutTax").insertAdjacentHTML("beforeend", " " + tax);
    document.getElementById("checkoutTotal").insertAdjacentHTML("beforeend", " " + checkoutTotal);
}