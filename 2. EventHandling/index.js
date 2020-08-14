require(["dojo/dom", "dojo/on", "dojo/mouse", "dojo/dom-style", "dojo/domReady!"],
    function(dom, on, mouse, domStyle){
        var showButton = dom.byId("showDiv");
        var hideButton = dom.byId("hideDiv");
        var div = dom.byId("myDiv");
        var domStyleDiv = dom.byId("domStyle");


        // on(div, "mouseenter", function(event){
        //     div.innerHTML = "Move mouse pointer away to change color to white";
        //     div.style.background = "yellow";
        // });

        // on(div, "mouseleave", function(event){
        //     div.style.background = "white";
        //     div.innerHTML = "Mouse over to change my background to yellow";
        // });


        // on(hideButton, "click", function(event){
        //     div.style.display = "none";
        // });

        //Handle only once
        on.once(showButton, "click", function(event){
            if(div.style.display == "none")
                div.style.display = "block";

            var styles = domStyle.getComputedStyle(domStyleDiv);
            domStyleDiv.innerHTML = "Width id " + styles.width + " height is " + styles.height;
        });

        // With dojo/mouse
        var mouseEnterHandle = on(div, mouse.enter, function(event){
            domStyle.set(div, "width", "250px");
            div.innerHTML = "Move mouse pointer away to change color to white; width is " +
            domStyle.get(div, "width");
            div.style.background = "yellow";
            // Remove handler
            mouseEnterHandle.remove();
        });

        on(div, mouse.leave, function(event){
            div.style.background = "white";
            div.innerHTML = "Mouse over to change my background to yellow";
        });

        on(hideButton, "mousedown", function(event){
            if(mouse.isLeft(event)){
                alert('mouse left button clicked');
                div.style.display = "none";
            }else if(mouse.isRight(event)){
                alert('mouse right button clicked');
            }
        });



    }
)