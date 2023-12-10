"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ShoppinglistMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = ShoppinglistMongo;
