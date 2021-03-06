$(document).ready(function () {
    $.material.init();

    var id = $("#programId").text();

    $("#btnBack").click(function () {
        window.location.href = "/program/" + id;
    });

    $("#btnAdd").click(function (event) {
        event.preventDefault();

        var errorSpan = $("span#error");
        var chosenExercises = [];

        $(this).prop("disabled", true);

        $("#exerciseTable").find("tr").each(function (index, element) {
            if (index == 0) return;
            var checkbox = $(this).find("[name=checkbox]");
            var items = $(this).find("td");

            console.log(checkbox);

            if (checkbox[0].checked) {
                var sets = items.find("input[name=sets]").val();
                var reps = items.find("input[name=reps]").val();
                if (sets.length > 0 && reps.length > 0) {
                    chosenExercises.push({
                        id: index - 1,
                        sets: sets,
                        reps: reps
                    });
                }
                else {
                    errorSpan.text("You must fill out both sets and repitions/time for all chosen exercises");
                    return false;
                }
            }
        });

        if (chosenExercises.length > 0) {

            errorSpan.text("");
            // Send data
            $.post(window.location.href, {chosenExercises: chosenExercises}, function (data) {
                console.log(data);
                window.location = data.url;
            });
        }

        $(this).prop("disabled", false);
    });

    $("#btnNewExercise").click(function () {
        window.location.href = "/create-exercise";
    });
});