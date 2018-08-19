$('#submit-btn').click(function () {
    event.preventDefault();
    var city = $('#city-type').val();
    if( city === 'nyc' || city === 'New York City'){
        $('body').css('background-image', 'url(images/nyc.jpg) ');
    }
})


// var city $('#city-type').value();


document.querySelector('#submit-btn').addEventListener('click', function () {
    event.preventDefault()
})