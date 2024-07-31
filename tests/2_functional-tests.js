const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');
const puzzle = require('../controllers/puzzle-strings')
chai.use(chaiHttp);

suite('Functional Tests', () => {
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
    test('Solve a puzzle with valid puzzle string: POST request to /api/solve', function (done) {
        chai
          .request(server)
          .post('/api/solve')
          .send({puzzle: puzzle.puzzlesAndSolutions[0][0]})
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.solution, "135762984946381257728459613694517832812936745357824196473298561581673429269145378");
            done();
          });
    });
});

