/* states that don't return data:
    CA
    DC
    FL
    NV
    NJ
    NY
    NC
    WY
*/

var statesArr = [
  
    {
      capital: "Montgomery",
      state: "Alabama",
      abbreviation: "AL",
      population: 737438,
      centerLat: 32.505,
      centerLong: -86.380,
      zoom: 5
    },
    {
      capital: "Juneau",
      state: "Alaska",
      abbreviation: "AK",
      population: 4887871,
      centerLat: 64.4354,
      centerLong: -152.2812,
      zoom: 3
    },
    {
      capital: "Phoenix",
      state: "Arizona",
      abbreviation: "AZ",
      population: 3013825,
      centerLat: 34.185,
      centerLong: -111.476,
      zoom: 5
    },
    {
      capital: "Little Rock",
      state: "Arkansas",
      abbreviation: "AR",
      population: 7171646,
      centerLat: 34.489,
      centerLong: -92.181,
      zoom: 5
    },
    {
      capital: "Sacramento",
      state: "California",
      abbreviation: "CA",
      population: 39557045,
      centerLat: 37.958,
      centerLong: -119.2658,
      zoom: 4
    },
    {
      capital: "Denver",
      state: "Colorado",
      abbreviation: "CO",
      population: 569564,
      centerLat: 39.0000,
      centerLong: -105.325,
      zoom: 5
    },
    {
      capital: "Hartford",
      state: "Connecticut",
      abbreviation: "CT",
      population: 3572665,
      centerLat: 41.357,
      centerLong: -72.424,
      zoom: 7
    },
    {
      capital: "Dover",
      state: "Delaware",
      abbreviation: "DE",
      population: 967171,
      centerLat: 38.5848,
      centerLong: -75.3042,
      zoom: 7
    },
    // FL doesn't return FBI data
    {
      capital: "Tallahassee",
      state: "Florida",
      abbreviation: "FL",
      population:  21299325,
      centerLat: 28.4053,
      centerLong: -82.2736,
      zoom: 5
    },
    // FL doesn't return FBI data
    {
      capital: "Atlanta",
      state: "Georgia",
      abbreviation: "GA",
      population: 10519475,
      centerLat: 32.39436,
      centerLong: -83.26179,
      zoom: 5
    },
    {
      capital: "Honolulu",
      state: "Hawaii",
      abbreviation: "HI",
      population: 1420491,
      centerLat: 20.571,
      centerLong: -157.156,
      zoom: 6
    },
    {
      capital: "Boise",
      state: "Idaho",
      abbreviation: "ID",
      population: 1754208,
      centerLat: 44.154,
      centerLong: -114.574,
      zoom: 5
    },
    {
      capital: "Springfield",
      state: "Illinois",
      abbreviation: "IL",
      population: 12741080,
      centerLat: 39.44215,
      centerLong: -89.30131,
      zoom: 5
    },
    {
      capital: "Indianapolis",
      state: "Indiana",
      abbreviation: "IN",
      population: 6691878,
      centerLat: 39.45577,
      centerLong: -86.26286,
      zoom: 5
    },
    {
      capital: "Des Moines",
      state: "Iowa",
      abbreviation: "IA",
      population: 3156145,
      centerLat: 41.577,
      centerLong: -93.231,
      zoom: 5

    },
    {
      capital: "Topeka",
      state: "Kansas",
      abbreviation: "KS",
      lat: 39.04,
      population: 2911505,
      centerLat: 38.299,
      centerLong: -98.419,
      zoom: 5
    },
    {
      capital: "Frankfort",
      state: "Kentucky",
      abbreviation: "KY",
      population: 4468402,
      centerLat: 37.215,
      centerLong: -84.304,
      zoom: 5
    },
    {
      capital: "Baton Rouge",
      state: "Louisiana",
      abbreviation: "LA",
      population: 4659978,
      centerLat: 30.581,
      centerLong: -92.322,
      zoom: 5
    },
    {
      capital: "Augusta",
      state: "Maine",
      abbreviation: "ME",
      population: 1338404,
      centerLat: 45.15119982,
      centerLong: -69.13599988,
      zoom: 5
    },
    {
      capital: "Annapolis",
      state: "Maryland",
      abbreviation: "MD",
      population: 6042718,
      centerLat: 39.295,
      centerLong: -77.223,
      zoom: 7
    },
    {
      capital: "Boston",
      state: "Massachusetts",
      abbreviation: "MA",
      population: 6902149,
      centerLat: 42.223762,
      centerLong: -71.553093,
      zoom: 7
    },
    {
      capital: "Lansing",
      state: "Michigan",
      abbreviation: "MI",
      population: 9995915,
      centerLat: 45.37,
      centerLong: -84.563,
      zoom: 5
    },
    {
      capital: "Saint Paul",
      state: "Minnesota",
      abbreviation: "MN",
      population: 5611179,
      centerLat: 46.15,
      centerLong: -95.196,
      zoom: 5
    },
    {
      capital: "Jackson",
      state: "Mississippi",
      abbreviation: "MS",
      population: 2986530,
      centerLat: 32.489,
      centerLong: -89.430,
      zoom: 5
    },
    {
      capital: "Jefferson City",
      state: "Missouri",
      abbreviation: "MO",
      population: 6126452,
      centerLat: 38.4992,
      centerLong: -92.3566,
      zoom: 5
    },
    {
      capital: "Helana",
      state: "Montana",
      abbreviation: "MT",
      population: 1062305,
      centerLat: 47.0027,
      centerLong: -109.8741,
      zoom: 5
    },
    {
      capital: "Lincoln",
      state: "Nebraska",
      abbreviation: "NE",
      population: 1929268,
      centerLat: 41.3130,
      centerLong: -99.5142,
      zoom: 5
    },
    // Nevada doesn't return FBI data
    {
      capital: "Carson City",
      state: "Nevada",
      abbreviation: "NV",
      population: 3034392,
      centerLat: 39.303,
      centerLong: -116.559,
      zoom: 5
    },
    // Nevada doesn't return FBI data
    {
      capital: "Concord",
      state: "New Hampshire",
      abbreviation: "NH",
      population: 1356458,
      centerLat: 43.5657995,
      centerLong: -71.4824994,
      zoom: 6
    },
    // New Jersey doesn't return FBI data
    {
      capital: "Trenton",
      state: "New Jersey",
      abbreviation: "NJ",
      population: 8908520,
      centerLat: 40.412,
      centerLong: -74.3330,
      zoom: 6
    },
    // New Jersey doesn't return FBI data
    {
      capital: "Santa Fe",
      state: "New Mexico",
      abbreviation: "NM",
      population: 2095428,
      centerLat: 34.301,
      centerLong: -106.67,
      zoom: 5
    },
    // New York doesn't return FBI data
    {
      capital: "Albany",
      state: "New York",
      abbreviation: "NY",
      population: 19542209,
      centerLat: 42.579,
      centerLong: -76.10,
      zoom: 5
    },
    // New York doesn't return FBI data
    // North Carolina doesn't return FBI data
    {
      capital: "Raleigh",
      state: "North Carolina",
      abbreviation: "NC",
      population: 10383620,
      centerLat: 35.362,
      centerLong: -79.273,
      zoom: 6
    },
    // North Carolina doesn't return FBI data
    {
      capital: "Bismarck",
      state: "North Dakota",
      abbreviation: "ND",
      population: 760077,
      centerLat: 47.247,
      centerLong: -100.341,
      zoom: 5
    },
    {
      capital: "Columbus",
      state: "Ohio",
      abbreviation: "OH",
      population: 11689442,
      centerLat: 40.217,
      centerLong: -82.445,
      zoom: 5
    },
    {
      capital: "Oklahoma City",
      state: "Oklahoma",
      abbreviation: "OK",
      population: 3943079,
      centerLat: 35.322,
      centerLong: -97.396,
      zoom: 5
    },
    {
      capital: "Salem",
      state: "Oregon",
      abbreviation: "OR",
      population: 4190713,
      centerLat: 43.521,
      centerLong: -120.587,
      zoom: 5
    },
    {
      capital: "Harrisburg",
      state: "Pennsylvania",
      abbreviation: "PA",
      population: 12807060,
      centerLat: 40.538,
      centerLong: -77.448,
      zoom: 6
    },
    {
      capital: "Providence",
      state: "Rhode Island",
      abbreviation: "RI",
      population: 1057315,
      centerLat: 41.7001,
      centerLong: -71.4162,
      zoom: 8
    },
    {
      capital: "Columbia",
      state: "South Carolina",
      abbreviation: "SC",
      population: 5084127,
      centerLat: 33.498,
      centerLong: -80.524,
      zoom: 6
    },
    {
      capital: "Pierre",
      state: "South Dakota",
      abbreviation: "SD",
      population: 882235,
      centerLat: 44.241,
      centerLong: -100.287,
      zoom: 5
    },
    {
      capital: "Nashville",
      state: "Tennessee",
      abbreviation: "TN",
      population: 6770010,
      centerLat: 35.477,
      centerLong: -86.373,
      zoom: 6
    },
    {
      capital: "Austin",
      state: "Texas",
      abbreviation: "TX",
      lat: 30.266667,
      population: 28701845,
      centerLat: 31.232952,
      centerLong: -99.101434,
      zoom: 5
    },
    {
      capital: "Salt Lake City",
      state: "Utah",
      abbreviation: "UT",
      population: 3161105,
      centerLat: 39.232,
      centerLong: -111.411,
      zoom: 5
    },
    {
      capital: "Montpelier",
      state: "Vermont",
      abbreviation: "VT",
      population: 626299,
      centerLat: 43.556,
      centerLong: -72.403,
      zoom: 6
    },
    {
      capital: "Richmond",
      state: "Virginia",
      abbreviation: "VA",
      lat: 37.54,
      population: 8517685,
      centerLat: 37.293,
      centerLong: -78.338,
      zoom: 5
    },
    {
      capital: "Olympia",
      state: "Washington",
      abbreviation: "WA",
      population: 7535591,
      centerLat: 47.2,
      centerLong: -120.161,
      zoom: 5
    },
    {
      capital: "Charleston",
      state: "West Virginia",
      abbreviation: "WV",
      population: 1805832,
      centerLat: 38.359,
      centerLong: -80.422,
      zoom: 5
    },
    {
      capital: "Madison",
      state: "Wisconsin",
      abbreviation: "WI",
      population: 5813568,
      centerLat: 44.2616,
      centerLong: -90.074867,
      zoom: 5
    },
    // Wyoming doesn't return FBI data
    {
      capital: "Cheyenne",
      state: "Wyoming",
      abbreviation: "WY",
      population: 577737,
      centerLat: 42.5818,
      centerLong: -107.4018,
      zoom: 5
    }
    // Wyoming doesn't return FBI data
]


// module.exports = statesArr;