"use strict";
const PFShoppingListMainAbl = require("../../abl/pfshoppinglist-main-abl.js");

class PFShoppingListMainController {
  init(ucEnv) {
    return PFShoppingListMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return PFShoppingListMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return PFShoppingListMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new PFShoppingListMainController();
