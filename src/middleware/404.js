'use strict';

/**This is a function
 * @param {String}
 * @param {String}
 * @param {Function}
 * 
 * @return {String} - Returns a 404 error status
 */

module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.status(404).json(error).end();
};
