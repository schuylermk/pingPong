describe('pingLoop', function() {
  it("will count/increment up from one, by one, until reaching user inputted number", function() {
    expect(pingLoop(2)).to.eql([1,2]);
  });
  it("will change any multiple of 3 to ping", function() {
    expect(pingLoop(3)).to.eql([1,2,"ping"]);
  });
  it("will change any multiple of 5 to pong", function () {
    expect(pingLoop(5)).to.eql([1,2,"ping",4,"pong"]);
  });
});



  //   expect(pingLoop(5)).to.eql([1,2,3,4,5]);
  // });
  // it("will change multiples of 15 to pingpong", function () {
  //   expect(pingLoop(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong"]);
  // });


  // });
