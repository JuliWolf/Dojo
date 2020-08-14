require(["dojo/dom", "dojo/on", "dojo/mouse", "dojo/domReady!"],
    function(dom, on, mouse){
        var enableButton = dom.byId('enable');
        var disableButton = dom.byId('disable');
        var clickButton = dom.byId('clickMe');

        // Stop events handling
        var buttonHandler = on.pausable(clickButton, "click", function(e){
            alert('I am clickable');
            on(disableButton, "click", function(el){
                buttonHandler.pause();
            });

            on(enableButton, "click", function(el){
                buttonHandler.resume();
            });
        })
    }
)