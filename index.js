// Write your solution in this file!

let driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    // driver[key] = value
    let copy = Object.assign({}, driver)
    copy[key] = value
    return copy
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value
    return driver
}

const deleteFromDriverByKey = (driver, key) => {
    let copy  = Object.assign({}, driver)
    delete copy[key]
    return copy
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
}