function Upper(string) {
  let w = string.split(" ");
  w = w.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return w.join(" ");
}
console.log(Upper("we are hardcore coders"));
console.log(Upper("xxz dxxdd dxxxdx ddxs dxsds"));
export default Upper;
