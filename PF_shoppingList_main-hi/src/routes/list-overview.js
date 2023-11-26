//@@viewOn:imports
import { createVisualComponent, useState } from "uu5g05";
import Config from "./config/config.js";
import { withRoute } from "uu_plus4u5g02-app";
import { RouteBar } from "../core/route-bar.js";
import { Overview1 } from "../bricks/list-overview/overview.js";
//@@viewOff:imports

//@@viewOn:constants
const TestData = [
  {
      id: 1,
      name: "Prvni nakupni seznam",
      owner: {
              name: "Martin"
          },
      member: [
          {
              name: "Martin"
          },
          {
              name: "Oto"
          }
      ],
      archived: true
  },
  {
      id: 2,
      name: "Druhy nakupni seznam",
      owner: {
            name: "Martin"
      },
      member: [
          {
              name: "Martin"
          }
      ],
      archived: false
  }
]
const user = {
  name: "Oto"
}
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
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
    const [listdata, setData] = useState(TestData);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <>
        <RouteBar />
        <Overview1 listdata={listdata} setData={setData} user={user} />
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
