const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET index', () => {
    it('it should return the movie list', (done) => {
        chai.request(app)
            .get('/index')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});
