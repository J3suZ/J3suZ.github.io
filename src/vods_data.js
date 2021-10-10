$('#sendData').click(function () { 
    $.ajax({
        type: "POST",
        url: "/php/add_elements.php",
        data:"vod" = $('#vodElement').val(),
        success: function (response) {
            console.log(response);
        }
    });
});