input.onButtonPressed(Button.A, function () {
    Cervena()
})
function Zelena () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    wuKong.setServoAngel(wuKong.ServoList.S0, 135 / 1.5)
}
input.onButtonPressed(Button.B, function () {
    Zelena()
})
function Cervena () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    wuKong.setServoAngel(wuKong.ServoList.S0, 45 / 1.5)
}
let Vzdialenost = 0
wuKong.setServoAngel(wuKong.ServoList.S0, 0)
basic.forever(function () {
    Vzdialenost = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    basic.pause(200)
})
