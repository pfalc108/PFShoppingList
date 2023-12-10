"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ListitemMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = ListitemMongo;
