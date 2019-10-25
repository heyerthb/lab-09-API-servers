'use strict';

/**This is a function
 * @param {String}
 * @param {String}
 * @param {String}
 * @param {Function}
 * 
 * @return {String} - Returns a 500 error status
 */

module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};
