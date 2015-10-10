$(document).ready(function(){
    var m,
        config = {
            // id to data
            "fitstar": {
                "button_label": "Go to the FitStar Website",
                "button_url": "http://fitstar.com/",
            },
            "glassbreakers": {
                "button_label": "Go to the Glassbreakers website",
                "button_url": "https://www.glassbreakers.co/",
            },
            "kubmo": {
                "button_label": "Go to the Kubmo website",
                "button_url": "http://www.kubmo.builders/",
            },
        },
        preload_images = [
            /*
             * Add image paths here that you want explicitely preloaded. Things that are in html ARE already preloaded.
             * Images in CSS are NOT automatically preloaded (e.g. background() properties).
             * Carousel image versions ARE automatically preloaded.
             */
            "/img/bay-image.jpg",
            "/img/product_slider_1_fitstar.jpg",
        ]
    ;

    m = new Mermaid(config, preload_images);
    m.init(); // Does event binding and stuff
});

