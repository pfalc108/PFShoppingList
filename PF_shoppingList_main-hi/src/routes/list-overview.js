//@@viewOn:imports
import { createVisualComponent, useState, useSession, useScreenSize, useDataList } from "uu5g05";
import Config from "./config/config.js";
import { withRoute } from "uu_plus4u5g02-app";
import { RouteBar } from "../core/route-bar.js";
import { Overview1 } from "../bricks/list-overview/overview.js";
import Uu5Elements from "uu5g05-elements";
import Calls from "calls";
//@@viewOff:imports

//@@viewOn:constants
const user = {
  name: "Emily Smith"
}
//@@viewOff:constants

//@@viewOn:css
const Css = {
  container: (screenSize) => {
    let maxWidth;

    switch (screenSize) {
      case "xs":
      case "s":
        maxWidth = "100%";
        break;
      case "m":
      case "l":
        maxWidth = 640;
        break;
      case "xl":
      default:
        maxWidth = 1280;
    }

    return Config.Css.css({ maxWidth: maxWidth, margin: "0px auto", paddingLeft: 8, paddingRight: 8 });
  },
  createView: () => Config.Css.css({ margin: "24px 0px" }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let ListOverview = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListOverview",
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
    const [screenSize] = useScreenSize();
    const shoppingListDataList = useDataList({
      handlerMap: {
        load: handleLoad,
        loadNext: handleLoadNext,
        create: handleCreate,
      },
      itemHandlerMap: {
        update: handleUpdate,
        delete: handleDelete,
      },
      pageSize: 3,
    });
    const { state, data, newData, errorData, pendingData, handlerMap } = shoppingListDataList;
    const listdata = data;
    function handleLoad(dtoIn) {
      return Calls.shoppingList.list(dtoIn);
    }

    function handleLoadNext(dtoIn) {
      return Calls.shoppingList.list(dtoIn);
    }

    function handleCreate(dtoIn) {
      return Calls.shoppingList.create(dtoIn);
    }

    async function handleUpdate() {
      throw new Error("Shopping list update is not implemented yet.");
    }

    function handleDelete(shoppinglist) {
      console.log(shoppinglist);
      const dtoIn = { id: shoppinglist.id };
      return Calls.shoppingList.delete(dtoIn, props.baseUri);
    }

    let result;
    switch(shoppingListDataList.state) {
      case "pendingNoData":
        result = <Uu5Elements.Pending size="max" />;
        break;
      case "error":
        result = <Uu5Elements.Alert header="Cannot create shopping list" priority="error" />;
        break;
      case "errorNoData":
        result = <Uu5Elements.Alert header="Data about shopping lists cannot be loaded" priority="error" />;
        break;
      default:
        result = <Overview1 listdata={listdata} shoppingListDataList={shoppingListDataList} user={user} />;
        break;
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <>
        <div className={Css.container(screenSize)}>
        <RouteBar />
        {result}
        </div>
      </>
    );
    //@@viewOff:render
  },
});

ListOverview = withRoute(ListOverview, { authenticated: true });

//@@viewOn:exports
export { ListOverview };
export default ListOverview;
//@@viewOff:exports
