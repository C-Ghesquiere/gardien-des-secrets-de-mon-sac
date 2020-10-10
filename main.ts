let light_value = 0
basic.forever(function () {
    light_value = pins.analogReadPin(AnalogPin.P1)
    if (light_value >= 100) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(100)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
