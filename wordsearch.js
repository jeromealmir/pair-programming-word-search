const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
    
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
    
  const vertical = [];

  for (let row = 0; row < letters[0].length; row++) {
    let found = [];
    for (let column = 0; column < letters.length; column++) {
      found.push(letters[column][row]);
    }
    vertical.push(found.join(''));
  }

  for (const v of vertical) {
    if (v.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;