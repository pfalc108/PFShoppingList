//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import Uu5TilesElements from "uu5tilesg02-elements";
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
    const { data, ...otherProps } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5TilesElements.Tile header={<>
          {data.name}
          <Uu5Elements.Button size="xs" icon="mdi-delete" />
        </>
        }>
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
            {data.owner.name}
          </Uu5Elements.Text>
      </Uu5TilesElements.Tile>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListTile };
export default ListTile;
//@@viewOff:exports
