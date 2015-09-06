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
             * Add the relative path of any images that
             * you want preloaded. All carousel images
             * are automatically loaded.
             */
            "/img/bay-img.jpg",
            "/img/email.png",
            "/img/fitstar_logo.png",
            "/img/kubmo_logo.png",
            "/img/linkedin.png",
            "/img/logo.png",
            "/img/logo_single.png",
            "/img/twitter.png",
        ]
    ;

    m = new Mermaid(config, preload_images);
    m.init(); // Does event binding and stuff
});

