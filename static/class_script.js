$(document).ready(function () {
    $(document).keypress(function (e) {

    });

    var id_click;

    $(document).keypress(function (e) {
        // console.log(e.keyCode);
        $('#' + id_click).text(String.fromCharCode(e.keyCode));
        if (id_click != null && id_click != undefined) {
            id_click = parseInt(id_click.substring(3));
            // console.log($('#key'+id_click).attr('text'))
            $('.input'+id_click).attr('name', String.fromCharCode(e.keyCode))
        }
        id_click = null
    });

    $('.key').click(function (e) {
        id_click = e.target.id;
        // console.log(id_click)
    })
});

