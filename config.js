"use strict";

module.exports = Object.freeze({

    ALEXA : {
        APP_ID : "[REPLACE WITH YOUR ALEXA SKILL APP ID]",
        SESSION_DYNAMODB_TABLE_NAME: "[YOUR DYNAMODB NAME - REQUIRED]",
        REGION : "us-east-1",
        ACCESS_KEY : "[REPLACE WITH YOUR KEY]",
        SECRET_ACCESS_KEY : "[REPLACE WITH YOUR KEY]"
    },

    /** APP SPECIFIC DEFAULT SETTINGS */
    APP : {
        SETUP_LIMIT : 5,
        DEFAULTS : {
            TIME_ZONE : "America/Los_Angeles",
            SETUP_LIMIT : 5,
            PAGE_SIZE : 5
        },
        SERVICE_COUNTRIES : ["United States"],
        SERVICE_PROVIDERS : {
            "OREGON" : {PROVIDER_CODE : "TRIMET", DESCRIPTION: "Tri-County Metropolitan Transportation.", API_PROVIDER : "TRIMET", SERVICE_AREAS : [
                "BEAVERTON", "CLACKAMAS", "GRESHAM", "HILLSBORO", "LAKE OSWEGO", "OREGON CITY", "PORTLAND", "TIGARD",
            ]},
            "NEW YORK" : {PROVIDER_CODE : "MTA", DESCRIPTION: "Metropolitan Transit Authority", API_PROVIDER : "OBA", SERVICE_AREAS : [
                "NEW YORK CITY", "LONG ISLAND", "CONNECTICUT", "MANHATTAN", "BROOKLYN", "QUEENS", "BRONX", "STATEN ISLAND"
            ]},
            "CALIFORNIA" : {PROVIDER_CODE : "BART", DESCRIPTION: "Bay Area Rapid Transit.", API_PROVIDER : "BART", SERVICE_AREAS : [
                 "BERKELEY", "CASTRO VALLEY", "COLMA", "CONCORD", "DALY CITY", "DUBLIN PLEASANTON", "EL CERRITO", "FREMONT", "HAYWARD", 
                 "LAFAYETTE", "MILLBRAE", "OAKLAND", "ORINDA", "PITTSBURG", "RICHMOND", "SAN BRUNO", "SAN FRANCISCO", "SAN LEANDRO", 
                 "SAN MATEO COUNTY", "SOUTH SAN FRANCISCO", "UNION CITY", "WALNUT CREEK",
            ]},
            "WASHINGTON" : {PROVIDER_CODE : "OBA", DESCRIPTION: "Sound Transit.", API_PROVIDER : "OBA", SERVICE_AREAS : []},
        }
    },

    /** API SETTINGS  */
    API : {
        PROVIDERS : {
            TRIMET : "TRIMET",
            BAY_AREA_RAPID_TRANSIT : "BART",
            CHICAGO_TRANSIT_AUTHORITY : "CTA",
            METROPOLITAN_TRANSIT_AUTHORITY : "MTA",
            ONE_BUS_AWAY : "OBA",
            SOUND_TRANSIT : "ST",
            QUOTES : "QUOTES",
            WEATHER_UNDERGROUND : "WEATHER",
            NUMBERS_FACT : "FACTS",
            YAHOO : "YAHOO",
            GOOGLE : "GOOGLE",
            WALK_SCORE : "WALK_SCORE",
            ZIPCODES : "ZIPCODES"
        },
        REQUEST_TYPES : {
            STOPS : "STOPS",
            STOP_DETAILS : "STOP_DETAILS",
            STATIONS : "STATIONS",
            STATION_DETAILS : "STATION_DETAILS",
            ROUTES : "ROUTES",
            ARRIVALS : "ARRIVALS",
            DELAYS : "DELAYS",
            SCHEDULES : "SCHEDULES",
            DETOURES : "DETOURES",
            ALERTS : "ALERTS",
            GEOCODE : "GEOCODE",
            TIMEZONE : "TIMEZONE",
            QUOTES : "QUOTES",
            PLACES : "PLACES",
            SERVING_AGENCIES : "SERVING_AGENCIES"
        },
        RESPONSE_TYPES : {
            SUMMARY : "SUMMARY",
            BRIEFING : "BRIEFING",
            FLASH : "FLASH",
            ALERTS : "ALERTS",
            SERVICE_ALERTS : "SERVICE_ALERTS",
            ARRIVALS : "ARRIVALS",
            SCHEDULES : "SCHEDULES",
            DETOURES : "DETOURES",
            STOPS : "STOPS",
            DELAYS : "DELAYS",
            ROUTES : "ROUTES",
            PLATFORMS : "PLATFORMS"
        },
        TRIMET : {
            APP_KEY : "[REPLACE WITH YOUR KEY]",
            ARRIVALS_URL : "https://developer.trimet.org/ws/v2/arrivals/showPosition/true/locIDs/",
            STOPS_URL : "https://developer.trimet.org/ws/V1/stops/json/true/showRouteDirs/true/",
            SCHEDULES_URL : "https://developer.trimet.org/ws/v2/arrivals/showPosition/true/locIDs/",
            DETOURES_URL : "https://developer.trimet.org/ws/V1/detours/json/true/includeFuture/true/",
            STOP_DISTANCE : "600",
            SEARCH_RADIUS : "600",
        },
        GOOGLE : {
            APP_KEY : "[REPLACE WITH YOUR KEY]",
            GEOCODE_URL : "https://maps.googleapis.com/maps/api/geocode/json?address=",
            TIMEZONE_URL : "https://maps.googleapis.com/maps/api/timezone/json?location=",
            PLACES_URL : "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=",
            BASE_URL : "https://maps.googleapis.com/maps/api/",
        },
        MTA : {
            APP_KEY : "[REPLACE WITH YOUR KEY]",
            BASE_URL : "https://bustime.mta.info/api/where/",
            LATITUDE_SPAN : "0.005",
            LONGITUDE_SPAN : "0.005",
            AGENCY_PREFIX : "MTA",
            SEARCH_RADIUS : "300",
        },
        OBA : {
            APP_KEY : "[REPLACE WITH YOUR KEY]",
            BASE_URL : "http://api.pugetsound.onebusaway.org/api/where/",
            SEARCH_RADIUS : "",
            LATITUDE_SPAN : "0.005",
            LONGITUDE_SPAN : "0.005",
        },
        CTA : {
            APP_KEY : "[REPLACE WITH YOUR KEY]",
            BASE_URL : "http://ctabustracker.com/bustime/api/v2/",
            LINES : {
                "Red" : "Red",
                "Blue" : "Blue",
                "Brn" : "Brown",
                "G" : "Green",
                "Org" : "Orange",
                "P" : "Purple",
                "Pexp" : "Purple Express",
                "Pink" : "Pink",
                "Y" : "Yellow"
            }
        },
        BART : {
            APP_KEY : "[REPLACE WITH YOUR KEY]",
            BASE_URL : "https://api.bart.gov/api/",
            ADVISORY_BASE_URL : "https://api.bart.gov/api/bsa.aspx?",
            REAL_TIME_BASE_URL : "https://api.bart.gov/api/etd.aspx?",
            ROUTES_BASE_URL : "https://api.bart.gov/api/route.aspx?",
            SCHEDULES_BASE_URL : "https://api.bart.gov/api/sched.aspx?",
            STATIONS_BASE_URL : "https://api.bart.gov/api/stn.aspx?",
            STATIONS : {
                "12th" : "Twelfth street Oakland City Center",
                "16th" : "sixteenth street Mission san francisco",
                "19th" : "nineteenth street Oakland",
                "24th" : "twentyfourth street Mission san francisco",
                "ashb" : "Ashby Berkeley",
                "balb" : "Balboa Park san francisco",
                "bayf" : "Bay Fair San Leandro",
                "cast" : "Castro Valley",
                "civc" : "Civic Center san francisco",
                "cols" : "Coliseum",
                "colm" : "Colma",
                "conc" : "Concord",
                "daly" : "Daly City",
                "dbrk" : "Downtown Berkeley",
                "dubl" : "Dublin Pleasanton",
                "deln" : "El Cerrito del Norte",
                "plza" : "El Cerrito Plaza",
                "embr" : "Embarcadero san francisco",
                "frmt" : "Fremont",
                "ftvl" : "Fruitvale Oakland",
                "glen" : "Glen Park san francisco",
                "hayw" : "Hayward",
                "lafy" : "Lafayette",
                "lake" : "Lake Merritt Oakland",
                "mcar" : "MacArthur Oakland",
                "mlbr" : "Millbrae",
                "mont" : "Montgomery street san francisco",
                "nbrk" : "North Berkeley",
                "ncon" : "North Concord Martinez",
                "oakl" : "Oakland International Airport",
                "orin" : "Orinda",
                "pitt" : "Pittsburg Bay Point",
                "phil" : "Pleasant Hill",
                "powl" : "Powell street san francisco",
                "rich" : "Richmond",
                "rock" : "Rockridge Oakland",
                "sbrn" : "San Bruno",
                "sfia" : "San Francisco International Airport",
                "sanl" : "San Leandro",
                "shay" : "South Hayward",
                "ssan" : "South San Francisco",
                "ucty" : "Union City",
                "warm" : "Warm Springs South Fremont",
                "wcrk" : "Walnut Creek",
                "wdub" : "West Dublin",
                "woak" : "West Oakland"
            }
        },
        QUOTES : {
            BASE_URL : "andruxnet-random-famous-quotes.p.mashape.com",
            APP_KEY : "[REPLACE WITH YOUR KEY]",
            FORISMATIC : {
                BASE_URL : "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
            }
        },
        WEATHER : {
            BASE_URL : "http://api.wunderground.com/api/",
            APP_KEY : "[REPLACE WITH YOUR KEY]"
        },
        FACTS : {
            BASE_URL : "numbersapi.p.mashape.com",
            APP_KEY : "[REPLACE WITH YOUR KEY]"
        },
        WALK_SCORE : {
            APP_KEY : "[REPLACE WITH YOUR KEY]",
            BASE_URL : ""
        },
        YAHOO : {
            CLIENT_KEY : "[REPLACE WITH YOUR KEY]--",
            CLIENT_SECRET : "[REPLACE WITH YOUR KEY]"
        },
        
        /** TODO : Refactor all APIs to this structure */
        ZIPCODES : {
            APP_KEY : "[REPLACE WITH YOUR KEY]",
            BASE_URL : "https://www.zipcodeapi.com/rest/",
            COMMAND : {
                GET_ZIPCODES_FROM_CITY_STATE : "/city-zips.json/",
                GET_LOCATIONS_FROM_MULTI_ZIPCODES : "/multi-info.json/",
                GET_LOCATION_FROM_ZIPCODE : "/info.json/",
                DISTANCE_BETWEEN_ZIPCODES : "/distance.json/"
            },
            PROPERTIES : {
                ZIP_CODE : "zip_code",
                ZIP_CODES : "zip_codes",
                LATITUDE : "lat",
                LONGITUDE : "lng",
                CITY : "city",
                STATE : "state",
                TIMEZONE_DATASET : "timezone",
                TIMEZONE_NAME : "timezone_identifier",
                TIMEZONE_ABBR : "timezone_abbr",
                TIMEZONE_UTC_OFFSET_SECONDS : "utc_offset_sec",
                IS_DAYLIGHT_SAVING : "is_dst"
            },
            PARAMETERS : {
                UNITS : "units",
                ZIPCODE : "zip_code",
                ZIPCODES : "zip_codes",
                CITY : "city",
                STATE : "state"
            },
            REQUEST_TYPES : {
                GET_ZIPCODES_FROM_CITY_STATE : "GET_ZIPCODES_FROM_CITY_STATE",
                GET_LOCATIONS_FROM_MULTI_ZIPCODES : "GET_LOCATIONS_FROM_MULTI_ZIPCODES",
                GET_LOCATION_FROM_ZIPCODE : "GET_LOCATION_FROM_ZIPCODE",
                DISTANCE_BETWEEN_ZIPCODES : "DISTANCE_BETWEEN_ZIPCODES"
            },
            ENUM : {
                UNITS : {
                    DEGREES : "degrees",
                    RADIANS : "radians",
                    KM : "km",
                    MILES : "mile"
                }
            }
        },
        WEBSERVICEX : {
            APP_KEY : "",
            BASE_URL : "",
            COMMAND : {
                GET_INFO_BY_CITY : "",
                GET_INFO_BY_STATE : "",
                GET_INFO_BY_ZIPCODE : "",
                GET_INFO_BY_AREACODE : ""
            },
            PARAMETERS : {

            },
            PROPERTIES : {

            },
            ENUM : {

            }
        }
    }
});