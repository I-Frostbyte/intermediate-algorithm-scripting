const orbitalPeriod = require("./mapTheDebris");

test('Mapping the Debris from the flight', async () => {
    expect(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])).toEqual([{name: "sputnik", orbitalPeriod: 86400}]);
})

test('Mapping the Debris from the flight', async () => {
    expect(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])).toEqual([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);
})
