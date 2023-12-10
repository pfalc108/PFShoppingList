"use strict";
const ListitemAbl = require("../../abl/listitem-abl.js");

class ListitemController {

  listItemDelete(ucEnv) {
    return ListitemAbl.listItemDelete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listItemUpdate(ucEnv) {
    return ListitemAbl.listItemUpdate(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listItemList(ucEnv) {
    return ListitemAbl.listItemList(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listItemGet(ucEnv) {
    return ListitemAbl.listItemGet(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listItemCreate(ucEnv) {
    return ListitemAbl.listItemCreate(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new ListitemController();
