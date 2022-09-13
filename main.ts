input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    RandomNumber = randint(-1, 1)
    if (RandomNumber == -1) {
        basic.showString("The answer is no")
    }
    if (RandomNumber == 0) {
        basic.showString("Answer Unclear")
    }
    if (RandomNumber == 1) {
        basic.showString("My senses say Yes")
    }
})
let RandomNumber = 0
basic.showString("Shake to ask the 8 ball")
basic.forever(function () {
	
})
