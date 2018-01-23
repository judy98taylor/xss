var router = require('koa-router')();

router.get('/', function *(next) {
  // set('X-XSS-Protection',0)
  yield this.render('index', {
    title: 'Hello World Koa!',
    xss: this.query.xss
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

module.exports = router;
