/* 
Author: Miki Foster
Created: 24 November, 2024
Fetches and displays data from the Spotify API
*/

$(document).ready(function () {
    // Event listener for button click
    $('#activate').click(function () {
        // Clear previous output
        $('#output').html('<p>Loading...</p>');

        // AJAX call to fetch data
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/infernape", // Update with your Pokémon API URL
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data); // Log data to console for debugging
                
                // Display fetched data
                let pokemonData = `<p><strong>Name:</strong> ${data.name}</p>`;
                pokemonData += `<p><strong>Base Experience:</strong> ${data.base_experience}</p>`;
                pokemonData += `<p><strong>Abilities:</strong></p><ul>`;
                data.abilities.forEach(ability => {
                    pokemonData += `<li>${ability.ability.name}</li>`;
                });
                pokemonData += `</ul>`;

                $('#output').html(pokemonData);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error fetching data:", textStatus, errorThrown);
                $('#output').html('<p>Failed to fetch data. Please try again later.</p>');
            }
        });
    });
});
