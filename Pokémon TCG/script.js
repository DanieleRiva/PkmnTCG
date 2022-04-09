$("#submit-button").on("click", function(event) {
    $("#cards").empty();
    event.preventDefault();
    var pokemon = $("#search")
        .val()
        .trim();

    $.ajax({
        method: "GET",
        url: "https://api.pokemontcg.io/v1/cards?name=" + $("#search").val()
    }).then(function(response) {
        console.log(response);

        for (var i = 0; i < response.cards.length; i++) {
            var pokemonCard = $("<img class='pkmn-card common' data-tilt>");
            pokemonCard.attr("src", response.cards[i].imageUrlHiRes);
            $("#cards").append(pokemonCard);
            console.log(response.cards[i].imageUrlHiRes);
        }
    });
});