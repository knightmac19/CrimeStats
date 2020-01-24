$(document).ready(function() {
    var yearValue;
    var crimeValue;
    var stateValue;

    var storageKey = localStorage.getItem("mapboxToken");
    console.log(storageKey);
    
    // if there's something in local storage, hide input bar & add text line
    if (storageKey != null) {
        $(".mb-3").css("display", "none");
        var p = $("<p>").text("Mapbox Ready!");
        p.addClass("lead");
        $(".token-col").append(p);
    } 
    
    // setting key in storage & reloading page on 'enter'
    $("#mapbox-token").keyup(function(event) {
        var code = event.which;
        if (code == 13) {
            event.preventDefault();
            var mapboxToken = $("#mapbox-token").val();
            localStorage.setItem("mapboxToken", mapboxToken);
            location.reload(true);
        }
    });

    // add button on click function & reloading page
    $("#add-button").on("click", function() {
        var mapboxToken = $("#mapbox-token").val();
        localStorage.setItem("mapboxToken", mapboxToken);
        location.reload(true);
        
    });
    
    // populate 'year' dropdown function
    $("#year").on("click", function() {
        $(".dropdown-year").empty();
        for (var i = 0; i < yearsArr.length; i++) {
            var year = $("<button>").addClass("dropdown-item drop-year");
            year.attr({"type": "button", "data-index-year": i});
            year.text(yearsArr[i]);
            $(".dropdown-year").append(year);
        }
    });

    // populate 'crime' dropdown function
    $("#crime-type").on("click", function() {
        $(".dropdown-crime-type").empty();
        for (var i = 0; i < crimesArr.length; i++) {
            var crime = $("<button>").addClass("dropdown-item drop-crime");
            crime.attr({"type": "button", "data-index-crime": i});
            crime.text(crimesArr[i].label);
            $(".dropdown-crime-type").append(crime);
        }
    });

    // populate 'state' dropdown function
    $("#state").on("click", function() {
        $(".dropdown-state").empty();
        for (var i = 0; i < statesArr.length; i++) {
            var state = $("<button>").addClass("dropdown-item drop-state");
            state.attr({"type": "button", "data-index-state": i});
            state.text(statesArr[i].state);
            $(".dropdown-state").append(state);
        }
    });

    $(document).on("click", ".drop-year", function() {
        yearValue = $(this).attr("data-index-year")
        $("#input-year").val(yearsArr[yearValue]);
        localStorage.setItem("year", yearsArr[yearValue]);
        // console.log(yearsArr[yearValue]);
    });
    

    $(document).on("click", ".drop-crime", function() {
        crimeValue = $(this).attr("data-index-crime")
        $("#input-crime").val(crimesArr[crimeValue].label);
        localStorage.setItem("crime", crimesArr[crimeValue].apiCall);
        // console.log(crimesArr[crimeValue].label);
    });
    // pass in crimesArr[crimeValue].apiCall

    $(document).on("click", ".drop-state", function() {
        stateValue = $(this).attr("data-index-state")
        $("#input-state").val(statesArr[stateValue].state);
        localStorage.setItem("abbreviation", statesArr[stateValue].abbreviation);
        // console.log(statesArr[stateValue].state);
    });
    // pass in statesArr[stateValue].abbreviation


    


    // making map & text appear on #generate-btn click
    $("#generate-btn").on("click", function() {
        $(".map-container").css("visibility", "visible");

        var abbreviation = localStorage.getItem("abbreviation");
        var crime = localStorage.getItem("crime");
        var year = localStorage.getItem("year");
        console.log(year);
        console.log(abbreviation);
        console.log(crime);
        
        
        // mapbox API call
        mapboxgl.accessToken = storageKey;
            
        // mapbox API call
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
            center: [statesArr[stateValue].centerLong, statesArr[stateValue].centerLat], // starting position [lng, lat]
            zoom: statesArr[stateValue].zoom // starting zoom
        });
        map
        
        
        // writing FBI API call
        var fbi = function(crime, abbreviation) {
            var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/nibrs/" + crime + "/offender/states/" + abbreviation + "/count?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

            $.ajax({
                url:queryURL,
                method:"GET"
            }).done(function(response) {
                


                
                /*
                // Cluster Layer Begin -------------------------------
                map.addSource("homicides", {
                    type: "geojson",
                    data: "https://knightmac19.github.io/geoJSON/homicides.geojson",
                    cluster: true,
                    clusterMaxZoom: 14, // Max zoom to cluster points on
                    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
                });

                map.addLayer({
                    id: "clusters",
                    type: "circle",
                    source: "homicides",
                    filter: ["has", "point_count"],
                    paint: {
                        // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                        // with three steps to implement three types of circles:
                        //   * Blue, 20px circles when point count is less than 100
                        //   * Yellow, 30px circles when point count is between 100 and 750
                        //   * Pink, 40px circles when point count is greater than or equal to 750
                        'circle-color': [
                            'step',
                            ['get', 'point_count'],
                            '#51bbd6',
                            100,
                            '#f1f075',
                            300,
                            '#f28cb1'
                        ],
                        'circle-radius': [
                            'step',
                            ['get', 'point_count'],
                            20,
                            100,
                            30,
                            300,
                            40
                        ]
                    }
                });
                
                map.addLayer({
                    id: 'cluster-count',
                    type: 'symbol',
                    source: 'homicides',
                    filter: ['has', 'point_count'],
                    layout: {
                        'text-field': '{point_count_abbreviated}',
                        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                        'text-size': 12
                    }
                });
        
                map.addLayer({
                    id: 'unclustered-point',
                    type: 'circle',
                    source: 'homicides',
                    filter: ['!', ['has', 'point_count']],
                    paint: {
                        'circle-color': '#11b4da',
                        'circle-radius': 4,
                        'circle-stroke-width': 1,
                        'circle-stroke-color': '#fff'
                    }
                });
        
                // inspect a cluster on click
                map.on('click', 'clusters', function(e) {
                    var features = map.queryRenderedFeatures(e.point, {
                        layers: ['clusters']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    map.getSource('homicides').getClusterExpansionZoom(
                        clusterId,
                        function(err, zoom) {
                            if (err) return;
        
                            map.easeTo({
                                center: features[0].geometry.coordinates,
                                zoom: zoom
                            });
                        }
                    );
                });
        
                map.on('mouseenter', 'clusters', function() {
                    map.getCanvas().style.cursor = 'pointer';
                });
                map.on('mouseleave', 'clusters', function() {
                    map.getCanvas().style.cursor = '';
                });
                // Cluster Layer End ------------------------
                */

                console.log(abbreviation + " state ---------------");
                console.log(crime + "---------------------------------");
                console.log(response);
            });
        }
        fbi(crime,abbreviation);
        
        
    });

















// End document.ready()-------------------------------
});