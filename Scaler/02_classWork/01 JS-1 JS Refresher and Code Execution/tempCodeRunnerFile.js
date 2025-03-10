function fn() {
  console.log("i am fn");
  function inner() {
    console.log("i am inner");
  }
  inner();
}

fn();