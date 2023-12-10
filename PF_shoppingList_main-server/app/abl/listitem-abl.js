"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/listitem-error.js");

const WARNINGS = {
  listItemCreateUnsupportedKeys: {
    code: `${Errors.ListItemCreate.UC_CODE}unsupportedKeys`,
  },
  listItemGetUnsupportedKeys: {
    code: `${Errors.ListItemGet.UC_CODE}unsupportedKeys`,
  },
  listItemListUnsupportedKeys: {
    code: `${Errors.ListItemList.UC_CODE}unsupportedKeys`,
  },
  listItemUpdateUnsupportedKeys: {
    code: `${Errors.ListItemUpdate.UC_CODE}unsupportedKeys`,
  },
  listItemDeleteUnsupportedKeys: {
    code: `${Errors.ListItemDelete.UC_CODE}unsupportedKeys`,
  }
};

class ListitemAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("listitem");
  }

  async listItemDelete(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("listItemDeleteDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.listItemDeleteUnsupportedKeys.code,
      Errors.ListItemDelete.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async listItemUpdate(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("listItemUpdateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.listItemUpdateUnsupportedKeys.code,
      Errors.ListItemUpdate.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async listItemList(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("listItemListDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.listItemListUnsupportedKeys.code,
      Errors.ListItemList.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async listItemGet(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("listItemGetDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.listItemGetUnsupportedKeys.code,
      Errors.ListItemGet.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async listItemCreate(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("listItemCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.listItemCreateUnsupportedKeys.code,
      Errors.ListItemCreate.InvalidDtoIn
    )
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

}

module.exports = new ListitemAbl();
