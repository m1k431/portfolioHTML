const monIntro = function () {
    //Bouton de Controle play/pause video jonglage 
    var m4vide0 = document.getElementById('jugglejungle')
    m4vide0.playbackRate = 0.85
    var BtnJs0nPl4Y = document.getElementById('BtnJs0nPl4Y')
    BtnJs0nPl4Y.innerHTML = 'PAUSE'
    BtnJs0nPl4Y.addEventListener('click', () => {
        if (m4vide0.paused) {
            m4vide0.play()
            BtnJs0nPl4Y.innerHTML = 'PAUSE'
        } else {
            m4vide0.pause()
            BtnJs0nPl4Y.innerHTML = 'PLAY'
        }
    })
    BtnJs0nPl4Y.click()
    $('#jugglejungle').fadeIn(100)


    //Blue/red menu button
    $('#intro').removeClass('css3button')
    $('#intro').addClass('css3buttonRed')
    //FadeIN page acceuil
    $('#INDEX').fadeIn(100)
    $('#m0ncentrage').fadeIn(100)


    //DIV SOLEILLLLLLLLL
    var m0nsoleil = document.getElementById('s0leil')
    m0nsoleil.style.position = 'relative'
    m0nsoleil.style.display = 'block'
    m0nsoleil.style.overflow = 'hidden'
    m0nsoleil.width = 600
    m0nsoleil.height = 300
    m0nsoleil.style.height = '300px'
    m0nsoleil.id = 's0leil'
    //360backnoreverse
    var mon360 = document.createElement('video')
    mon360.style.position = 'absolute'
    mon360.style.top = '5.5%'
    mon360.style.right = '34%'
    mon360.style.width = '38%'
    mon360.id = 'snowB'
    mon360.playsinline = true
    mon360.autoplay = true
    mon360.muted = true
    mon360.loop = true
    var src360 = document.createElement('source')
    src360.src = '/static/img/360backnoreverse.webm'
    src360.type = 'video/webm'
    //ATARIIIIIIIIII
    var divAtari = document.createElement('div')
    divAtari.style.position = 'absolute'
    divAtari.style.top = '100px'
    divAtari.style.right = '5px'
    var m0nimg = document.createElement('img')
    m0nimg.style.position = 'relative'
    m0nimg.src = '/static/img/Atari.webp'
    //m0nimg.style.top = '36%'
    //m0nimg.style.right = '6%'
    m0nimg.id = 'atari'
    //Cielllllllllllll
    var m0nCiel = document.createElement('canvas')
    m0nCiel.style.position = 'absolute'
    m0nCiel.style.display = 'block'
    m0nCiel.width = 600
    m0nCiel.height = 400
    m0nCiel.style.margin = 0
    m0nCiel.style.width = '100%'
    m0nCiel.style.height = '100%'
    m0nCiel.style.backgroundColor = 'blue'
    m0nCiel.id = 'ci3l'
    m0nsoleil.appendChild(m0nCiel)
    //space
    var myStars = document.createElement('canvas')
    myStars.width = 600
    myStars.height = 400
    myStars.style.width = '100%'
    myStars.style.height = '100%'
    myStars.id = 'space'
    myStars.style.position = 'absolute'
    //myStars.style.display = 'none'
    myStars.style.borderRadius = '10px'
    myStars.style.top = '0px'
    myStars.style.left = '0px'
    m0nsoleil.appendChild(myStars)
    //soleil
    var m0nCanva = document.createElement('canvas')
    m0nCanva.width = 40
    m0nCanva.height = 40
    m0nCanva.style.width = '40px'
    m0nCanva.id = 'c4nv4'
    m0nCanva.style.position = 'absolute'
    m0nsoleil.appendChild(m0nCanva)
    //Lune
    var maLune = document.createElement('canvas')
    maLune.width = 40
    maLune.height = 40
    maLune.style.width = '50px'
    maLune.id = 'moon'
    //maLune.style.display = 'none'
    maLune.style.position = 'absolute'
    maLune.style.top = '30px'
    maLune.style.right = '10%'
    m0nsoleil.appendChild(maLune)
    //cloud img
    var imgCloud = document.createElement('img')
    imgCloud.id = 'cloud'
    imgCloud.className = 'cloud'
    imgCloud.style.position = 'absolute'
    imgCloud.style.left = '700px'
    imgCloud.style.top = '-460px'
    imgCloud.style.height = '200%'
    imgCloud.src = '/static/img/cloud.png'
    m0nsoleil.appendChild(imgCloud)
    //mer
    var m4m3r = document.createElement('canvas')
    m4m3r.width = 600
    m4m3r.height = 400
    m4m3r.style.width = '100%'
    m4m3r.style.height = '100%'
    m4m3r.id = 'm0nC4nvaM3r'
    m4m3r.style.position = 'absolute'
    m4m3r.style.display = 'block'
    m0nsoleil.appendChild(m4m3r)
    //colline
    var m4colline = document.createElement('canvas')
    m4colline.width = 600
    m4colline.height = 400
    m4colline.style.width = '100%'
    m4colline.style.height = '100%'
    m4colline.id = 'm0nC4nvaC0lline'
    m4colline.style.display = 'block'
    m4colline.style.position = 'absolute'
    m0nsoleil.appendChild(m4colline)
    //var m0n4tari = document.createElement('img')
    //m0n4tari.id = 'a7ari'
    //m0n4tari.style.position = 'absolute'
    //m0nsoleil.appendChild(m0n4tari)
    //meeeeeeeeeeeeer
    var ctx2M4col = m4m3r.getContext('2d')
    var gradientm3r = ctx2M4col.createLinearGradient(0, 0, 0, 600)
    gradientm3r.addColorStop(0, 'darkblue')
    gradientm3r.addColorStop(1, 'darkblue')
    ctx2M4col.fillStyle = gradientm3r
    ctx2M4col.beginPath()
    ctx2M4col.moveTo(0, 600)
    ctx2M4col.lineTo(600, 400)
    ctx2M4col.lineTo(600, 170)
    ctx2M4col.bezierCurveTo(170, 178, 650, 172, 0, 170)
    ctx2M4col.closePath()
    ctx2M4col.stroke()
    ctx2M4col.fill()
    //C00000000000000000000000000000llllllllllllllllOLLLLIIIIIINNNNNNE 1
    var ctxM4col = m4colline.getContext('2d')
    var gradientC0lline = ctxM4col.createLinearGradient(0, 0, 0, 600)
    gradientC0lline.addColorStop(0, 'yellow')
    gradientC0lline.addColorStop(0.8, 'black')
    ctxM4col.fillStyle = gradientC0lline
    ctxM4col.beginPath()
    ctxM4col.moveTo(0, 400)
    ctxM4col.lineTo(600, 400)
    ctxM4col.lineTo(600, 260)
    ctxM4col.bezierCurveTo(150, 150, 250, 130, 0, 200)
    ctxM4col.closePath()
    ctxM4col.stroke()
    ctxM4col.fill()

    //SONIC PALM TREEEEEEEE
    var divMonkey = document.createElement('div')
    divMonkey.id = 'divMonkey'
    divMonkey.className = 'divMonkey'
    divMonkey.style.position = 'absolute'
    divMonkey.style.height = '140px'
    divMonkey.style.width = '95px'
    divMonkey.style.top = '20px'
    divMonkey.style.left = '59.55px'
    //divMonkey.style.backgroundColor = 'rgba(105, 180, 72, 0.449)'
    divMonkey.style.overflow = 'hidden'
    var imgMonkey = document.createElement('img')
    imgMonkey.id = 'monkey'
    imgMonkey.className = 'monkey'
    imgMonkey.style.position = 'absolute'
    imgMonkey.style.height = '100%'
    imgMonkey.style.left = '-2215px'
    imgMonkey.src = '/static/img/monkey.png'
    var imgSonicPalm = document.createElement('img')
    imgSonicPalm.id = 'palmTree'
    imgSonicPalm.className = 'palmTree'
    imgSonicPalm.style.position = 'absolute'
    imgSonicPalm.style.height = '65%'
    imgSonicPalm.style.top = '0px'
    imgSonicPalm.style.left = '5px'
    imgSonicPalm.src = '/static/img/palmTree.png'
    //SONICCCCCCCCC
    var divSonic = document.createElement('div')
    divSonic.id = 'divSonic'
    divSonic.className = 'divsonic'
    divSonic.style.position = 'absolute'
    divSonic.overflow = 'hidden'
    divSonic.style.height = '48px'
    divSonic.style.width = '48px'
    divSonic.style.top = '250px'
    divSonic.style.left = '-10%'
    //divMonkey.style.backgroundColor = 'rgba(105, 180, 72, 0.449)'
    divSonic.style.overflow = 'hidden'
    var imgSonic = document.createElement('img')
    imgSonic.id = 'sonic'
    imgSonic.className = 'sonic'
    imgSonic.style.position = 'relative'
    imgSonic.style.left = '-55px'
    imgSonic.style.top = '-21px'
    imgSonic.src = '/static/img/sonic2.png'
    //BIRD div
    var divBird = document.createElement('div')
    divBird.id = 'divBird'
    divBird.className = 'divbird'
    divBird.style.position = 'absolute'
    divBird.overflow = 'hidden'
    divBird.style.height = '24px'
    divBird.style.width = '24px'
    divBird.style.top = '240px'
    divBird.style.left = '-15%'
    divBird.style.overflow = 'hidden'
    //bird img
    var imgBird = document.createElement('img')
    imgBird.id = 'bird'
    imgBird.className = 'bird'
    imgBird.style.position = 'relative'
    imgBird.style.left = '0px'
    imgBird.style.top = '0px'
    imgBird.style.height = '100%'
    imgBird.src = '/static/img/twitter-bird-sprite.png'

    m0nsoleil.appendChild(divMonkey)
    m0nsoleil.appendChild(imgSonicPalm)
    divMonkey.appendChild(imgMonkey)
    m0nsoleil.appendChild(divAtari)
    m0nsoleil.appendChild(divBird)
    m0nsoleil.appendChild(divSonic)
    divBird.appendChild(imgBird)
    divSonic.appendChild(imgSonic)
    divAtari.id = 'atari'
    mon360.appendChild(src360)
    divAtari.appendChild(mon360)
    divAtari.appendChild(m0nimg)
    var bool1 = false
    var bool2 = false
    var bool3 = false
    var idB, idW, idMU, idMD, idS, idM, idBird, idCloud
    let i = 4

    var moveCloud = function () {
        idCloud = requestAnimationFrame(moveCloud)
        if (parseFloat(imgCloud.style.left) > -1050) {
            imgCloud.style.left = parseFloat(imgCloud.style.left) - 0.2 + 'px'
        }
        else {
            imgCloud.style.left = '700px'
        }

    }

    var animBird = function () {
        idBird = requestAnimationFrame(animBird)
        if (bool3 == false) {
            imgBird.style.left = '0px'
            bool3 = true
        }
        else {
            if (parseFloat(imgBird.style.left) > -65) {
                imgBird.style.left = parseFloat(imgBird.style.left) - 24 + 'px'
            }
            else bool3 = false
        }
    }

    var sonicBored = function () {
        idB = requestAnimationFrame(sonicBored)
        if (bool1 == false) {
            imgSonic.style.left = '-55px'
            imgSonic.style.top = '-21px'
            bool1 = true
        }
        else {
            if (parseFloat(imgSonic.style.left) > -200) {
                imgSonic.style.left = parseFloat(imgSonic.style.left) - 49 + 'px'
            }
            else bool1 = false
        }
    }

    var sonicWalk = function () {
        idW = requestAnimationFrame(sonicWalk)
        if (bool2 == false) {
            imgSonic.style.left = '-50px'
            imgSonic.style.top = '-95px'
            bool2 = true
        }
        else {
            if (parseFloat(imgSonic.style.left) > -200) {
                imgSonic.style.left = parseFloat(imgSonic.style.left) - 49 + 'px'
            }
            else bool2 = false
        }
    }


    var moveSonicRight = function () {
        idM = requestAnimationFrame(moveSonicRight)
        if (parseFloat(divSonic.style.left) < 100) {
            divSonic.style.left = parseFloat(divSonic.style.left) + 0.2 + '%'
            divBird.style.left = parseFloat(divBird.style.left) + 0.2 + '%'
        }
        else {
            divSonic.style.left = '-10%'
            divBird.style.left = '-15%'
        }
    }


    var back = false
    var cpt = 0
    var monkeyDown = function () {
        idMD = requestAnimationFrame(monkeyDown)
        if (parseFloat(imgMonkey.style.left) <= 0 && !back) {
            imgMonkey.style.left = parseFloat(imgMonkey.style.left) + 105.52 + 'px'
            cpt++
        }
        else {
            back = true
        }
    }
    var monkeyUp = function () {
        idMU = requestAnimationFrame(monkeyUp)
        if (cpt > 0) {
            imgMonkey.style.left = parseFloat(imgMonkey.style.left) - 105.52 + 'px'
            cpt--
        }
        else {
            back = false
        }
    }
    var c00rdX = 20
    var c00rdY = 2

    var ctxLune = maLune.getContext('2d')
    var ctx = m0nCanva.getContext('2d')
    //lune
    var gradientLune = ctxLune.createRadialGradient(16, 16, 16, 16, 16, 14)
    gradientLune.addColorStop(0, 'transparent')
    gradientLune.addColorStop(0.9, 'white')
    ctxLune.fillStyle = gradientLune
    //soleil
    var gradient = ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
    gradient.addColorStop(0, 'transparent')
    gradient.addColorStop(0.9, 'yellow')
    ctx.fillStyle = gradient
    $('#moon').hide()

    //snowback control
    let snowBack = document.getElementById('snowB')
    idBird = requestAnimationFrame(animBird)
    idCloud = requestAnimationFrame(moveCloud)

    //FPS control
    var fps = 60,
        now,
        then = Date.now(),
        interval = 1000 / fps,
        delta

    var dessinerM0n = (/*m0ntimestamp*/) => {
        requestAnimationFrame(dessinerM0n)

        //fps
        now = Date.now()
        delta = now - then
        if (delta > interval) {
            then = now - (delta % interval)

            //code for drawing the frame
            if (c00rdX < 131) {
                c00rdY = Math.cos(c00rdX / 24) * 54
                m0nCanva.style.top = c00rdY * 1.1 + 60 + '%'
                m0nCanva.style.left = c00rdX * 1.3 - 50 + '%'
                ctx.clearRect(0, 0, 40, 40)
                ctxLune.clearRect(0, 0, 40, 40)
                switch (c00rdX) {
                    case 45:
                        $('#space').animate({
                            backgroundColor: '#0a15db'
                        }, 500)
                        cancelAnimationFrame(idW)
                        cancelAnimationFrame(idM)
                        $('#moon').fadeOut(1000)
                        break
                    case 52:
                        idMD = requestAnimationFrame(monkeyDown)
                        cancelAnimationFrame(idB)
                        idW = sonicWalk()
                        idM = moveSonicRight()
                        snowBack.play()
                        break
                    case 62:
                        cancelAnimationFrame(idMD)
                        idMU = monkeyUp()
                        break
                    case 78:
                        cancelAnimationFrame(idMU)
                        idMD = monkeyDown()
                        break
                    case 90:
                        cancelAnimationFrame(idMD)
                        idMU = monkeyUp()
                        break
                    case 95:
                        cancelAnimationFrame(idM)
                        cancelAnimationFrame(idW)
                        idB = sonicBored()
                        $('#space').animate({
                            backgroundColor: '#000000'
                        }, 500)
                        break
                    case 100:
                        cancelAnimationFrame(idB)
                        cancelAnimationFrame(idMU)
                        //cancelAnimationFrame(idCloud)
                        snowBack.pause()
                        break
                    case 105:
                        $('#moon').fadeIn(500)
                        break
                }
                ctx.fillRect(0, 0, 40, 40)
                ctxLune.fillRect(0, 0, 40, 40)
                c00rdX = (c00rdX * 10 + 0.1 * 10) / 10
            }
            else {
                c00rdX = 20
            }
        }
    }
    dessinerM0n()
}
monIntro()