export function getGlobal(name) {
  let rs = global[name];
  if (rs) {
    return rs;
  } else {
    throw new Error("no such object");
  }
}
export function setGlobal(key, value) {
  global[key] = value;
}
