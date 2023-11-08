import PFPFShoppingList from "PF_PFShoppingList_main-hi";
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

describe(`PFPFShoppingList.Bricks.Joke.Tile`, () => {
  testProperties(PFPFShoppingList.Bricks.Joke.Tile, CONFIG);
});
