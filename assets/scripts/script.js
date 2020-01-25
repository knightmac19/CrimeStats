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
        localStorage.setItem("crimeName", crimesArr[crimeValue].label);
        // console.log(crimesArr[crimeValue].label);
    });
    // pass in crimesArr[crimeValue].apiCall
    

    $(document).on("click", ".drop-state", function() {
        stateValue = $(this).attr("data-index-state")
        $("#input-state").val(statesArr[stateValue].state);
        localStorage.setItem("abbreviation", statesArr[stateValue].abbreviation);
        localStorage.setItem("stateName", statesArr[stateValue].state);
        // console.log(statesArr[stateValue].state);
    });
    // pass in statesArr[stateValue].abbreviation


    


    // making map & text appear on #generate-btn click
    $("#generate-btn").on("click", function() {
        $(".map-container").css("visibility", "visible");

        var abbreviation = localStorage.getItem("abbreviation");
        var crime = localStorage.getItem("crime");
        var yearString = localStorage.getItem("year");
        var year = parseInt(yearString);
        var crimeName = localStorage.getItem("crimeName");
        var stateName = localStorage.getItem("stateName");
        // console.log(year);
        // console.log(abbreviation);
        // console.log(crime);
        // console.log(crimeName);
        // console.log(stateName);
        // https://api.usa.gov/crime/fbi/sapi/api/nibrs/larceny/offense/states/CO/count?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv
        // https://api.usa.gov/crime/fbi/sapi/api/nibrs/larceny/offender/states/CO/count?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv

        
        
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
            var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/nibrs/" + crime + "/offense/states/" + abbreviation + "/count?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

            $.ajax({
                url:queryURL,
                method:"GET"
            }).done(function(response) {
                console.log(abbreviation + " state ---------------");
                console.log(crime + "---------------------------------");
                
                // set text content here
                var crimeHeader = $("#crime-header");
                var availableData = $("#available-data");
                var crimeNum = $("#crime-num");
                var perCapita = $("#crime-per-capita");
                // var natlCapita = $("#us-per-capita");
                // var rating = $("#rating");
                
                var errorMessage = function() {
                    crimeHeader.text(stateName + ", " + year);
                    crimeHeader.css("color", "white");
                    crimeNum.text("Burglaries: N/A");
                    perCapita.text("Burglaries per 100,000: N/A");
                    availableData.text("Data Not Available");
                };
                console.log(stateName);
                if (stateName === "Alaska" ||
                    stateName === "California" ||
                    stateName === "District of Columbia" ||
                    stateName === "Florida" ||
                    stateName === "Nevada" ||
                    stateName === "New Jersey" ||
                    stateName === "New York" ||
                    stateName === "North Carolina" ||
                    stateName === "Wyoming") {
                        errorMessage();
                } else {
                    console.log(response);
                    
                    var firstYear = response.data[0].data_year;
                    var lastYear = response.data[response.data.length - 1].data_year;
                    
                    var queriedYear = response.data.filter(function(val) {
                        return val.data_year === year;
                    });

                    console.log(queriedYear);
                    var finalArray = queriedYear.filter(function(val) {
                        return val.key === "Offense Count";
                    });
                    console.log(finalArray);

                    var count = parseInt(finalArray[0].value);
                    var hundredThousand = ((count / statesArr[stateValue].population) * 100000).toFixed(2);

                    crimeHeader.text(stateName + ", " + year);
                    crimeHeader.css("color", "white");
                    availableData.text("Data Available From: " + firstYear + " - " + lastYear);

                    if (crimeName === "Burglary") {
                        crimeNum.text("Burglaries: " + count);
                        perCapita.text("Burglaries per 100,000: " + hundredThousand);

                    } else if (crimeName === "Larceny") {
                        crimeNum.text("Larcenies: " + count);
                        perCapita.text("Larcenies per 100,000: " + hundredThousand);

                    } else if (crimeName === "Robbery") {
                        crimeNum.text("Robberies: " + count);
                        perCapita.text("Robberies per 100,000: " + hundredThousand);

                    } else {
                        crimeNum.text(crimeName + "s: " + count);
                        perCapita.text(crimeName + "s per 100,000: " + hundredThousand);
                    }
                    console.log(statesArr[stateValue].population);   
                }

                var clusterYearQuery = clusterArray.filter(function(val) {
                    return val.clusterYear === year;
                });
                var clusterCrimeQuery = clusterYearQuery.filter(function(val) {
                    return val.clusterCrime === crimeName;
                });
                // console.log("cluster year query -----------------");
                // console.log(clusterYearQuery);
                // console.log("cluster crime query -----------------");
                // console.log(clusterCrimeQuery);
                // console.log("cluster crime query data -----------------");
                // console.log(clusterCrimeQuery[0].clusterData);
                var finalData = clusterCrimeQuery[0].clusterData;
                
                // Cluster Layer Begin -------------------------------
                map.addSource("homicides", {
                    type: "geojson",
                    // "https://knightmac19.github.io/geoJSON/homicides.geojson"
                    data: finalData,
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
                

                
            });
        }
        fbi(crime,abbreviation);
        
        
    });

















// End document.ready()-------------------------------
});