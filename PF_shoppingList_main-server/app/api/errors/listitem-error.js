"use strict";

const ShoppingListMainUseCaseError = require("./shoppinglist-main-use-case-error.js");
const LISTITEM_ERROR_PREFIX = `${ShoppingListMainUseCaseError.ERROR_PREFIX}listitem/`;

const ListItemCreate = {
  UC_CODE: `${LISTITEM_ERROR_PREFIX}listItemCreate/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListItemCreate.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const ListItemGet = {
  UC_CODE: `${LISTITEM_ERROR_PREFIX}listItemGet/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListItemGet.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const ListItemList = {
  UC_CODE: `${LISTITEM_ERROR_PREFIX}listItemList/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListItemList.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const ListItemUpdate = {
  UC_CODE: `${LISTITEM_ERROR_PREFIX}listItemUpdate/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListItemUpdate.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const ListItemDelete = {
  UC_CODE: `${LISTITEM_ERROR_PREFIX}listItemDelete/`,

  InvalidDtoIn: class extends ShoppingListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListItemDelete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

module.exports = {
  ListItemDelete,
  ListItemUpdate,
  ListItemList,
  ListItemGet,
  ListItemCreate
};
