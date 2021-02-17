// add new record to the table
$(document).ready(function() {
    $("#add-new-row").click(function() {
        var orgname = $("#organizationname").val();
        var firstname = $("#FirstName").val();
        var lastname = $("#LastName").val();
        var username = $("#Username").val();
        var role = $('#rolename :selected').text();
        var phonenumber = $("#phone_number").val();
        var Email = $("#Email").val();
        var markup = "<tr><td>" + username + "</td><td>" + orgname + "</td><td>" + firstname + "</td><td>" + lastname + "</td><td>" + role + "</td><td>" + Email + "</td><td>" + phonenumber + "</td><td><i class='fa fa-edit'></i> <i class='fa fa-trash'></i></td></tr>";
        $("table tbody").append(markup);
        console.log("jyoti done");
    });
});

//delete record from the table

$("#dataTable").on('click', '.fa-trash', function() {

    if (confirm("Do you want to delete this row?") == true) {
        $(this).closest('tr').remove();
    } else {
        document.getElementById("ColorChanger").style.backgroundColor = "#C0C0C0";
    }


});

//edit table row data




//validating user form

$(document).ready(function() {
    $flag = 1;


    $("#FirstName").focusout(function() {
        $("#error_finalmessage").text("");
        $("#error_finalmessage").hide();
        if ($(this).val() === '') {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_firstname").text("* Please enter your first name!");
        } else if ($(this).val().length < 3) {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_firstname").text("* Minimum three characters are required!");
        } else {
            $(this).css("border-color", "#2eb82e");
            $('#customerSubmitButton').attr('disabled', false);
            $("#error_firstname").text("");
        }
    });

    $("#LastName").focusout(function() {
        $("#error_finalmessage").text("");
        $("#error_finalmessage").hide();
        if ($(this).val() === '') {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_lastname").text("* Please enter your Lastname!");
        } else if ($(this).val().length < 3) {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_lastname").text("* Minimum three characters are required!");
        } else {
            $(this).css("border-color", "#2eb82e");
            $('#customerSubmitButton').attr('disabled', false);
            $("#error_lastname").text("");
        }
    });



    /***** Email Validation ****/
    $("#customeremail").keyup(function() {
        $("#error_finalmessage").text("");
        $("#error_finalmessage").hide();
        var sEmail = $('#customeremail').val();
        if ($.trim(sEmail).length === 0) {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_customeremail").text("* Please enter valid email address");

            //e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            $(this).css("border-color", "#2eb82e");
            $('#customerSubmitButton').attr('disabled', false);
            $("#error_customeremail").text("");
        } else {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_customeremail").text("* Please enter valid email address");
            //e.preventDefault();
        }
    });

    $("#customeremail").focusout(function() {
        $("#error_finalmessage").text("");
        $("#error_finalmessage").hide();
        var sEmail = $('#customeremail').val();
        if ($.trim(sEmail).length === 0) {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_customeremail").text("* Please enter valid email address");

            //e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            $(this).css("border-color", "#2eb82e");
            $('#customerSubmitButton').attr('disabled', false);
            $("#error_customeremail").text("");
        } else {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_customeremail").text("* Please enter valid email address");
            //e.preventDefault();
        }
    });
    /***** Login Data Validation ****/


    $("#phone_number1").focusout(function() {
        $("#error_finalmessage").text("");
        $("#error_finalmessage").hide();
        var nolength = $(this).val().length;
        console.log(nolength);
        if ($(this).val() === '') {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_customerPhone").text("* Please enter your mobile number!");
        } else if (nolength !== 10) {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_customerPhone").text("* Mobile number should be 10 digit!");
        } else {
            $(this).css("border-color", "#2eb82e");
            $('#customerSubmitButton').attr('disabled', false);
            $("#error_customerPhone").text("");
        }
    });

    $("#phone_number1").keypress(function() {

        var evt = ($(this).val()) ? $(this).val() : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    });

    $("#phone_number1").keyup(function() {
        $("#error_finalmessage").text("");
        $("#error_finalmessage").hide();
        var nolength = $(this).val().length;
        //console.log(nolength);
        if ($(this).val() === '') {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_customerPhone").text("* Please enter your mobile number!");
        } else if (nolength !== 10) {
            $(this).css("border-color", "#cd2d00");
            $('#customerSubmitButton').attr('disabled', true);
            $("#error_customerPhone").text("* Mobile number should be 10 digit!");
        } else {
            $(this).css("border-color", "#2eb82e");
            $('#customerSubmitButton').attr('disabled', false);
            $("#error_customerPhone").text("");


        }
    });




    /***+* Submit Validation ****/
    $("#add-new-row").click(function() {
        //countdown();
        validateform1();
    });

});

function validateform1() {
    var validform1 = true;

    if ($("#FirstName").val() === '') {
        $("#FirstName").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_firstname").text("* Please enter your first name!");
        validform1 = false;
    }

    if ($("#LastName").val() === '') {
        $("#LastName").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_lastname").text("* Please enter your last name!");
        validform1 = false;
    }


    if ($("#Username").val() === '') {
        $("#Username").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_address").text("* Please enter your address!");
        validform1 = false;
    }


    if ($("#phone_number").val() === '') {
        $("#phone_number").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_assetId").text("* Please enter Asset Id!");
        validform1 = false;
    }

    if ($("#Email").val() === '') {
        $("#Email").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_userPassword").text("* Please enter password!");
        validform1 = false;
    }

    if ($("#userconfirmpassword").val() === '') {
        $("#userconfirmpassword").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_userconfirmpassword").text("* Please confirm password!");
        validform1 = false;
    }

    if ($("#customeremail").val() === '') {
        $("#customeremail").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_customeremail").text("* Please enter your Email!");
        validform1 = false;
    } else if (!validateEmail1($("#customeremail").val())) {
        $("#customeremail").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_customeremail").text("* Invalid email address");
        validform1 = false;
    }
    if ($("#phone_number1").val() === '') {
        $("#phone_number1").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_customerPhone").text("* Please enter your mobile number!");
        validform1 = false;
    } else if ($("#phone_number1").val().length !== 10) {
        $("#phone_number1").css("border-color", "#cd2d00");
        $('#add-new-row').attr('disabled', true);
        $("#error_customerPhone").text("* Mobile number should be 10 digit!");
        validform1 = false;;
    }

    if (validform1) {

        return true;
    } else {
        return false;
    }
}




function validateEmail1(sEmail) {
    var filter = /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
    if (filter.test(sEmail)) {
        return true;
    } else {
        return false;
    }
}

$('#userpassword, #userconfirmpassword').on('keyup', function() {
    if ($('#userpassword').val() == $('#userconfirmpassword').val()) {
        $('#message1').html('Matching').css('color', 'green');
    } else
        $('#message1').html('Not Matching').css('color', 'red');
});