function findMatching(array, name) {

    const result = array.filter(names => names.toLowerCase() === name.toLowerCase())
    return result
}

function fuzzyMatch(array, name) {

    const result = array.filter(names => names.charAt(0) === name.charAt(0))
    return result
}

function matchName(array, name) {

    const result = array.filter(names => names.name === name)
    return result
}