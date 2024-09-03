$(document).ready(function () {
    // Insert the content of the specified page into the template.
    InsertDetailsContent();
});

// The purpose of this function is to insert the content of the page that the user clicked on into the page template.
function InsertDetailsContent() {
    // Retrieve the page key from localStorage.
    var pageType = window.localStorage.getItem("pageType");

    // Switch on the pageType variable and insert the corresponding content into the page.
    switch (pageType) {
        // If the pageType is "Overwatch".
        case "Overwatch":
            // Use the AJAX load() method to load the contents of the .txt file into the main element of the template.
            $("#mainContent").load("../DetailsContent/OverwatchOriginsEdition.txt");
            break;

        case "PokemonSword":
            $("#mainContent").load("../DetailsContent/PokemonSword.txt");
            break;

        case "Mario":
            $("#mainContent").load("../DetailsContent/SuperMarioBros.txt");
            break;

        case "Smash":
            $("#mainContent").load("../DetailsContent/SuperSmashBrothersMelee.txt");
            break;

        case "Banjo-Kazooie":
            $("#mainContent").load("../DetailsContent/Banjo-Kazooie.txt");
            break;

        case "BeautifulKatamari":
            $("#mainContent").load("../DetailsContent/BeautifulKatamari.txt");
            break;

        case "BlackOps2":
            $("#mainContent").load("../DetailsContent/BlackOps2.txt");
            break;

        case "Borderlands2":
            $("#mainContent").load("../DetailsContent/Borderlands2.txt");
            break;

        case "CastleCrashers":
            $("#mainContent").load("../DetailsContent/CastleCrashers.txt");
            break;

        case "GettingOverIt":
            $("#mainContent").load("../DetailsContent/GettingOverIt.txt");
            break;

        case "GTA":
            $("#mainContent").load("../DetailsContent/GTA.txt");
            break;

        case "HaloReach":
            $("#mainContent").load("../DetailsContent/HaloReach.txt");
            break;

        case "L4D2":
            $("#mainContent").load("../DetailsContent/L4D2.txt");
            break;

        case "LEGOStarWars":
            $("#mainContent").load("../DetailsContent/LEGOStarWars.txt");
            break;

        case "Minecraft":
            $("#mainContent").load("../DetailsContent/Minecraft.txt");
            break;

        case "MK9":
            $("#mainContent").load("../DetailsContent/MortalKombat.txt");
            break;

        case "NPlus":
            $("#mainContent").load("../DetailsContent/NPlus.txt");
            break;

        case "NWC":
            $("#mainContent").load("../DetailsContent/NWC.txt");
            break;

        case "Portal2":
            $("#mainContent").load("../DetailsContent/Portal2.txt");
            break;

        case "Skyrim":
            $("#mainContent").load("../DetailsContent/Skyrim.txt");
            break;

        case "Battlefront2":
            $("#mainContent").load("../DetailsContent/StarWarsBattlefront2.txt");
            break;

        case "SuperMeatBoy":
            $("#mainContent").load("../DetailsContent/SuperMeatBoy.txt");
            break;

        case "Tetris":
            $("#mainContent").load("../DetailsContent/Tetris.txt");
            break;

        case "VivaPinata":
            $("#mainContent").load("../DetailsContent/VivaPinata.txt");
            break;
    }
}