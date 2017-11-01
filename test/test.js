casper = require('casper').create();
casper.start('http://casperjs.org/');

casper.start('http//:google.com', function(){
    // this.echo(messageToPrint, style)
    this.echo(this.getTitle, 'INFO')
});

casper.run();
console.log("Hello PhantomJS")


casper.test.begin('Testing my forms',3, function(test) {
  casper.start('http://amazon.com', function() {
    this.fill('form#nav-searchbar', {
      'field-keywords': 'javascript'
    }, true);
  });

  casper.then(function() {
    test.assertTitle('Amazon.com: javascript', 'Amazon search results page doesnt have expected title');
  });

  casper.run(function() {
    test.done();
  });
});
