export function BooleanToBits(input) {
  let bits = "";
  input.forEach((element) => {
    if (element) {
      bits += "1";
    } else {
      bits += "0";
    }
  });
  return bits;
}
