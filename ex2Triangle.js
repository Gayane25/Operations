/*Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
the angles of a triangle equals 180 degrees).*/

function triangle(angle1, angle2) {
  let sumOfAngles = 180;
  let third = sumOfAngles - (angle1 + angle2);
  return third;
}
console.log(triangle(30, 30));
