//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import { Text, Box } from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Owner = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Owner",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Box style={{ width: 640, margin: "24px auto" }}>
        <Text category="interface" segment="title" type="minor" colorScheme="building">
          Owner: Petr Falc
        </Text>
      </Box>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Owner };
export default Owner;
//@@viewOff:exports
