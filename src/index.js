exports.min = (array = []) => array.length > 0 ? Math.min(...array) : 0;

exports.max = (array = []) => array.length > 0 ? Math.max(...array) : 0;

exports.avg = (array = []) => array.reduce((acc, cur) => acc + cur, 0) / array.length || 0;
