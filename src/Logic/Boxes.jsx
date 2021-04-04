export function PBox(input) {
  let output = [];
  /* 
    0->3
    1->6
    2->0
    3->7
    4->1
    5->2
    6->4
    7->5
    */

  output[0] = input[3];
  output[1] = input[6];
  output[2] = input[0];
  output[3] = input[7];
  output[4] = input[1];
  output[5] = input[2];
  output[6] = input[4];
  output[7] = input[5];

  return output;
}
export function SBox(input) {
  let output = [];
  /* 
    0->3
    1->5
    2->1
    3->7
    4->0
    5->2
    6->4
    7->6
    */

  output[0] = input[4];
  output[1] = input[2];
  output[2] = input[5];
  output[3] = input[0];
  output[4] = input[6];
  output[5] = input[1];
  output[6] = input[7];
  output[7] = input[3];

  return output;
}
