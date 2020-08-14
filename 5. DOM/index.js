require(["dojo/dom", "dojo/dom-construct", "dojo/on", "dojo/domReady!"],
    function(dom, domConstruct, on){
        var list = dom.byId("list");
        var one = dom.byId("one");
        var three = dom.byId("three");
        var four = dom.byId("four");
        var five = dom.byId("five");
        var topButton = dom.byId("moveToTheTop");
        var moveBeforeFiveButton = dom.byId("moveBeforeFive");
        var moveAfterOneButton = dom.byId("moveAfterOne");
        var replaceFourButton = dom.byId("replaceFour");
        var replaceAllButton = dom.byId("replaceAll");
        var moveToFifthPlaceButton = dom.byId("moveToFifthPlace");

        function moveToTheTop(){
            domConstruct.place(three, list, "first");
        }
        function moveBeforeFive(){
            domConstruct.place(three, five, "before");
        }
        function moveAfterOne(){
            domConstruct.place(three, one, "after");
        }
        function replaceFour(){
            domConstruct.place(three, four, "replace");
        }

        function replaceAll(){
            domConstruct.place(three, list, "only");
        }

        function moveToFifthPlace(){
            domConstruct.place(three, list, "4");
        }


        on(topButton, "click", moveToTheTop);
        on(moveBeforeFiveButton, "click", moveBeforeFive);
        on(moveAfterOneButton, "click", moveAfterOne);
        on(replaceFourButton, "click", replaceFour);
        on(replaceAllButton, "click", replaceAll);
        on(moveToFifthPlaceButton, "click", moveToFifthPlace);


    }
)