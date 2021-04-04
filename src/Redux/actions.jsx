export const UPDATE_BITS = "UPDATE_BITS";

export const updateBits = (index, value) => ({
  type: UPDATE_BITS,
  payload: { index, value },
});
