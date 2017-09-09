$(document).ready(function () {

    $(".ico_error").hide();
    $(".val_error").hide();
    $("#div_california_question").hide();

    $("form").submit(function (e) {

        e.preventDefault();

        $(".ico_error").hide();
        $(".val_error").hide();
        $("#name").css('background-color', 'white');
        $("#phone").css('background-color', 'white');
        $("#state").css('background-color', 'white');
        $("#california_question").css('background-color', 'white');
        $("#question").css('background-color', 'white');

        var isAllDataValidated = true;

        if ($("#name").val() === "") {
            isAllDataValidated = false;
            $("#name").css('background-color', '#fbe0de');
            $("#name").css('border-color', 'red');
            $("#name_error_ico").show(200);
            $("#name_error_msg").show(200);
        }
        if ($("#phone").val() === "") {
            isAllDataValidated = false;
            $("#phone").css('background-color', '#fbe0de');
            $("#phone").css('border-color', 'red');
            $("#phone_error_ico").show(400);
            $("#phone_error_msg").show(400);
        }

        if ($("#phone").val() !== "") {
            var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
            var ok = re.exec($("#phone").val()); 
            if (!ok) {
                isAllDataValidated = false;
                $("#phone").css('background-color', '#fbe0de');
                $("#phone").css('border-color', 'red');
                $("#phone_error_ico").show(400);
                $("#phone_error_msg2").show(400);
            }
        }

        if ($("#state").val() === "") {
            isAllDataValidated = false;
            $("#state").css('background-color', '#fbe0de');
            $("#state").css('border-color', 'red');
            $("#state_error_ico").show(600);
            $("#state_error_msg").show(600);
        }

        if ($("#state").val() === "CA") {
            if($("#california_question").val() === ""){
                isAllDataValidated = false;
                $("#california_question").css('background-color', '#fbe0de');
                $("#california_question").css('border-color', 'red');
                $("#california_question_error_ico").show(600);
                $("#california_question_error_msg").show(600);
            }
        }

        if ($("#question").val() === "") {
            isAllDataValidated = false;
            $("#question").css('background-color', '#fbe0de');
            $("#question").css('border-color', 'red');
            $("#question_error_ico").show(800);
            $("#question_error_msg").show(800);
        }

        if (isAllDataValidated==true) {
            //make an api call here to save data in database and catch the error message if any
            $("#formArea").html("<span id='thanks'>Thank you!<br>We received your message and will reach out to you as soon as humanly possible </span>");
            $("#formArea").hide();
            $("#formArea").fadeIn(1400);
        }

    });

    // On change of state dropdown- Selecting California state.
    $('#state').change(function () {
        $("#state").css('background-color', 'white');
        $("#state_error_ico").hide();
        $("#state_error_msg").hide();
        if ($(this).val() === "CA") {
            $("#div_california_question").show(500);
        }
        else {
            $("#div_california_question").hide(500);
        }
    });

});

