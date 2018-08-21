// $('#submit-btn').click(function () {
    
//     event.preventDefault();

//     // var city = $('#city-type').val();

//     var get = document.querySelector('#city-type')
//     // This is to get the value of the string
//     var cityGetValue = get.value
//     // This is to convert string to lower case
//     var city = cityGetValue.toLowerCase()
    
//     if( city === 'nyc' || city === 'new york city' || city === 'new york'){
//         $('body').css('background-image', 'url(images/nyc.jpg) ');
//     } else
//     if( city === 'sf' || city === 'bay area' || city === 'san francisco'){
//         $('body').css('background-image', 'url(images/sf.jpg) ');
//     } else
//     if(city === 'los angeles' || city === 'la' || city === 'lax'){
//         $('body').css('background-image', 'url(images/la.jpg) ');
//     } else
//     if(city === 'austin' || city === 'atx'){
//         $('body').css('background-image', 'url(images/austin.jpg) ');
//     } else
//     if(city === 'sydney' || city === 'syd'){
//         $('body').css('background-image', 'url(images/sydney.jpg) ');
//     }
// })



// var city $('#city-type').value();



document.querySelector('#submit-btn').addEventListener('click', function () {

    // this is to prevent the default function of the button
    event.preventDefault();

    var get = document.querySelector('#city-type');
    // This is to get the value of the string
    var cityGetValue = get.value;
    // This is to convert string to lower case
    var city = cityGetValue.toLowerCase();
    
    if( city === 'nyc' || city === 'new york city' || city === 'new york'){
        // jquery
        // $('body').css('background-image', 'url(images/nyc.jpg) ');
        // javascript
        document.querySelector('body').style.backgroundImage = 'url(images/nyc.jpg)';


    } else
    if( city === 'sf' || city === 'bay area' || city === 'san francisco'){
        // jquery
        // $('body').css('background-image', 'url(images/sf.jpg) ');
        // javascript
        document.querySelector('body').style.backgroundImage = 'url(images/sf.jpg)'; 
    } else
    if(city === 'los angeles' || city === 'la' || city === 'lax'){
        // jquery
        // $('body').css('background-image', 'url(images/la.jpg) ');
        // javascript
        document.querySelector('body').style.backgroundImage = 'url(images/la.jpg)';
    } else
    if(city === 'austin' || city === 'atx'){
        // jquery
        // $('body').css('background-image', 'url(images/austin.jpg) ');
        // javascript
        document.querySelector('body').style.backgroundImage = 'url(images/austin.jpg)';
    } else
    if(city === 'sydney' || city === 'syd'){
        // jquery
        // $('body').css('background-image', 'url(images/sydney.jpg) ');
        // javascript
        document.querySelector('body').style.backgroundImage = 'url(images/sydney.jpg)';
    }
        // to submit the form it is uneccesary for this situation
        // document.querySelector("form").submit();

        // to reset the whole form
        document.querySelector('form').reset();

})