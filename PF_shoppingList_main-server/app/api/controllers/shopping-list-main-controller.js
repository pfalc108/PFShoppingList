"use strict";
const ShoppingListMainAbl = require("../../abl/shoppinglist-main-abl.js");

class ShoppingListMainController {
  init(ucEnv) {
    return ShoppingListMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return ShoppingListMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return ShoppingListMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new ShoppingListMainController();
