require(["dojo/dom", "dojo/on", "dojo/topic", "dojo/domReady!"],
    function(dom, on, topic){
        var btn1 = dom.byId("one");
        var testNode = dom.byId("testNode");

        topic.subscribe("test/topic", function(first, second){
            alert(first + " " +  second)
        });

        topic.subscribe("test/topic", function(first, second, third){
            testNode.innerHTML = "I received the value: " + first + " " +  second + " " + third;
        })

        on(btn1, "click", function(){
            topic.publish("test/topic", "Testing", "testingAgain", "testingSame")
        })
    }
)