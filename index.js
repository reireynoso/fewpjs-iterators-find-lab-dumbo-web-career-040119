const testVar = {}

function testFunc() {
  return "hi"
}
// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]
let superbowlWin = (record) => {
  let result = record.find(record => record.result === "W" )
  if (result === undefined){
    return undefined
  }else{
    return result.year
  }
}
