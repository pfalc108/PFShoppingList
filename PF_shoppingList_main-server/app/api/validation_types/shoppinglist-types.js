/* eslint-disable */

const shoppingListCreateDtoInType = shape({
  name: uu5String(255).isRequired(),
  itemIdList: array(id(), 0, 10),
  uuMemberIdentityList: array(uuIdentity(), 0, 10),
  uuMemberIdentityNameList: array(uu5String(), 0, 10)
});

const shoppingListGetDtoInType = shape({
  id: id().isRequired()
});

const shoppingListListDtoInType = shape({
  archived: boolean().isRequired(),
  pageInfo: shape({
    pageIndex: integer().isRequired(),
    pageSize: integer().isRequired()
  })
});

const shoppingListUpdateDtoInType = shape({
  id: id().isRequired(),
  name: uu5String(255),
  itemIdList: array(id(), 0, 10),
  uuMemberIdentityList: array(uuIdentity(), 0, 10),
  uuMemberIdentityNameList: array(uu5String(), 0, 10)
});

const shoppingListDeleteDtoInType = shape({
  id: id().isRequired()
});
