function sendClassName(class_id, alt) {

    $.ajax({
        type: "POST",
        url: "/getimage",
    }).done(function (msg) {
        msg = msg.split('*');
        $('.sideWrapper').append('<img class="side" src="data:image/png;base64, '+msg[0]+'" alt="'+msg[1]+'"/>')
    });

    $.ajax({
        type: "POST",
        url: "/writeclass",
        data: {name: $('.main:first').attr('alt'), class_code: class_id, alt: alt}
    });
}

function moveImages() {
    $(".main").remove();
    var el = $(".side:first");
    $('body').append(el);
    $(el).toggleClass("main");
    $(el).toggleClass("side");
}

$(document).ready(function () {
    var alt = "none"

    $(document).keypress(function (e) {
        console.log(e.keyCode);

        if (e.keyCode == 97 || e.keyCode == 115 || e.keyCode == 100) {
            alt = e.keyCode
        }

        if (e.keyCode == 122 || e.keyCode == 120 || e.keyCode == 99) {
            sendClassName(e.keyCode, alt)
            moveImages()
            alt = "none"
        }
    });

});

