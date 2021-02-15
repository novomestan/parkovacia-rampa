function Zelena () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function Cervena () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
basic.forever(function () {
    Cervena()
    basic.pause(1000)
    Zelena()
    basic.pause(1000)
})
