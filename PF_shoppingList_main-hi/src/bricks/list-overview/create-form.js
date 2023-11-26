//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
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

const CreateForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateForm",
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
    const handleSubmit = (e) => {
      const newShoppingList = {};
      let newListData = props.listdata;
      newShoppingList.id = Math.trunc(Math. random() * 1000);
      newShoppingList.name = e.data.value.name;
      newShoppingList.owner = props.user;
      newShoppingList.member = [props.user];
      newShoppingList.archived = false;
      newListData.push(newShoppingList);
      props.setData(newListData);
    }
    
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <>
        <Uu5Forms.Form.Provider
          onSubmit={(e) => {
            if (!navigator.onLine) throw new Error("Demo submit error example.");
            handleSubmit(e);
            props.onClose();
          }}
        >
          <Uu5Elements.Modal 
            header="Create new shopping list" 
            footer={
                    <Uu5Elements.Grid
                      templateColumns={{ xs: "repeat(2, 1fr)", s: "repeat(2, auto)" }}
                      columnGap={Uu5Elements.UuGds.SpacingPalette.getValue(["fixed", "c"])}
                      justifyContent={{ s: "end" }}
                    >
                      <Uu5Forms.CancelButton onClick={props.onClose} />
                      <Uu5Forms.SubmitButton>Create</Uu5Forms.SubmitButton>
                    </Uu5Elements.Grid>
                  }
            open={props.open}
            >
            <Uu5Forms.Form.View>
              <div>
                <Uu5Forms.FormText name="name" label="New shopping list name" placeholder="Enter the name" required />
              </div>
            </Uu5Forms.Form.View>
          </Uu5Elements.Modal>
      </Uu5Forms.Form.Provider>
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CreateForm };
export default CreateForm;
//@@viewOff:exports
