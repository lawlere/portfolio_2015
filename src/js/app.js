$(document).ready(function(){
    var m,
        config = {
            // id to data
            "fitstar": {
                "num_slides": 2,
                "button_label": "Go to the FitStar Website",
                "button_url": "http://fitstar.com/",
            },
            "glassbreakers": {
                "num_slides": 3,
                "button_label": "Go to the Glassbreakers website",
                "button_url": "https://www.glassbreakers.co/",
            },
            "kubmo": {
                "num_slides": 3,
                "button_label": "Go to the Kubmo website",
                "button_url": "http://www.kubmo.builders/",
            },
        }
    ;

    m = new Mermaid(config);
    m.init(); // Does event binding and stuff
});

