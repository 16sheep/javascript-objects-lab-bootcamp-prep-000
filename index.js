let recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  newObject = Object.assign({}, object, {[key]:value});
  console.log(newObject)
  return newObject;
}