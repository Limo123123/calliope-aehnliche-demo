input.onButtonPressed(Button.A, function () {
    Starten()
    Zahl += -1
})
input.onButtonPressed(Button.AB, function () {
    anoderaus = 0
    basic.pause(100)
    Starten()
})
function Starten () {
    basic.clearScreen()
    if (Zahl == 0) {
        Zahl = 1
    } else if (Zahl == 1) {
        Start = 1
        basic.showNumber(Zahl)
    } else if (Zahl == 2) {
        Start = 2
        basic.showNumber(Zahl)
    } else if (Zahl == 3) {
        Start = 3
        basic.showNumber(Zahl)
    } else if (Zahl == 4) {
        Start = 4
        basic.showNumber(Zahl)
    } else if (Zahl == 5) {
        Start = 5
        basic.showNumber(Zahl)
    } else {
        Zahl = 0
    }
}
input.onButtonPressed(Button.B, function () {
    Starten()
    Zahl += 1
})
let Start = 0
let anoderaus = 0
let Zahl = 0
Zahl = 1
Starten()
basic.forever(function () {
    if (anoderaus == 1) {
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (anoderaus == 2) {
        basic.showIcon(IconNames.Tortoise)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (anoderaus == 3) {
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (anoderaus == 4) {
        basic.showIcon(IconNames.Duck)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (anoderaus == 5) {
        basic.showIcon(IconNames.Cow)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) && Start == 1) {
        basic.clearScreen()
        anoderaus = 1
    } else if (input.isGesture(Gesture.Shake) && Start == 2) {
        basic.clearScreen()
        anoderaus = 2
    } else if (input.isGesture(Gesture.Shake) && Start == 3) {
        basic.clearScreen()
        anoderaus = 3
    } else if (input.isGesture(Gesture.Shake) && Start == 4) {
        basic.clearScreen()
        anoderaus = 4
    } else if (input.isGesture(Gesture.Shake) && Start == 5) {
        basic.clearScreen()
        anoderaus = 5
    }
})
