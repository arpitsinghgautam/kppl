/* Kamala Press contact form — submits to FormSubmit AJAX (works on static hosts incl. GitHub Pages). */
(function ($) {
    "use strict";
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formError();
            submitMSG(false, "Did you fill up the form properly?");
        } else {
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        var payload = {
            name:         $("#name").val(),
            email:        $("#email").val(),
            msg_subject:  $("#msg_subject").val(),
            phone_number: $("#phone_number").val(),
            message:      $("#message").val(),
            _subject:     "New enquiry from KPPL website",
            _template:    "table",
            _captcha:     "false"
        };

        $.ajax({
            type: "POST",
            url: "https://formsubmit.co/ajax/kamalaprintingpress@gmail.com",
            dataType: "json",
            accepts: "application/json",
            data: payload,
            success: function (data) {
                if (data && (data.success === "true" || data.success === true)) {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, (data && data.message) ? data.message : "Couldn't send right now. Please email us directly.");
                }
            },
            error: function () {
                formError();
                submitMSG(false, "Network error. Please email us at kamalaprintingpress@gmail.com or call +91 9919995500.");
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message sent — we'll get back to you within one working day.");
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        var msgClasses = valid ? "h4 tada animated text-success" : "h4 text-danger";
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery));
