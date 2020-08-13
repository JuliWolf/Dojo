require(["dojo/dom", "dojo/on", "dojo/domReady!"], function(dom, on){
    var showButton = dom.byId("showDiv");
    var hideButton = dom.byId("hideDiv");
    var div = dom.byId("myDiv");


    on(div, "mouseenter", function(event){
        div.innerHTML = "Move mouse pointer away to change color to white";
        div.style.background = "yellow";
    });

    on(div, "mouseleave", function(event){
        div.style.background = "white";
        div.innerHTML = "Mouse over to change my background to yellow";
    });

    on(hideButton, "click", function(event){
        div.style.display = "none";
    });

    on(showButton, "click", function(event){
        div.style.display = "block";
    });
})