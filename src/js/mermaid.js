var Mermaid = function(config) {
    // init
    this.config = config;
    this.current_id = null;
    this.current_slide = null;

    // Formatting
    this.SLIDE_GLOBAL_CSS = ".mermaid-slide";
    this.CAROUSEL_CSS_ID = "#ID-hero";
    this.SLIDE_CSS_ID = "#slide-ID-INDEX";
    this.IMAGE_INACTIVE_FORMAT = "/img/carousel/ID_square.png";
    this.IMAGE_ACTIVE_FORMAT = "/img/carousel/ID_spike.png";
    this.BUTTON_LEFT_CSS_ID = ""; // TODO
    this.BUTTON_RIGHT_CSS_ID = ""; // TODO

    this.init = function(new_id) {
        var self = this;
        self.change_id(new_id);

        // Carousel click listener
        _.each(self.config, function(slide_count, id) {
            $(self.CAROUSEL_CSS_ID.replace("ID", id))
                .click(function() {
                    self.change_id(id);
                })
            ;
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
        this.slide_id = null;
        $(this.SLIDE_GLOBAL_CSS).hide();
    };

    this.set_state_active = function(new_id) {
        var self = this;
        self.current_id = new_id;
        self.set_slide(1);

        // Set image to active
        $(self.CAROUSEL_CSS_ID.replace("ID", this.current_id))
            .attr(
                "src",
                self.IMAGE_ACTIVE_FORMAT.replace("ID", self.current_id)
            )
        ;

        // Assumes completely new id through change_id function

        // TODO - button listeners???
    };

    this.change_id = function(new_id) {
        if (this.current_id == new_id) {
            // Rewind to first slide
            this.set_slide(1);
            return;
        }
        if (this.current_id !== null) {
            this.set_state_inactive();
        }
        this.set_state_active(new_id);
    };

    this.set_slide = function(index) {
        // TODO
    };

    this.advance_right = function() {
        // TODO
        this.slide_id++;
    };

    this.advance_left = function() {
        // TODO
    };

    this.show_left_button = function() {
        return this.current_slide > 1;
    };

    this.show_right_button = function() {
        var max_id = this.config[this.current_id];
        return this.current_slide < max_id;
    };
};

