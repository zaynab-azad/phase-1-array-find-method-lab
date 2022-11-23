// code your solution here
function superbowlWin(record) {
  const reslt = record.find((element) => {
    if (element.result == "W") {
      return element;
    }
  });
  return reslt != undefined ? reslt.year : undefined;
}
