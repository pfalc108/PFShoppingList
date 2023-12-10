//@@viewOn:imports
import { createVisualComponent, useState } from "uu5g05";
import Config from "./config/config.js";
import Uu5TilesElements from "uu5tilesg02-elements";
import Uu5Elements from "uu5g05-elements";
import CreateForm from "./create-form.js";
import shoppingList from "../../routes/shopping-list";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ListTile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListTile",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { a } = Uu5Elements.useSpacing();
    const { data } = props;
    const handleDelete = (e) => {
      let newListData = props.listdata;
      newListData = newListData.filter(obj => obj.id !== e.data.id);
      props.setData(newListData);
    }

    const handleRename = (e) => {
      let newListData = props.listdata;
      newListData = newListData.filter(obj => obj.id !== e.data.id);
      props.setData(newListData);
    }

    const ownership = (props,data) => {
      if (data.data.uuOwnerIdentityName === props.user.name) {
        return               [{
            icon: "uugds-pencil",
            onClick: () => setOpen(true),
          },
          {
            icon: "uugds-delete",
            onClick: () => setOpen2(true),
          }];
      } else {
        return [];
      }
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
      <Uu5TilesElements.Tile
          header={<>
            {data.data.name}
          </>}
          actionList={ownership(props,data)}
          displayActionList={true}
      >
          <Uu5Elements.Text
            significance="subdued"
            colorScheme="building"
            category="story"
            segment="body"
            type="minor"
          >
            Owner:{' '}
          </Uu5Elements.Text>
          <Uu5Elements.Text
            category="story"
            segment="body"
            type="minor"
            className={Config.Css.css({ justifySelf: "start" })}
          >
            {data.data.uuOwnerIdentityName}
          </Uu5Elements.Text>
          <Uu5Elements.Text
            significance="subdued"
            colorScheme="building"
            category="story"
            segment="body"
            type="minor"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Archived:{' '}
          </Uu5Elements.Text>
          <Uu5Elements.Text
            category="story"
            segment="body"
            type="minor"
            className={Config.Css.css({ justifySelf: "start" })}
          >
            {data.data.archived.toString()}
          </Uu5Elements.Text>
          <CreateForm open={open} onClose={() => setOpen(false)} listdata={ props.listdata } user={props.user} itemId={props.shoppingListDataList.data.id} defaultText={props.shoppingListDataList.data.name} header={"Rename shopping list"} />
          <Uu5Elements.Dialog
            open={open2}
            onClose={() => setOpen2(false)}
            header={"Delete this shopping list?"}
            icon={<Uu5Elements.Svg code="uugdssvg-svg-delete" />}
            info={data.data.name}
            actionDirection="horizontal"
            actionList={[
              {
                children: "Cancel",
                onClick: () => console.log("Cancel"),
              },
              {
                children: "Delete",
                onClick: (e) => {props.data.handlerMap.delete()},
                colorScheme: "red",
                significance: "highlighted",
              },
            ]}
          />
      </Uu5TilesElements.Tile>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListTile };
export default ListTile;
//@@viewOff:exports
