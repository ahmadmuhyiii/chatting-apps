<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel Chat</title>

    <link rel="stylesheet" href="./css/app.css" />
</head>

<body>

    <div class="app">
        <header>
            <h1>Lets chat</h1>
            <input type="text" name="username" id="username" placeholder="Please Enter a username.." />
        </header>
        <div id="messages"></div>

        <form id="message_form">
            <input type="text" name="message" id="message_input" placeholder="Mulai mengetik yu.." />
            <button type="submit" id="message_send">Send Message</button>
        </form>
    </div>

    <script src="./js/app.js"></script>
</body>

</html>
