const expect = chai.expect

describe("random", function () {
  it("is a number", function () {
     expect(random()).to.be.a('number');
  })
})
