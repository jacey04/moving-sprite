input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        sprite.turn(Direction.Left, 90)
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
    }
    basic.pause(500)
    sprite.delete()
    sprite = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        sprite.turn(Direction.Left, 90)
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
    }
})
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Heart)
sprite = game.createSprite(3, 3)
basic.forever(function () {
	
})
