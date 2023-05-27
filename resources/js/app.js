const { default: axios } = require('axios');
const { message } = require('laravel-mix/src/Log');

require('./bootstrap');


const message_el = document.getElementById("mesagges");
const username_input = document.getElementById("username");
const message_input = document.getElementById("message_input");
const message_form = document.getElementById("message_form");

message_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let has_errors = false;

    if (username_input.value == '') {
        alert("please enter a username");
        has_errors = true;
    }
    if (message_input.value == '') {
        alert("please enter a message");
        has_errors = true;
    }
    if (has_errors){
        return
    }

    const options = {
        method: 'post',
        url: '/send-message',
        data: {
            username: username_input.value,
            message: message_input.value
        },
        transformResponse: [(data) => {
            return data;
        }]
    }
    axios(opstions);
});

window.Echo.channel('chat')
.listen('.message', (e) => {
    message_el.innerHTML += '<div class="message"><strong>' + e.username + ':</strong>' + e.message
    + '</div>';
});
