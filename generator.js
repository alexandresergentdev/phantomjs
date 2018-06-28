var args = require('system').args;
var page = require('webpage').create();

var url = args[1];

page.viewportSize = { width: 500, height: 500 };

page.open(url, function () {
    page.render('save.png');
    phantom.exit();
});
