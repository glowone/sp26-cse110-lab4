let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

// For...in loop that iterates through the statistics object
for (let property in statistics) {
    // Check if property starts with 'r' OR if the value is an odd number
    if (property[0] === 'r' || statistics[property] % 2 !== 0) {
        console.log(`${property}: ${statistics[property]}`);
    }
}
