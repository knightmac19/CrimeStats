$(document).ready(function() {

    

    $("#year").on("click", function() {
        $(".dropdown-year").empty();
        for (var i = 0; i < yearsArr.length; i++) {
            var year = $("<button>").addClass("dropdown-item");
            year.attr({"type": "button", "data-index": i});
            year.text(yearsArr[i]);
            $(".dropdown-year").append(year);
        }
    });

    // $("#year-end").on("click", function() {
    //     $(".dropdown-year-end").empty();
    //     for (var i = 0; i < yearsArr.length; i++) {
    //         var year = $("<button>").addClass("dropdown-item");
    //         year.attr({"type": "button", "data-index": i});
    //         // year.attr("data-index", i);
    //         year.text(yearsArr[i]);
    //         $(".dropdown-year-end").append(year);
    //     }
    // });

    $("#crime-type").on("click", function() {
        $(".dropdown-crime-type").empty();
        for (var i = 0; i < crimesArr.length; i++) {
            var crime = $("<button>").addClass("dropdown-item");
            crime.attr({"type": "button", "data-index": i});
            crime.text(crimesArr[i]);
            $(".dropdown-crime-type").append(crime);
        }
    });

    $("#state").on("click", function() {
        $(".dropdown-state").empty();
        for (var i = 0; i < statesArr.length; i++) {
            var state = $("<button>").addClass("dropdown-item");
            state.attr({"type": "button", "data-index": i});
            state.text(statesArr[i].state);
            $(".dropdown-state").append(state);
        }
    });



















// End document.ready()-------------------------------
});