input.onButtonPressed(Button.A, function () {
    Zelena()
    wuKong.setServoAngel(wuKong.ServoList.S0, 0)
})
function Zelena () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.B, function () {
    Cervena()
    wuKong.setServoAngel(wuKong.ServoList.S0, 180)
})
function Cervena () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
wuKong.setServoAngel(wuKong.ServoList.S0, 0)
