let recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let newObject = Object.assign({}, object, {[key]:value});
  console.log(newObject);
  return newObject;
}