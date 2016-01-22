 var  express = require('express'),
      assert = require('assert'),
      port = 3002,
      superagent = require('superagent'),
      expect = require('expect.js'),
      app = express(),
      server;

  //C test
  describe('Test Case 1', function () {
    this.timeout(10000);
    it('return test user if connect successfully', function(done){
      var prev_total, curr_total;
      superagent.post('http://localhost:3000/examples/sample/getSampleData')
      // superagent.get('http://localhost:3002/examples/test/insertTestView')
      .end(function(err, res){
        console.log(res);
        // prev_total = JSON.parse(res.text).total_rows;
        // console.log("Before inserting data, total rows = " + prev_total);
        done();
      });

      /*superagent.get('http://localhost:3002/examples/test/insertTestData')
      .end(function(err, res){
       assert.equal(res.status, 200);
        curr_total = JSON.parse(res.text).total_rows;
        console.log("After insertion, total rows = " + curr_total);
        assert.equal(prev_total + 1, curr_total);
        done();
      })*/
    });
  });

  //R test
  describe('Get Test Data (currently key and revsion values only)', function(done){

  })