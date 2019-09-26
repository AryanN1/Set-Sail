/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: 'string',
    password: 'string',
    groups: {
      collection: 'group'
    }
  }
};
//sails.config.models.migrate='drop';