$(document).ready(function () {
    // Set up event listeners for the search bar.
    SetUpSearchBar()
});

// The purpose of this function is to set up the search bar with all the necessary event listeners.
function SetUpSearchBar() {
    // Get the search bar element.
    var searchBar = document.getElementById("gameSearch");

    // Add the "keyup" event listener, event triggers when a pressed key on the keyboard is released.
    searchBar.addEventListener("keyup", function(event) {
        HandleGameSearchBarEnterKey(event);
    });

    // Get the search button element.
    var searchButton = document.getElementById("gameSearchButton");

    // Add the "click" event listener, for when the user clicks on the "search" button.
    searchButton.addEventListener("click", GameSearch);

    // Get the clear button element.
    var clearButton = document.getElementById("gameSearchClearButton");

    // Add the "click" event listener, for when the user clicks on the "clear" button.
    clearButton.addEventListener("click", HandleGameSearchBarClear);
}

// The purpose of this function is to validate that the keyboard key that was pressed was the "Enter" key.
function HandleGameSearchBarEnterKey(event) {
    // If the key pressed was "Enter".
    if (event.key === "Enter") {
        // Search based on what the user entered into the search bar.
        GameSearch();
    }
}

// The purpose of this function is to display the search results.
function GameSearch() {
    // Get the search bar element.
    var searchBar = document.getElementById("gameSearch");

    // Get an array of all of the items in the shop.
    var searchResults = document.getElementsByClassName("game");

    // Get an array of all of the titles of the items in the shop.
    var gameTitles = document.getElementsByClassName("gameTitle");

    // Loop through the array of item titles.
    for (var i = 0; i < gameTitles.length; i++) {
        // Get the text content of the item title element (the title of the item). Convert it to all lowercase.
        var result = gameTitles[i].textContent.toLowerCase();

        // If the game title does not include what the user entered (convert the user input to all lowercase).
        if (result.includes(searchBar.value.toLowerCase()) == false) {
            // Set the display of that item to "none".
            searchResults[i].style.display = "none";

        // If the If the game title does include what the user entered (convert the user input to all lowercase).
        } else if (result.includes(searchBar.value.toLowerCase()) == true) {
            // Set the display of that item to "block".
            searchResults[i].style.display = "block";
        }
    }
}

// The purpose of this function is the handle the clearing of the search bar.
function HandleGameSearchBarClear() {
    // Get the search bar element.
    var searchBar = document.getElementById("gameSearch");

    // Get an array of all of the items in the shop.
    var searchResults = document.getElementsByClassName("game");

    // Set the value of the search bar to an empty string (this essentially removes anything the user had entered in the search bar).
    searchBar.value = "";

    // Loop through the array of items.
    for (var i = 0; i < searchResults.length; i++) {
        // Set the display of the item to "block".
        searchResults[i].style.display = "block";
    }
}

// The purpose of this function is to handle the page switching of the items in the shop.
function HandlePageSwitch(page) {
    // Switch on the page parameter.
    switch (page) {
        // If the user clicked on the first page.
        case "1":
            // Get an array of items on the first page.
            var firstPage = document.getElementsByClassName("page1");

            // Get an array of items on the second page.
            var secondPage = document.getElementsByClassName("page2");

            // Loop through the array on items on the first page.
            for (var i = 0; i < firstPage.length; i++) {
                // Set the display of those items to "block".
                firstPage[i].style.display = "block";
            }

            // Loop through the array on items on the second page.
            for (var i = 0; i < secondPage.length; i++) {
                // Set the display of those items to "none".
                secondPage[i].style.display = "none";
            }
            break;
        case "2":
            var firstPage = document.getElementsByClassName("page1");
            var secondPage = document.getElementsByClassName("page2");

            for (var i = 0; i < firstPage.length; i++) {
                firstPage[i].style.display = "none";
            }

            for (var i = 0; i < secondPage.length; i++) {
                secondPage[i].style.display = "block";
            }
            break;
    }
}

