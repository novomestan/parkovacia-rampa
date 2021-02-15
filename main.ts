input.onButtonPressed(Button.A, function () {
    Cervena()
})
function Zelena () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.B, function () {
    Zelena()
})
function Cervena () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
basic.forever(function () {
	
})
