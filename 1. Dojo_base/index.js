dojo.ready(
    function(){
        // var elId = dojo.byId("test");
        var elId = dojo.query("#test");
        console.log(elId[0].innerHTML);
        elId[0].innerHTML = "test Hello";

        console.log(dojo.query('.testClass'))
        console.log(dojo.query('[name="testName"]'))
        console.log(dojo.query('[name^="test"]'))

        console.log(dojo.query('h1'))

        console.log(dojo.query('div > a'))

    }
);