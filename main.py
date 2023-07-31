def on_button_pressed_a():
    input.calibrate_compass()
    basic.show_leds("""
                . . . . .
                # . . . #
                # . # . #
                # . # . #
                . # . # .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

radio.set_group(99)
basic.show_leds("""
        . . . . .
        # . . . #
        # . # . #
        # . # . #
        . # . # .
""")

def on_forever():
    radio.send_string("1" + "/" + ("" + str(input.acceleration(Dimension.X))) + 
    "/" + ("" + str(input.acceleration(Dimension.Y))) + 
    "/" + ("" + str(input.acceleration(Dimension.Z))))
    control.wait_micros(20)
    radio.send_string("2" + "/" + ("" + str(Math.round(input.magnetic_force(Dimension.X) * 10) / 10)) + 
    "/" + ("" + str(Math.round(input.magnetic_force(Dimension.Y) * 10) / 10)) + 
    "/" + ("" + str(Math.round(input.magnetic_force(Dimension.Z) * 10) / 10)))
    control.wait_micros(20)
basic.forever(on_forever)
