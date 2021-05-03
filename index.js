// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Fred', 'Claudia'];

const returnFirstTwoDrivers = function(array) {
    const firstTwodrivers = array.slice(0,2);
    return firstTwodrivers;

}

const returnLastTwoDrivers = function(array) {
    const lastTwoDrivers = array.slice(2, 4);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integar) {
    return function() {
        const fare = integar * integar;
        return fare;
    }
}

const fareDoubler = function (fare) {
    createFareMultiplier(fare);
    return fare * 2;

}

const fareTripler = function (fare) {
    createFareMultiplier(fare);
    return fare * 3;

}

function selectDifferentDrivers(array, driversFunction) {
    if(driversFunction === returnFirstTwoDrivers) {
        returnFirstTwoDrivers(array);
    } else if(driversFunction === returnLastTwoDrivers) {
        returnLastTwoDrivers(array);
    }
    
    return driversFunction(array);


}


