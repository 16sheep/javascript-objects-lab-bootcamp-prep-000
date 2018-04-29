let recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let newObject = Object.assign({}, object, {[key]:value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object = Object.assign(object, { [key]:value });
  console.log(object)
  return object;
}