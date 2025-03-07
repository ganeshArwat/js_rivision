Promise.myPromiseAny = function (promiseArray) {
  return new Promise(async (resolve, reject) => {
    let Rejected = 0;
    for (let i = 0; i < promiseArray.length; i++) {
      try {
        let data = await promiseArray[i];
        resolve(data);
      } catch (error) {
        Rejected++;
      }
    }
    if (Rejected === promiseArray.length) {
      reject("All promises rejected");
    }
  });
};

Promise.myPromiseAll = async function (arrOfPromises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;
    rejectcount = 0;

    for (let i = 0; i < arrOfPromises.length; i++) {
      Promise.resolve(arrOfPromises[i])
        .then((value) => {
          results[i] = value;
          count++;
          resolve(results);
        })
        .catch(err){
            rejectcount++;
            if (rejectcount === arrOfPromises.length) reject("All promises rejected");
        }
    }
  });
};

Promise.myPromiseRace = function (promiseArray) {
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < promiseArray.length; i++) {
      try {
        let data = await promiseArray[i];
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }
  });
};
