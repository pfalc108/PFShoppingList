//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import { Tile, Button, Text } from "uu5g05-elements";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Detail = createVisualComponent({
  render(props) {
    const { a } = Uu5Elements.useSpacing();
    const { isMobileOrTabet } = true //useDevice();

    return (
      <>
        <Tile
        header={
          <div
            className={Config.Css.css({
              display: "grid",
              gridTemplateColumns: "min-content min-content",
              alignItems: "center",
              columnGap: "8px",
            })}
          >{props.name}
          </div>
        }
        actionList={[
          {
            icon: "uugds-pencil",
            collapsedChildren: "Rename",
            onClick: (e) => alert("rename"),
          },
          {
            icon: "uugds-delete",
            collapsedChildren: "Delete",
            onClick: (e) => alert("delete"),
          },
        ]}
        displayActionList={true}
        >
            <img
              src="https://cdn.plus4u.net/uu-plus4u5g01/4.0.0/assets/img/anonymous.png"
              className={Config.Css.css({
                objectFit: "cover",
                height: 24,
                borderRadius: "50%",
                justifySelf: "end",
              })}
            />
        </Tile>
      </>
    );
  },
});

//@@viewOn:exports
export { Detail };
export default Detail;
//@@viewOff:exports
