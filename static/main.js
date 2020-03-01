$(document).ready(function () {

    $(document).keypress(function (e) {
        if (e.which == 97) {
            $(".main").remove();
            var el = $(".side:first");
            $('body').append(el);
            $(el).toggleClass("main");
            $(el).toggleClass("side");

            $.ajax({
                type: "POST",
                url: "/getImage",
                data: {name: "John"}
            }).done(function (msg) {
                alert("Data Saved: " + msg);
            });


        }
    }); //клавиша A

});

