const BASE_URL = 'https://api.giphy.com/v1/gifs/search'
const API_KEY = 'uL30YyxEKwqrmQlzV1eez0N8fYH4rfCn'

const $form = $('form');
const $input = $('input[type="text"]');
const limit =20


$form.on('submit', handleGetData)

const getRandNumBetween = (min,max) => Math.floor(Math.random()*(max-min+1)+min)

function handleGetData(ev) {

    ev.preventDefault();

    const mood = $input.val();
    $input.val("");

    $.ajax(`${BASE_URL}?api_key=${API_KEY}&limit=${limit}&q=${mood} + cat`).then(function (data) {
        const randomIndex = getRandNumBetween(0, limit -1);
        // const randomGif = data.data[randomIndex].images.fixed_height.url;

        if (data.data.length) {
            console.log(data);
            giphyData = data;
            render(data.data[randomIndex].images.fixed_height.url);
        } else {
            render(notFoundGif)
            $input.val("Not a Cat!!")
    };

    }, function (error) {

        console.log(error);
    });
}

$form.on('submit', handleGetData)

function render(data) {
    $('img').attr('src', data)}