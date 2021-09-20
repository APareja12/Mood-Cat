const BASE_URL = 'https://api.giphy.com/v1/gifs/search'
const API_KEY = 'uL30YyxEKwqrmQlzV1eez0N8fYH4rfCn'
const $form = $('form');
const $input = $('input[type="text"]');



$form.on('submit', handleGetData)

function handleGetData(ev) {

    ev.preventDefault(); 
    
    const mood = $input.val();
    $input.val("");

    $.ajax(`${BASE_URL}?api_key=${API_KEY}&limit=1&q=${mood}`).then(function (data) {
   
        giphyData = data; 
        render();
        
    }, function (error) {
        
        console.log(error);
    });
}

function render() {
    $title.text(giphyData.Title);
    
}