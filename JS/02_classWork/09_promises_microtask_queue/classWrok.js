// ------------------------------- ## Heading ## -------------------------------
console.log(
  "-------------------------------------------------------------------------"
);

function resolveAfterNSeconds(delay, x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Value: " + x);
      resolve(x);
    }, delay);
  });
}

(function () {
  let a = resolveAfterNSeconds(1000, "data 1");
  a.then(async function (x) {
    // ?? sec

    // It work in serial order.
    let y = await resolveAfterNSeconds(2000, "data 2"); // Total time spent: ?
    let z = await resolveAfterNSeconds(1000, "data 3"); // Total time spent: ?
    // ?? sec

    // They work in serial order
    let p1 = await resolveAfterNSeconds(2000, "data 42"); // Total time spent: ?
    let q2 = await resolveAfterNSeconds(1000, "data 52"); // Total time spent: ?

    // They work in parallel.
    let p = resolveAfterNSeconds(2000, "data 4"); // ?
    let q = resolveAfterNSeconds(1000, "data 5");

    console.log(x + y + z + (await p) + (await q));
  });
})();
