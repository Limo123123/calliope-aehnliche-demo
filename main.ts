function _2 () {
    for (let index = 0; index < 1e+196; index++) {
        if (input.buttonIsPressed(Button.AB)) {
            Starten()
            break;
        } else {
            basic.showIcon(IconNames.Tortoise)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    Starten()
    Zahl += -1
})
function _5 () {
    for (let index = 0; index < 1e+196; index++) {
        if (input.buttonIsPressed(Button.AB)) {
            Starten()
            break;
        } else {
            basic.showIcon(IconNames.Cow)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
}
function _3 () {
    for (let index = 0; index < 1e+196; index++) {
        if (input.buttonIsPressed(Button.AB)) {
            Starten()
            break;
        } else {
            basic.showIcon(IconNames.Happy)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
}
function Starten () {
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
function _4 () {
    for (let index = 0; index < 1e+196; index++) {
        if (input.buttonIsPressed(Button.AB)) {
            Starten()
            break;
        } else {
            basic.showIcon(IconNames.Duck)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
}
function _1 () {
    for (let index = 0; index < 1e+196; index++) {
        if (input.buttonIsPressed(Button.AB)) {
            Starten()
            break;
        } else {
            basic.showIcon(IconNames.Heart)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
}
let Start = 0
let Zahl = 0
Zahl = 1
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) && Start == 1) {
        basic.clearScreen()
        _1()
    } else if (input.isGesture(Gesture.Shake) && Start == 2) {
        basic.clearScreen()
        _2()
    } else if (input.isGesture(Gesture.Shake) && Start == 3) {
        basic.clearScreen()
        _3()
    } else if (input.isGesture(Gesture.Shake) && Start == 4) {
        basic.clearScreen()
        _4()
    } else if (input.isGesture(Gesture.Shake) && Start == 5) {
        basic.clearScreen()
        _5()
    }
})
