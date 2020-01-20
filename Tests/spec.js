var WeekTemperature = require("../Project/WeekTemperature.js");

describe('Test task', () => {
    it('Should find apropriate day', () => {
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
        ] // Target Day: Wednesday

        expect(WeekTemperature.dayWithNearestTemp(weekArray)).toBe("Wednesday");
    });
});


