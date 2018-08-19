$('#submit-btn').click(function () {
    
    event.preventDefault();

    var city = $('#city-type').val();
    
    if( city === 'nyc' || city === 'NYC' || city === 'New York City' || city === 'new york city' || city === 'New York' || city === 'new york'){
        $('body').css('background-image', 'url(images/nyc.jpg) ');
    } else
    if( city === 'SF' || city === 'sf' || city === 'Bay Area' || city === 'bay area' || city === 'San Francisco' || city === 'san francisco'){
        $('body').css('background-image', 'url(images/sf.jpg) ');
    } else
    if( city === 'Los Angeles' || city === 'los angeles' || city === 'LA' || city === 'la' || city === 'LAX' || city === 'lax'){
        $('body').css('background-image', 'url(images/la.jpg) ');
    } else
    if( city === 'Austin' || city === 'austin' || city === 'ATX' || city === 'atx'){
        $('body').css('background-image', 'url(images/austin.jpg) ');
    } else
    if( city === 'Sydney' || city === 'sydney' || city === 'SYD' || city === 'syd'){
        $('body').css('background-image', 'url(images/sydney.jpg) ');
    }
})


// var city $('#city-type').value();


// document.querySelector('#submit-btn').addEventListener('click', function () {
//     event.preventDefault()
// })