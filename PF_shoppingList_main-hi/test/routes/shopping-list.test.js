import PFShoppingList from "PF_shoppingList_main-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`PFShoppingList.Routes.ShoppingList`, () => {
  testProperties(PFShoppingList.Routes.ShoppingList, CONFIG);
});
