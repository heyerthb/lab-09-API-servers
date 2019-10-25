'use strict';

class Model {

  constructor(schema) {
    this.schema = schema;
  }
/**This is a function
 * @return {Object} - This returns data as a json object
 */
  jsonSchema() {
    console.log(typeof this.schema.jsonSchema);
    return typeof this.schema.jsonSchema === 'function'
      ? this.schema.jsonSchema()
      : {};
  }

  /**This is a function
 * @param {Any} - Takes in the id
 * @returns {Object} - Returns an object with the matching id
 */
  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  /**This is a function
 * @param {Object} - Takes in an instance of a record object
 * @returns {Object} - Returns a saved object
 */
  create(record) {
    console.log('r',record);
    let newRecord = new this.schema(record);
    console.log('n', newRecord);
    return newRecord.save();
  }

  /**This is a function
 * @param {Any} - Takes in an id
 * @param {Object} - Takes in an object record
 * @returns {Object} - Returns an updated  record object
 */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  /**This is a function
 * @param {Any} - Takes in an id
 * @returns {Any} - Returns a 200 status
 */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
