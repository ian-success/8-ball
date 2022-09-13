input.onButtonPressed(Button.A, function () {
    RandomNumber = randint(0, 1)
    if (RandomNumber == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    RandomNumber = randint(0, 3)
    if (RandomNumber == 0) {
        basic.showArrow(ArrowNames.North)
    }
    if (RandomNumber == 1) {
        basic.showArrow(ArrowNames.East)
    }
    if (RandomNumber == 2) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
    basic.pause(2000)
    basic.clearScreen()
})
let RandomNumber = 0
basic.showString("Truth or dare?")
basic.forever(function () {
	
})
