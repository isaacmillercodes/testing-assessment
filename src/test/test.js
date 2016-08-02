var expect = chai.expect;
// var should = chai.should();

// sample!
// describe('Compare Numbers', function() {
//   it('1 should equal 1', function() {
//     expect(1).to.equal(1);
//   });
// });

describe('letterGrader', function() {
  it('Number score should return letter grade', function() {
    expect(letterGrader(95)).to.equal('A');
    expect(letterGrader(82)).to.equal('B');
    expect(letterGrader(74)).to.equal('C');
  });

  it('Scores should include a + or - for appropriate grades', function() {
    expect(letterGrader(98)).to.equal('A+');
    expect(letterGrader(81)).to.equal('B-');
    expect(letterGrader(69)).to.equal('D+');
  });
});

describe('averageScore', function() {
  it('Should return average of scores in array', function() {
    expect(averageScore([90, 95, 87, 60])).to.equal(83);
    expect(averageScore([93, 88, 74, 82])).to.equal(84);
    expect(averageScore([81, 77, 68, 75])).to.equal(75);
  });
});

describe('medianScore', function() {
  it('Should return median of scores in array', function() {
    expect(medianScore([52,80,80,86,94])).to.equal(80);
    expect(medianScore([60,70,81,83,88,98])).to.equal(82);
    expect(medianScore([90,80,88,81,93])).to.equal(88);
  });
});

describe('modeScore', function() {
  it('Should return mode of scores in array', function() {
    expect(modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).to.equal(92);
    expect(modeScore([70, 88, 74, 82, 74, 83])).to.equal(74);
    expect(modeScore([90, 94, 88, 89, 90, 85, 90, 88])).to.equal(90);
  });
});
