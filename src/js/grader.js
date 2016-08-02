(function() {
  console.log('sanity check!');

}());

function letterGrader(num) {
  if (num >= 98) {
    return 'A+';
  } else if (num >= 92) {
    return 'A';
  } else if (num >= 90) {
    return 'A-';
  } else if (num >= 88) {
    return 'B+';
  } else if (num >= 82) {
    return 'B';
  } else if (num >= 80) {
    return 'B-';
  } else if (num >= 78) {
    return 'C+';
  } else if (num >= 72) {
    return 'C';
  } else if (num >= 70) {
    return 'C-';
  } else if (num >= 68) {
    return 'D+';
  } else if (num >= 62) {
    return 'D';
  } else if (num >= 60) {
    return 'D-';
  } else if (num >= 58) {
    return 'F+';
  } else if (num >= 52) {
    return 'F';
  } else if (num < 52) {
    return 'F-';
  } else {
    return 'Please enter a number from 0-100';
  }
}

function averageScore(arr) {
  var scoreTotal = 0;
  for (var i = 0; i < arr.length; i++) {
    scoreTotal += parseInt(arr[i]);
  }
  return Math.round((scoreTotal/arr.length));
}

function medianScore(arr) {
  var sortedScores = arr.sort(function (a, b) {
    return a-b;
  });

  var middleIndex = (Math.floor(sortedScores.length / 2))

  if (sortedScores.length % 2 === 0) {
    var middleScoreSum = sortedScores[middleIndex] + sortedScores[middleIndex - 1];
    return middleScoreSum/2;
  } else {
    return sortedScores[middleIndex];
  };

};

function modeScore(arr) {
/*

{
  value: count
}

*/

  var currentCount = {};
  var topCount = 0;
  var topKey = {};
  arr.forEach(function(i, val) {
    currentCount[i] = currentCount[i] + 1 || 1;
    if (currentCount[i] > topCount) {
      topKey = i;
      topCount = currentCount[i];
    }
  });

  return topKey;
}
