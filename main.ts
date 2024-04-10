basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 250)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(100)
})
