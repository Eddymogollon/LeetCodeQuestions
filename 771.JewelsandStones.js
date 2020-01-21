/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let counter = 0;
    const jewelsMap = {};
    J.split('').forEach(jewel => {
      if (!jewelsMap[jewel]) {
        jewelsMap[jewel] = true;
      }
    })

  const Sarr = S.split(''); 

  S.split('').forEach(i => {
    if (jewelsMap[i]) {
      counter++;
    }
  });
  return counter;
};
