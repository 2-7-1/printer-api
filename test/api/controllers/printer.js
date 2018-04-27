var should = require('should');
var request = require('supertest');
var server = require('../../../app');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
describe('controllers', function () {
    describe('printer', function () {
        describe('GET /printer', function () {
            it('should return a printer queue', function (done) {
                request(server)
                    .get('/printer')
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);
                        res.body.should.be.an.Array();
                        done();
                    });
            });
            it('should post a part to printer queue', function (done) {
                request(server)
                    .post('/part')
                    .send({
                        id: "4d0bdafa-49fd-11e8-842f-0ed5f89f718b"
                    })
                    .expect({
                        success: 1,
                        message: "Part sent to printer"
                    }, done())
            });
        });
    });
})