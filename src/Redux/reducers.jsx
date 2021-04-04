import { combineReducers } from "redux";
import { PBox, SBox } from "../Logic/Boxes";
import { UPDATE_BITS } from "./actions";

const bitState = {
  input: [false, false, false, false, false, false, false, false],
  output: [false, false, false, false, false, false, false, false],
};

// eslint-disable-next-line import/no-anonymous-default-export
function bitReducer(state = bitState, action) {
  switch (action.type) {
    case UPDATE_BITS: {
      const { index, value } = action.payload;
      const input = [...state.input];
      input.splice(index, 1, value);

      const output = SBox(PBox(input));

      return {
        input,
        output,
      };
    }

    default: {
      return state;
    }
  }
}

export default combineReducers({ bitReducer });
