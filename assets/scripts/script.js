$(document).ready(function() {
    
    

    var storageKey = localStorage.getItem("mapboxToken");
    console.log(storageKey);
    
    if (storageKey != null) {
        $(".mb-3").css("display", "none");
        var p = $("<p>").text("Mapbox Ready!");
        p.addClass("lead");
        $(".token-col").append(p);
    } 
    
    $("#mapbox-token").keyup(function(event) {
        var code = event.which;
        if (code == 13) {
            event.preventDefault();
            var mapboxToken = $("#mapbox-token").val();
            localStorage.setItem("mapboxToken", mapboxToken);
            location.reload(true);
        }
    });

    // add button on click function
    $("#add-button").on("click", function() {
        var mapboxToken = $("#mapbox-token").val();
        localStorage.setItem("mapboxToken", mapboxToken);
        location.reload(true);
        
    });

    // add button 'enter' keyup function
    // $("#add-button").keyup(function(event) {
    //     var code = event.which;
    //     if (code == 13) {
    //         event.preventDefault();
    //         var mapboxToken = $("#mapbox-token").val();
    //         localStorage.setItem("mapboxToken", mapboxToken);

    //     }
    // });

    // populate 'year' dropdown function
    $("#year").on("click", function() {
        $(".dropdown-year").empty();
        for (var i = 0; i < yearsArr.length; i++) {
            var year = $("<button>").addClass("dropdown-item");
            year.attr({"type": "button", "data-index": i});
            year.text(yearsArr[i]);
            $(".dropdown-year").append(year);
        }
    });

    // populate 'crime' dropdown function
    $("#crime-type").on("click", function() {
        $(".dropdown-crime-type").empty();
        for (var i = 0; i < crimesArr.length; i++) {
            var crime = $("<button>").addClass("dropdown-item");
            crime.attr({"type": "button", "data-index": i});
            crime.text(crimesArr[i].label);
            $(".dropdown-crime-type").append(crime);
        }
    });

    // populate 'state' dropdown function
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