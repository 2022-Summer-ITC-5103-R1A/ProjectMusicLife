const $ = selector => document.querySelector(selector);

 
document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", evt => {
        // get values user entered in textboxes
        evt.preventDefault();
        
        const email1 = $("#email_1").value;
        const email2 = $("#email_2").value;
        const firstName = $("#first_name").value;
    
        // check user entries – add to error message if invalid
        if (email1 == "") { 
            document.getElementsByClassName("texto-error-email_1")[0].innerHTML  = "First email is required.";
            return;
        }else{
            document.getElementsByClassName("texto-error-email_1")[0].innerHTML  = "";
        }

        if (email2 == "") { 
            document.getElementsByClassName("texto-error-email_2")[0].innerHTML  = "Second email is required";
            return;
        }else{
            document.getElementsByClassName("texto-error-email_2")[0].innerHTML  = "";
        }

        if (email1 != email2) { 
            document.getElementsByClassName("texto-error-email_2")[0].innerHTML  = "Both emails must match.";
            return;
        }else{
            document.getElementsByClassName("texto-error-email_2")[0].innerHTML  = "";
        }

        if (firstName == "") {
            document.getElementsByClassName("texto-error-first_name")[0].innerHTML  = "First name is required.";
            return;
        }else{
            document.getElementsByClassName("texto-error-first_name")[0].innerHTML  = "";
        }

        $('#email_form').submit();
    });
 
    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";
 
        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});


