//@@viewOn:imports
import { createComponent, Utils, useState } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import Uu5Tiles from "uu5tilesg02";
import Uu5TilesControls from "uu5tilesg02-controls";
import Uu5TilesElements from "uu5tilesg02-elements";
import ListTile from "./list-tile.js";
import CreateForm from "./create-form.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Overview1 = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Overview1",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ listdata, setData, user }) {

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const [activeFilterList, setActiveFilterList] = useState([{ key: "archived", value: [true] }]);
    const DATA = listdata;
    const FILTER_DEFINITION_LIST = [
      {
        key: "archived",
        label: "Hide archived",
        filter: (item, value) => {
          if (value) {
            let itemArchived = typeof item.archived === "object" ? Utils.Language.getItem(item.archived) : item.archived;
            return !itemArchived;
          }
          return true;
        },
        inputType: "bool",
      },
    ];

    const SERIE_LIST = [
      { value: "name", label: "Název:" },
      { value: "owner", label: "Vlastník:" },
    ];

    const [open, setOpen] = useState(false);

    return (
    <>
      {/* Controller provider for filtering Shopping Lists */}
      <Uu5Tiles.ControllerProvider
        data={DATA}
        filterDefinitionList={FILTER_DEFINITION_LIST}
        filterList={activeFilterList}
        onFilterChange={(e) => setActiveFilterList(e.data.filterList)}
        serieList={SERIE_LIST}
      >
          {/* Top bar with Create new shop list button */}
          <Uu5Elements.Box>
              <Uu5Elements.Button onClick={() => setOpen(true)} size="xs" icon="mdi-plus-box">Create new shopping list</Uu5Elements.Button>
              <CreateForm open={open} onClose={() => setOpen(false)} listdata={ listdata } setData={ setData } user={user} itemId={0} defaultText="" header="Create new shopping list" />
          </Uu5Elements.Box>

          {/* Grid to display Shopping Lists including Filter for non-Archived only */}
          <Uu5Elements.Block actionList={[{ component: <Uu5TilesControls.FilterButton type="bar" displayType="button" /> }]}>
              <Uu5TilesControls.FilterBar initialExpanded />
              <Uu5TilesControls.FilterManagerModal />
              <Uu5TilesElements.Grid
                  rowSpacing={8}
                  tileHeight={300}
                  tileMinWidth={400}
                  tileMaxWidth={800}
                  tileSpacing={8}
              >
                  <ListTile listdata={ listdata } setData={ setData } user={ user } />
              </Uu5TilesElements.Grid>
          </Uu5Elements.Block>
      </Uu5Tiles.ControllerProvider>
    </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Overview1 };
export default Overview1;
//@@viewOff:exports
