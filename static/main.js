$(document).ready(function () {

    $(document).keypress(function (e) {
        if (e.which == 97) {
            $(".main").remove();
            var el = $(".side:first");
            $('body').append(el);
            $(el).toggleClass("main");
            $(el).toggleClass("side");
        }
    }); //клавиша A

});

