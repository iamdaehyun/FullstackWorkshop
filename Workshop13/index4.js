//compares two sets of two values.
//Print true if at least one of the pairs is truthy.
function pairs(set1, set2) {
  if (set1[0] === set1[1] || set2[0] === set2[1]) {
    console.log("true");
  } else {
    console.log("false");
  }
}

const values = [
  [
    ["cat", "cat"],
    [6, "6"],
  ],
  [
    ["five", 5],
    ["dog", "dawg"],
  ],
  [
    [0, false],
    ["horse", "horse"],
  ],
];

for (let i = 0; i < values.length; i++) {
  pairs(values[i][0], values[i][1]);
}
