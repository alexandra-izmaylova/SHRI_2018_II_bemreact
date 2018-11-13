var container = document.querySelector('.container');
var createCard = function (event, templateSelector, descriptionSelector, corpusSelector) {
    var content = document.querySelector(templateSelector)
        .content;
    var card = document.importNode(content, true);
    card.querySelector('.title').textContent = event.title;
    if (event.source) {
        card.querySelector('#source').textContent = event.source;
    }
    card.querySelector('#time').textContent = event.time;
    if (event.icon) {
        card.querySelector('.icons').src = "assets/" + event.icon + ".svg";
    }
    if (event.description) {
        card.querySelector(descriptionSelector).textContent =
            event.description;
    }
    else {
        card.querySelector(corpusSelector).style.display = 'none';
    }
    return card;
};
var appendSmallCard = function (event) {
    var card = createCard(event, '#template-card-s', '.description_size-s', '.card_bottom');
    container.appendChild(card);
};
var appendMiddleCardThermal = function (event) {
    var card = createCard(event, '#template-card-m-thermal', '.description_size-m', '.card_bottom');
    if (event.data) {
        var data = event.data;
        card.querySelector('.left_flex > .exact_data').textContent = data.temperature + " C";
        card.querySelector('.right_flex > .exact_data').textContent = data.humidity + " %";
    }
    container.appendChild(card);
};
var appendMiddleCardFridge = function (event) {
    var card = createCard(event, '#template-card-m-fridge', '.description_size-m', '.card_bottom');
    if (event.data) {
        var data = event.data;
        card.querySelector('.button-yes > .choice').textContent = "" + data.buttons[0];
        card.querySelector('.button-no > .choice').textContent = "" + data.buttons[1];
    }
    container.appendChild(card);
};
var appendMiddleCardMusic = function (event) {
    var card = createCard(event, '#template-card-m-music', '.description_size-m', '.card_bottom');
    if (event.data) {
        var data = event.data;
        card.querySelector('.name_of_the_song').textContent = data.artist + " - " + data.track.name;
        card.querySelector('.range_and_time > .details').textContent = "" + data.track.length;
        card.querySelector('.control_panel > .details').textContent = data.volume + " %";
    }
    container.appendChild(card);
};
var appendMiddleCardAc = function (event) {
    var card = createCard(event, '#template-card-m-ac', '.description', '.card_bottom');
    container.appendChild(card);
};
var appendLargeCardCam = function (event) {
    var card = createCard(event, '#template-card-l-cam', '.description', '.corpus');
    container.appendChild(card);
};
var appendLargeCardStats = function (event) {
    var card = createCard(event, '#template-card-l-stats', '.description_size-l', '.corpus');
    container.appendChild(card);
};
function addEvents(data) {
    data.events.forEach(function (event) {
        if (event.size === 's') {
            appendSmallCard(event);
        }
        else if (event.size === 'm') {
            if (event.icon === 'thermal') {
                appendMiddleCardThermal(event);
            }
            else if (event.icon === 'fridge') {
                appendMiddleCardFridge(event);
            }
            else if (event.icon === 'music') {
                appendMiddleCardMusic(event);
            }
            else if (event.icon === 'ac') {
                appendMiddleCardAc(event);
            }
        }
        if (event.size === 'l') {
            if (event.icon === 'cam') {
                appendLargeCardCam(event);
            }
            else if (event.icon === 'stats') {
                appendLargeCardStats(event);
            }
        }
    });
}
fetch('./events.json')
    .then(function (response) { return response.json(); })
    .then(function (data) { return addEvents(data); });
