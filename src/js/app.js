$(document).ready(function(){
    var m,
        config = {
            // id to data
            "fitstar": {
                "button_label": "Go to the FitStar Website",
                "button_url": "http://fitstar.com/",
            },
            "kubmo": {
                "button_label": "Go to the FitStar website",
                "button_url": "http://fitstar.com/",
            },
            "glassbreakers": {
                "button_label": "Go to the Glassbreakers website",
                "button_url": "https://www.glassbreakers.co/",
            },
        },
        preload_images = [
            /*
             * Add image paths here that you want explicitely preloaded. Things that are in html ARE already preloaded.
             * Images in CSS are NOT automatically preloaded (e.g. background() properties).
             * Carousel image versions ARE automatically preloaded.
             */
            "/img/bay-image.jpg",
            "/img/email.png",
            "/img/fitstar_logo.png",
            "/img/GB_logo.png",
            "/img/kubmo_logo.png",
            "/img/linkedin.png",
            "/img/logo.png",
            "/img/logo_single.png",
            "/img/product_slider_1_fitstar.jpg",
            "/img/twitter.png",
            "/img/product_slider_1_fitstar.jpg",
            "/img/apple_watch/pt_apple_watch.jpg",
            "/img/apple_watch/yoga_apple_watch.png",
            "/img/FTW/ftw_freestyle.png",
            "/img/FTW/ftw_pre_session.png",
            "/img/FTW/ftw_program_store.png",
            "/img/FTW/ftw_session.png",
            "/img/FTW/glassbreakers.png",
            "/img/FTW/kubmo.png",
            "/img/ipad/pt_pre_session.png",
            "/img/ipad/pt_session.png",
            "/img/ipad/yoga_feedback.png",
            "/img/ipad/yoga_pose_list.png",
            "/img/ipad/yoga_session.png",
            "/img/iphone/glassbreakers_insta.png",
            "/img/iphone/pt-pre_move.png",
            "/img/iphone/pt_pause.png",
            "/img/iphone/pt_pre_session.png",
            "/img/iphone/yoga_customize.png",
            "/img/iphone/yoga_feedback.png",
            "/img/iphone/yoga_pre_session.png",
            "/img/iphone/yoga_session.png",
        ]
    ;

    m = new Mermaid(config, preload_images);
    m.init(); // Does event binding and stuff
});

