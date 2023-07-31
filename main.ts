input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
    basic.showLeds(`
        . . . . .
        # . . . #
        # . # . #
        # . # . #
        . # . # .
        `)
})
function fixString (numToPad: number) {
    numDigits = 5
    thisText = convertToText(numToPad)
    thisLength = thisText.length
    newText = ""
    if (thisLength < numDigits) {
        if (thisText.substr(0, 1).compare("-") == 0) {
            newText = "-"
            for (let index = 0; index < numDigits - thisLength; index++) {
                newText = "" + newText + "0"
            }
            newText = "" + newText + thisText.substr(1, thisLength - 1)
        } else {
            for (let index = 0; index < numDigits - thisLength; index++) {
                newText = "" + newText + "0"
            }
            newText = "" + newText + thisText
        }
    } else if (thisLength > numDigits) {
        newText = thisText.substr(0, numDigits)
    } else {
        newText = thisText
    }
    return newText
}
let newText = ""
let thisLength = 0
let thisText = ""
let numDigits = 0
radio.setGroup(99)
basic.showLeds(`
    . . . . .
    # . . . #
    # . # . #
    # . # . #
    . # . # .
    `)
basic.forever(function () {
    radio.sendString("1" + "/" + fixString(input.acceleration(Dimension.X)) + "/" + fixString(input.acceleration(Dimension.Y)) + "/" + fixString(input.acceleration(Dimension.Z)) + ";")
    basic.pause(5)
    radio.sendString("2" + "/" + fixString(input.magneticForce(Dimension.X)) + "/" + fixString(input.magneticForce(Dimension.Y)) + "/" + fixString(input.magneticForce(Dimension.Z)) + ";")
})
