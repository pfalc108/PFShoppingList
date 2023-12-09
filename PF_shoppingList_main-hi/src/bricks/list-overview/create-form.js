//@@viewOn:imports
import { createVisualComponent } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
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
      let newListData = props.listdata;
    if (props.itemId === 0) {
        const newShoppingList = {};
        newShoppingList.id = Math.trunc(Math. random() * 1000);
        newShoppingList.name = e.data.value.name;
        newShoppingList.owner = props.user;
        newShoppingList.member = [props.user];
        newShoppingList.archived = false;
        newListData.push(newShoppingList);
      } else {
        const idx = newListData.findIndex(x => x.id === props.itemId);
        newListData[idx].name = e.data.value.name;
      }
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
            header={props.header}
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
                <Uu5Forms.FormText name="name" label="New shopping list name" placeholder="Enter the name" initialValue={props.defaultText} required />
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
