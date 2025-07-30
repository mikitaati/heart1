basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . # . #
        # . . . #
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(100)
    }
})
