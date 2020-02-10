exports.min = (array = []) => array.sort((a, b) => a - b)[0] || 0;

exports.max = (array = []) => array.sort((a, b) => b - a)[0] || 0;

exports.avg = (array = []) => array.reduce((acc, cur) => acc + cur, 0) / array.length || 0;
