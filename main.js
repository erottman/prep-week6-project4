// Question 1
// When 'Submit' is clicked, add the contents of the textbox below the button into a h3 element.

$(document).ready(function() {

    $("#submitBtn").click(function() {
        $("<h3>" + $("#textInput").val() + "</h3>").insertAfter("#submitBtn");

    });



    // Question 2
    // When the checkbox is clicked, reveal the hidden message.
    // When the checkbox is clicked again, hide the hidden message.

    $(".chexbox").check(function() {

        $(".hidden").toggleClass("hidden2");
    });








    // Question 3
    // Add a new cat to the table




    $("tbody").append("<tr><td>Fluffers</td><td>12</td><td>Hangry</td></tr>")


})


// Question 4
// Make 'hangry' red and 'content' green.



    $("tbody tr").each(function() {

        if ($(this.children('td:nth-child(3)').text() === "Hangry")) {

                $(this).children("td:nth-child(3)").css("color", "red");
            } else {
              $(this).children("td:nth-child(3)").css("color", "green");

            }
        })



// Question 5
