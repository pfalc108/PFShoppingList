"use strict";
const ShoppinglistAbl = require("../../abl/shoppinglist-abl.js");

class ShoppinglistController {

  listItemCreate(ucEnv) {
    return ShoppinglistAbl.listItemCreate(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  shoppingListItemCreate(ucEnv) {
    return ShoppinglistAbl.shoppingListItemCreate(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  shoppingListDelete(ucEnv) {
    return ShoppinglistAbl.shoppingListDelete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  shoppingListUpdate(ucEnv) {
    return ShoppinglistAbl.shoppingListUpdate(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  shoppingListList(ucEnv) {
    return ShoppinglistAbl.shoppingListList(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  shoppingListGet(ucEnv) {
    return ShoppinglistAbl.shoppingListGet(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  shoppingListCreate(ucEnv) {
    return ShoppinglistAbl.shoppingListCreate(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new ShoppinglistController();
