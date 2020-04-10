const testVar = {}

function superbowlWin(array) {
  let result
  array.find(function(object) {
    if (object.result === "W") {
      result = object.year
    }
  })
  return result
}
