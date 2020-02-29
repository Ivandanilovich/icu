$(document).ready(function () {

    $(document).keypress(function (e) {
        console.log('dsf')
        console.log(e.which)
        if (e.which == 97) {
            console.log('here')
            $(".main").toggleClass("sideleft");
            // $(".main").toggleClass('main');

            $(".i1").toggleClass("main");
            $(".i1").toggleClass("i1");

        }
    }); //клавиша A


});

