export const transition = (attr, speed, easing, delay) => `
  -webkit-transition: ${attr} ${speed} ${easing} ${delay};
  -moz-transition: ${attr} ${speed} ${easing} ${delay};
  -o-transition: ${attr} ${speed} ${easing} ${delay};
  transition: ${attr} ${speed} ${easing} ${delay};
`;
