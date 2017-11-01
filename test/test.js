//casper = require('casper').create();
//casper.start('http://casperjs.org/');

// casper.start('http//:google.com', function(){
//     // this.echo(messageToPrint, style)
//     this.echo(this.getTitle, 'INFO')
// });
//
// casper.run();
// console.log("Hello PhantomJS")


casper.test.begin('Testing my site',2, function(test) {
  casper.start('http://initiativeapp.surge.sh/');
  casper.then(function() {
       test.assertExists('form#form1')
  });

  casper.then(function(){
    test.assertTitle('Initative tracker', 'Has correct title')
  })
  casper.run(function(){
    test.done()
  });
})
