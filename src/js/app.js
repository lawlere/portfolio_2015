$(document).ready(function(){
    var m,
        config = {
            // id to number of slides
            "fitstar": 2,
            "glassbreakers": 3,
            "kubmo": 1,
        }
    ;

    m = new Mermaid(config);
    m.init("fitstar"); // Does event binding and stuff
});

