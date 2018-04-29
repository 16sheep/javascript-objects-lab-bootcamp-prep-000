let recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  newObject = Object.assign({}, obj, {[key]:value});
  console.log(newObject)
  return newObject;
}