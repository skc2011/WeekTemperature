/*         SET #1
let weekArray = [
    {name: "Monday", temperature: 1},
    {name: "Tuesday", temperature: 2},
    {name: "Wednesday", temperature: 3},
    {name: "Thursday", temperature: 4},
    {name: "Friday", temperature: 5},
    {name: "Saturday", temperature: 6},
    {name: "Sunday", temperature: -7},
]
Target Day: Tuesday

          SET #2
let weekArray = [
    {name: "Monday", temperature: 10},
    {name: "Tuesday", temperature: 12},
    {name: "Wednesday", temperature: 3},
    {name: "Thursday", temperature: 4},
    {name: "Friday", temperature: 5},
    {name: "Saturday", temperature: 7},
    {name: "Sunday", temperature: 7},
]
Target Day: Saturday
*/
let weekArray = [
    {name: "Monday", temperature: 1},
    {name: "Tuesday", temperature: 1},
    {name: "Wednesday", temperature: 3},
    {name: "Thursday", temperature: 3},
    {name: "Friday", temperature: 5},
    {name: "Saturday", temperature: 7},
    {name: "Sunday", temperature: 7},
]
// Target Day: Wednesday

function dayWithNearestTemp(weekTemperatureArray) {

  let weekSumTemperature = weekTemperatureArray.reduce((a,b) => a + b.temperature, 0);
  let averageTemperature = weekSumTemperature / (weekTemperatureArray.length);
  var newArray = [];

  for (let day in weekTemperatureArray) {
    let diff = Math.abs(weekTemperatureArray[day].temperature - averageTemperature)
    let newDictionary = {
    name: weekTemperatureArray[day].name,
    temperature: diff
   }
  newArray.push(newDictionary)
}
  let sortedArray =  newArray.sort((a,b) => a.temperature - b.temperature)
  let nearestFirstFoundDay = sortedArray[0].name
  console.log("Target Day: " + nearestFirstFoundDay)
  return nearestFirstFoundDay
}

dayWithNearestTemp(weekArray)
//test