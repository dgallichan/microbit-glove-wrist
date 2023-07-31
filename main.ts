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
radio.setGroup(99)
basic.showLeds(`
    . . . . .
    # . . . #
    # . # . #
    # . # . #
    . # . # .
    `)
basic.forever(function () {
    radio.sendString("1" + "/" + input.acceleration(Dimension.X) + "/" + input.acceleration(Dimension.Y) + "/" + input.acceleration(Dimension.Z) + ";")
    control.waitMicros(20)
    radio.sendString("2" + "/" + Math.round(input.magneticForce(Dimension.X) * 10 / 10) + "/" + Math.round(input.magneticForce(Dimension.Y) * 10 / 10) + "/" + Math.round(input.magneticForce(Dimension.Z) * 10 / 10) + ";")
    control.waitMicros(20)
})
