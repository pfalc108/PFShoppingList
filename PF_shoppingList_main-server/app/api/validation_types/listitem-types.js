/* eslint-disable */

const listItemCreateDtoInType = shape({
  name: uu5String(255).isRequired(),
  checked: boolean()
});

const listItemGetDtoInType = shape({
  id: id().isRequired()
});

const listItemListDtoInType = shape({
  checked: boolean(),
  pageInfo: shape({
    pageIndex: integer().isRequired(),
    pageSize: integer().isRequired()
  })
});

const listItemUpdateDtoInType = shape({
  id: id().isRequired(),
  name: uu5String(255).isRequired(),
  checked: boolean()
});

const listItemDeleteDtoInType = shape({
  id: id().isRequired()
});
