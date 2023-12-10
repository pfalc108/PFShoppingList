"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/shoppinglist-error.js");

const WARNINGS = {
  shoppingListCreateUnsupportedKeys: {
    code: `${Errors.ShoppingListCreate.UC_CODE}unsupportedKeys`,
  },
  shoppingListGetUnsupportedKeys: {
    code: `${Errors.ShoppingListGet.UC_CODE}unsupportedKeys`,
  },
  shoppingListListUnsupportedKeys: {
    code: `${Errors.ShoppingListList.UC_CODE}unsupportedKeys`,
  },
  shoppingListUpdateUnsupportedKeys: {
    code: `${Errors.ShoppingListUpdate.UC_CODE}unsupportedKeys`,
  },
  shoppingListDeleteUnsupportedKeys: {
    code: `${Errors.ShoppingListDelete.UC_CODE}unsupportedKeys`,
  }
};

class ShoppinglistAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("shoppinglist");
  }

  async shoppingListDelete(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListDeleteDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.shoppingListDeleteUnsupportedKeys.code,
      Errors.ShoppingListDelete.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async shoppingListUpdate(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListUpdateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.shoppingListUpdateUnsupportedKeys.code,
      Errors.ShoppingListUpdate.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async shoppingListList(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListListDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.shoppingListListUnsupportedKeys.code,
      Errors.ShoppingListList.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async shoppingListGet(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListGetDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.shoppingListGetUnsupportedKeys.code,
      Errors.ShoppingListGet.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async shoppingListCreate(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListCreateDtoInType", dtoIn);
    console.log("NULTY");
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.shoppingListCreateUnsupportedKeys.code,
      Errors.ShoppingListCreate.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

}

module.exports = new ShoppinglistAbl();
