"use strict";

const ShoppingListMainUseCaseError = require("./shoppinglist-main-use-case-error.js");
const SHOPPINGLIST_ERROR_PREFIX = `${ShoppingListMainUseCaseError.ERROR_PREFIX}shoppinglist/`;

const ShoppingListCreate = {
  UC_CODE: `${SHOPPINGLIST_ERROR_PREFIX}shoppingListCreate/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ShoppingListCreate.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const ShoppingListGet = {
  UC_CODE: `${SHOPPINGLIST_ERROR_PREFIX}shoppingListGet/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ShoppingListGet.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const ShoppingListList = {
  UC_CODE: `${SHOPPINGLIST_ERROR_PREFIX}shoppingListList/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ShoppingListList.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const ShoppingListUpdate = {
  UC_CODE: `${SHOPPINGLIST_ERROR_PREFIX}shoppingListUpdate/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ShoppingListUpdate.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const ShoppingListDelete = {
  UC_CODE: `${SHOPPINGLIST_ERROR_PREFIX}shoppingListDelete/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ShoppingListDelete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

module.exports = {
  ShoppingListDelete,
  ShoppingListUpdate,
  ShoppingListList,
  ShoppingListGet,
  ShoppingListCreate
};
