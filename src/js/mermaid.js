var Mermaid = function(config, images) {
    // init
    this.config = config;
    this.images = images;
    this.current_id = null;
    this.templates = {};

    // Formatting
    this.PANEL_ID = "#mermaid-panel";
    this.CAROUSEL_CSS_ID = "#ID-hero";
    this.BOTTOM_BUTTON_ROW_CSS_ID = "#bottom-button-row";
    this.BOTTOM_BUTTON_HREF_CSS_ID = "#bottom-button-href";
    this.BOTTOM_BUTTON_CONTENT_CSS_ID = "#bottom-button-content";
    this.IMAGE_INACTIVE_FORMAT = "/img/carousel/ID_square.png";
    this.IMAGE_ACTIVE_FORMAT = "/img/carousel/ID_spike.png";
    this.IMAGE_MOBILE_INACTIVE_FORMAT = "/img/carousel/ID_mobile_closed.png";
    this.IMAGE_MOBILE_ACTIVE_FORMAT = "/img/carousel/ID_spike.png";
    this.TEMPLATE_LOCATION = "/templates/ID.html";
    this.PRELOAD_CSS = "#pre-load";
    this.POSTLOAD_CSS = "#post-load";
    this.HEADER_LOGO_CSS = ".header-logo";
    this.HEADER_CSS = "#bay-image"; // After which navbar shows
    this.NAVBAR_CSS= ".navbar";
    this.COLUMNS = 12; // Bootstrap columns

    this.init = function() {
        var self = this;

        // Load templates
        _.each(self.config, function(data, id) {
            jQuery.ajax({
                url: self.TEMPLATE_LOCATION.replace("ID", id),
                success: function(data) {
                    self.templates[id] = data;
                },
                async: false, // Could be async - don't have time to write a syncer :-)
                dataType: 'html',
            });
        });

        // Build carousel and mobile buttons
        self.build_nav();

        // Carousel click listener
        _.each(self.config, function(data, id) {
            $(self.CAROUSEL_CSS_ID.replace("ID", id))
                .click(function() {
                    self.change_id(id);
                })
            ;
        });

        // Scroll to top on click of navbar logo
        $(self.HEADER_LOGO_CSS).click(function(){
            $('body,html').animate({scrollTop:0},1000);
        });

        // Preload images
        self.preload_images();

        // Swap to real site when dom loads
        $(window).load(function() {
            $(self.POSTLOAD_CSS).show();
            $(self.PRELOAD_CSS).hide();

            // Call after elements exist because it uses one's height
            self.initiate_navbar_listener();

        });
    };

    this.preload_image = function(path) {
        // Preload a SINGLE image
        $('<img />').attr('src', path).appendTo('body').css('display','none');
    };


    this.build_nav = function() {
        var self = this,
            carousel_width,
            column_format = '<div class="col-xs-WIDTH PADDING_CLASS"><img src="IMAGE_INACTIVE" alt="ALT" id="ID"></div>',
            column,
            loop_count
        ;

        // This breaks when you have more than 4 items. You have been warnedj
        column_width = Math.floor(self.COLUMNS / Object.keys(self.config).length);
        loop_count = 0;
        _.each(self.config, function(data, id) {
            loop_count++;

            // Build the desktop column
            column = column_format
                .replace("WIDTH", column_width)
                .replace("ID", id + "-hero")
                .replace("ALT", id)
                .replace(
                    "IMAGE_INACTIVE",
                    self.IMAGE_INACTIVE_FORMAT.replace("ID", id)
                )
                .replace(
                    "PADDING_CLASS",
                    function() {
                        if (loop_count == 1) {
                            return "col-left";
                        }
                        if (loop_count == Object.keys(self.config).length) {
                            return "col-right";
                        }
                        return  "col-middle";
                    }
                )
            ;
            $("#jobs-carousel").append(column);
        });
    };

    this.preload_images = function() {
        var self = this;

        // Preload "active" carousel images, which are not active in the dom
        _.each(self.config, function(data, id) {
            self.preload_image(
                self.IMAGE_ACTIVE_FORMAT.replace("ID", id)
            );
        });

        // Preload explicitly stated images
        _.each(self.images, function(path) {
            self.preload_image(path);
        });
    };

    this.initiate_navbar_listener = function() {
        // Called during initialize. Don't do it until the header has a height!
        var self = this,
            threshold = $(self.HEADER_CSS).height() * 0.75 // Slightly less
        ;

        $(window).scroll(function () {
            if ($(this).scrollTop() > threshold) {
                $(self.NAVBAR_CSS).fadeIn();
            } else {
                $(self.NAVBAR_CSS).fadeOut();
            }
        });
    };


    this.set_state_inactive = function() {
        var self = this;
        // Set image to inactive
        $(self.CAROUSEL_CSS_ID.replace("ID", this.current_id))
            .attr(
                "src",
                self.IMAGE_INACTIVE_FORMAT.replace("ID", self.current_id)
            )
        ;

        this.current_id = null;
        $(this.PANEL_ID).empty();
    };

    this.set_state_active = function(new_id) {
        var self = this;
        self.current_id = new_id;

        // Set image to active
        $(self.CAROUSEL_CSS_ID.replace("ID", this.current_id))
            .attr(
                "src",
                self.IMAGE_ACTIVE_FORMAT.replace("ID", self.current_id)
            )
        ;

        $(this.PANEL_ID).html(self.templates[new_id]);

        // Set bottom button
        $(self.BOTTOM_BUTTON_HREF_CSS_ID).attr(
            "href",
            self.config[new_id].button_url
        );
        $(self.BOTTOM_BUTTON_CONTENT_CSS_ID).text(
            self.config[new_id].button_label
        );
        $(self.BOTTOM_BUTTON_ROW_CSS_ID).show();

        // Assumes completely new id through change_id function
    };

    this.change_id = function(new_id) {
        if (this.current_id == new_id) {
            // Rewind to first slide
            return;
        }
        if (this.current_id !== null) {
            this.set_state_inactive();
        }
        this.set_state_active(new_id);
    };
};

