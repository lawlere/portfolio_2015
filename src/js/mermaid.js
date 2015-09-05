var Mermaid = function(config) {
    // init
    this.config = config;
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
    this.TEMPLATE_LOCATION = "/templates/ID.html";

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

        // Carousel click listener
        _.each(self.config, function(data, id) {
            $(self.CAROUSEL_CSS_ID.replace("ID", id))
                .click(function() {
                    self.change_id(id);
                })
            ;
        });

        // TODO - end a loading screen
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

