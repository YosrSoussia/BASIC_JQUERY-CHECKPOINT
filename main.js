$(document).ready(function () {
    $("#bold").click(function () {
        $("#text").toggleClass("bold");
    });
});

$(document).ready(function () {
    $("#italic").click(function () {
        $("#text").toggleClass("italic");
    });
});
$(document).ready(function () {
    $("#underline").click(function () {
        $("#text").toggleClass("underline");
    });
});
$("#ff").change(function() {
    $('#text').css("font-family", $(this).val());

});

$("#size").change(function() {
    $('#text').css("font-size", $(this).val());
});
