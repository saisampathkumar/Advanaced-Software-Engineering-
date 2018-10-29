var request = require('request');
module.exports = function(app) {
    var url = 'http://www.hipaaspace.com/api/ndc/search?&rt=json&token=3932f3b0-cfab-11dc-95ff-0800200c9a663932f3b0-cfab-11dc-95ff-0800200c9a66&q=';
    app.get('/api/rxlist', function(req, res) {
        url = url+req.query.q;
        request.get(url).pipe(res);
        //console.log(res);
    });
}