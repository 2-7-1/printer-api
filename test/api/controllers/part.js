var should = require('should');
var request = require('supertest');
var server = require('../../../app');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
describe('controllers', function () {
    describe('part', function () {
        describe('GET /part', function () {
            let part = {
                "id": "abd87218-49d1-11e8-842f-0ed5f89f718b",
                "materialType": "materialType1",
                "printerType": "printerType1",
                "orientationAngle": 25,
                "densityPercentage": 99
            };
            it('should return a list of parts', function (done) {
                request(server)
                    .get('/part')
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);
                        res.body.should.be.an.Array();
                        done();
                    });
            });
            it('should return a part by id', function (done) {
                request(server)
                    .get('/part/part1')
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);
                        done();
                    });
            });
            it('should post a part', function (done) {
                request(server)
                    .post('/part')
                    .send(part)
                    .expect({
                        success: 1,
                        message: "Part added to list"
                    }, done());
            });
            it('should put a part', function (done) {
                let part = {
                    "id": "abd87218-49d1-11e8-842f-0ed5f89f718b",
                    "materialType": "materialType1",
                    "printerType": "printerType1",
                    "orientationAngle": 25,
                    "densityPercentage": 99
                };
                request(server)
                    .put('/part')
                    .send(part)
                    .expect({
                        success: 1,
                        message: "Part updatedz"
                    }, done())
            });
            it('should delete a part', function (done) {
                request(server)
                    .delete('/part/noname')
                    .send(part)
                    .expect({
                        success: 0,
                        message: "Part not found"
                    }, done())
            });
        });
    });
})