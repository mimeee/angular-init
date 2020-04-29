export const RouteConfig = {
  "test": {
    "path": "test",
    "name": "test",
    "title": "test",

  }
}

export function getPath (path: Array<string>) {
  if (path.length === 0) return "";
  let o = RouteConfig;
  return path.reduce( (sum, key) => {
    var s = sum + o[key].path;
    o = o[key].children
    return s;
  }, "");
}