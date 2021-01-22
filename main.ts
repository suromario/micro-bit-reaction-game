let game_started = false
basic.forever(function () {
    game_started = false
    basic.pause(randint(1000, 5000))
    game_started = true
    basic.showIcon(IconNames.Heart)
    while (game_started) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            game_started = false
        }
        if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            game_started = false
        }
    }
    basic.pause(3000)
    basic.clearScreen()
})