// The purpose of this function is to handle the filters on the shop page.
function HandleFilter(filterType) {
    // Switch on the filterType parameter.
    switch (filterType) {
        // If the filterType is "action" (the user clicked on the "action" filter).
        case "action":
            // If the checkbox's "checked" property is false (meaning the user wants to activate this filter).
            if ($("#actionFilter").prop("checked") == false)
            {
                // Filter everything other than "action" out of the display.
                FilterOthers();

                // Filter everything that is "action" into the display.
                Filter("action", "actionFilter", "in");
                
            // If the checkbox's "checked" property is true (meaning the user wants to deactivate this filter).
            } else
            {
                FilterOthers();

                // Filter everything that is "action" out of the display.
                Filter("action", "actionFilter", "out");
            }  

            break;

        case "puzzle":
            if ($("#puzzleFilter").prop("checked") == false)
            {
                FilterOthers();
                Filter("puzzle", "puzzleFilter", "in");
            } else
            {
                FilterOthers();
                Filter("puzzle", "puzzleFilter", "out");
            }     
            
            break;

        case "shooter":
            if ($("#shooterFilter").prop("checked") == false)
            {
                FilterOthers();
                Filter("shooter", "shooterFilter", "in");
            } else
            {
                FilterOthers();
                Filter("shooter", "shooterFilter", "out");
            }  
            
            break;
    
        case "platformer":
            if ($("#platformerFilter").prop("checked") == false)
            {
                FilterOthers();
                Filter("platformer", "platformerFilter", "in");
            } else
            {
                FilterOthers();
                Filter("platformer", "platformerFilter", "out");
            }  
            
            break;

        case "fighter":
            if ($("#fighterFilter").prop("checked") == false)
            {
                FilterOthers();
                Filter("fighter", "fighterFilter", "in");
            } else
            {
                FilterOthers();
                Filter("fighter", "fighterFilter", "out");
            }  
            
            break;

        case "rpg":
            if ($("#rpgFilter").prop("checked") == false)
            {
                FilterOthers();
                Filter("rpg", "rpgFilter", "in");
            } else
            {
                FilterOthers();
                Filter("rpg", "rpgFilter", "out");
            }  
            
            break;
    
        case "simulation":
            if ($("#simulationFilter").prop("checked") == false)
            {
                FilterOthers();
                Filter("simulation", "simulationFilter", "in");
            } else
            {
                FilterOthers();
                Filter("simulation", "simulationFilter", "out");
            }  
            
            break;
    
        case "before2000":
            if ($("#before2000Filter").prop("checked") == false)
            {
                FilterOthers();
                Filter("before2000", "before2000Filter", "in");
            } else
            {
                FilterOthers();
                Filter("before2000", "before2000Filter", "out");
            }  
            
            break;
        
        case "2000-2010":
            if ($("#2000-2010Filter").prop("checked") == false)
            {
                FilterOthers();
                Filter("2000-2010", "2000-2010Filter", "in");
            } else
            {
                FilterOthers();
                Filter("2000-2010", "2000-2010Filter", "out");
            }  
            
            break;
    
        case "2010-Present":
            if ($("#2010-PresentFilter").prop("checked") == false)
            {
                FilterOthers();
                Filter("2010-Present", "2010-PresentFilter", "in");
            } else
            {
                FilterOthers();
                Filter("2010-Present", "2010-PresentFilter", "out");
            }  
            
            break;        
    }

    // Get an array of filter elements.
    var filters = $(".filter");

    // A variable indicating whether any filter is checked.
    var somethingIsChecked = false;

    // Loop though the array of filter elements.
    for (var i = 0; i < filters.length; i++) {
        // Get the "checked" property of the element.
        var anyChecked = $("#" + filters[i].id).prop("checked");

        // If the element is checked
        if (anyChecked == true) {
            // Get the filter type for the purposes of the Filter() function by removing "Filter" from the id of the current element.
            // This works because of how we've set up the id/class structure of the shop page. The id of the Filters is formatted as [filterType]["Filter"]
            // So the id of the filter for "action" is "actionFilter", by removing "Filter" we get the class name of the items that are "action".
            var filterType = filters[i].id.replace("Filter", "");

            // Filter the elements in (display the elements that pass the filter).
            Filter(filterType, filters[i].id, "in");

            // A filter is checked, so set the somethingIsChecked variable to true.
            somethingIsChecked = true;
        }
    }

    // If nothing is checked
    if (somethingIsChecked == false) {
        // Get an array of items on the first page.
        var games = document.getElementsByClassName("page1");

        // Loop through the array on items on the first page.
        for (var i = 0; i < games.length; i++) {
            // Set the display of the items to "block". (if no filters are checked, then simply display the first page).
            games[i].style.display = "block";
        }
    }
}

// The purpose of this function is to filter the shop items.
function Filter(filterType, filterId, inOrOut) {
    // If the InOrOut parameter is "in".
    if (inOrOut == "in") {
        // Get an array of the items that match the filter.
        var results = document.getElementsByClassName(filterType);

        // Loop through the array of item elements.
        for (var i = 0; i < results.length; i++) {
            // Set the display of the item to "block".
            results[i].style.display = "block";
        }

        // Set the checked property of the filter element to true (JavaScript sucks at tracking this property, so it's best to force it to update the property).
        $("#" + filterId).prop("checked", true);

    // If the InOrOut parameter is "out".
    } else if (inOrOut == "out") {
        // Get an array of the items that match the filter.
        var results = document.getElementsByClassName(filterType);

        // Loop through the array of item elements.
        for (var i = 0; i < results.length; i++) {
            // Set the display of the item to "none".
            results[i].style.display = "none";
        }

        // Set the checked property of the filter element to false (JavaScript sucks at tracking this property, so it's best to force it to update the property).
        $("#" + filterId).prop("checked", false);
    }
}

// The purpose fo this function is to filter the items that don't match the filter, out (remove them from display).
function FilterOthers() {
    // Get an array of filter elements.
    var filtered = $(".filter");

    // Loop through the array of filter elements.
    for (var i = 0; i < filtered.length; i++) {

        // If the "checked" property of the filter element is not true.
        if ($("#" + filtered[i].id).prop("checked") != true) {
            // Filter the items matching that filter out.
            var filterType = filtered[i].id.replace("Filter", "");
            Filter(filterType, filtered[i].id, "out");
        }
    }
}