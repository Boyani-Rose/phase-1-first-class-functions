function receivesAFunction (callback) {
    callback()
}


function returnsANamedFunction () {
    return function named () {
        return ' to not deeply equal '
    }
} 

function returnsAnAnonymousFunction () {
    return function () {
        return "before all"
    }
}