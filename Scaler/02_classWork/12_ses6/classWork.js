// n- level complete freeze object using recursion and Object.freeze

let obj = {
  a: 1,
  b: {
    c: 3,
    d: 4,
  },
  e: 5,
};

function freeze(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      freeze(obj[key]);
    }
    Object.freeze(obj);
  }
}