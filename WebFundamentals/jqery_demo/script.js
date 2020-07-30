$(document).ready(function(){
    
    //     Selector.event-listener(callback(){})
    $('.Orange').click(function(){
        $('p').css('color', 'orange');
    })
    $('.red').click(function(){
        $('p').css('color', 'red');
    });
    
    $('p').click(function(){
        $(this).css('color', 'green');
    })

    $('.html').click(function(){
        var htmlText = $('.hidden').html();
        $('.display').html(htmlText);
    })

    $('.login').click(function(){
        var name = $('.name').val();
        var email = $('.email').val();
        console.log(name);
        console.log(email);

        $('.user_info').html(`<p>User Name: ${name}</p><p> Email: ${email}</p>`)

    })



})

