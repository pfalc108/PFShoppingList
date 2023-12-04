//@@viewOn:imports
import { createVisualComponent, Utils, Content, useSession, useScreenSize } from "uu5g05";
import Config from "./config/config.js";
import Uu5TilesElements from "uu5tilesg02-elements";
import Uu5Elements from "uu5g05-elements";
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
    const { data, ...otherProps } = props;
    const handleDelete = (e) => {
      let newListData = props.listdata;
      console.log(e)
      console.log(newListData)
      newListData = newListData.filter(obj => obj.id !== e.data.id);
      console.log(newListData)
      props.setData(newListData);
    }    
    const handleRename = (e) => {
      let newListData = props.listdata;
      console.log(e)
      console.log(newListData)
      newListData = newListData.filter(obj => obj.id !== e.data.id);
      console.log(newListData)
      props.setData(newListData);
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5TilesElements.Tile 
          header={<>
            {data.name}
          </>} 
          actionList={[
            {
              icon: "uugds-pencil",
              onClick: (e) => {handleDelete(props)},
            },
            {
              icon: "uugds-delete",
              onClick: (e) => {handleRename(props)},
            }
          ]}
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
            {data.owner.name}
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
            {data.archived.toString()}
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
