enum Status{
  MESSAGE = 2,
  SPA,
  DABAOJIAN
}

function getServe(status: number) {
  if (status === Status.MESSAGE) {
    return "messages";
  } else if (status === Status.SPA) {
    return "SPA";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}


console.log(Status[2]);

const result = getServe(3);
console.log(`我要去${result}`);
