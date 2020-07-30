$(document).ready(function(){
    
    for(var i=1; i<152; i++){
        $('.pokemonImg').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`)
    }

    $('.search_btn').click(function(){
        var pokemonName = $('.search').val();
        console.log(pokemonName);
        
        var url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        
        $.get(url, function(data){
            console.log(data);
            console.log(data.name);
            console.log(data.types[0].type.name);
            console.log(data.abilities[1].ability.name);
            console.log(data.sprites.front_default)
            
            var html_str = `<h3>${data.name}</h3>
            <h3>${data.types[0].type.name}</h3>
            <h3>${data.abilities[1].ability.name}</h3>
            <img src="${data.sprites.front_default}" alt="">
            `
            
            $('.pokeInfo').html(html_str)
            
        })
    })
})