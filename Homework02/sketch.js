let cvsWrapper = null;
let x, y, vy, ay;
let birds, birdCol, base;
let pipes;
let flyState; // 0 = mid, 1 = up, 2 = down
let cnt, pipeCnt;
let angle;
let x1, x2, bg, bgColor, moveSpeed;
let pxs, phs, pipesNumber = 0,
    pipeOffset;
let goImg;

let wing, dieS, hitS, pointS;
let d = false,
    start = false;
let score;

let numbers;
let mesImg;

// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    bgs = [loadImage('assets/sprites/background-day.png'), loadImage('assets/sprites/background-night.png')];
    birds = [
        [loadImage('assets/sprites/bluebird-midflap.png'), loadImage('assets/sprites/bluebird-upflap.png'), loadImage('assets/sprites/bluebird-downflap.png')],
        [loadImage('assets/sprites/redbird-midflap.png'), loadImage('assets/sprites/redbird-upflap.png'), loadImage('assets/sprites/redbird-downflap.png')],
        [loadImage('assets/sprites/yellowbird-midflap.png'), loadImage('assets/sprites/yellowbird-upflap.png'), loadImage('assets/sprites/yellowbird-downflap.png')]
    ]
    base = loadImage('assets/sprites/base.png');
    pipes = [loadImage('assets/sprites/pipe-green-lower.png'), loadImage('assets/sprites/pipe-green-upper.png')];
    goImg = loadImage('assets/sprites/gameover.png');
    numbers = [loadImage('assets/sprites/0.png'), loadImage('assets/sprites/1.png'), loadImage('assets/sprites/2.png'), loadImage('assets/sprites/3.png'), loadImage('assets/sprites/4.png'), loadImage('assets/sprites/5.png'), loadImage('assets/sprites/6.png'), loadImage('assets/sprites/7.png'), loadImage('assets/sprites/8.png'), loadImage('assets/sprites/9.png')];
    mesImg = loadImage('assets/sprites/message.png');

    wing = loadSound('assets/audio/wing.ogg');
    dieS = loadSound('assets/audio/die.ogg')
    hitS = loadSound('assets/audio/hit.ogg')
    pointS = loadSound('assets/audio/point.ogg')
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");

    // setup code below
    x = width * 2 / 7;
    y = height / 2;
    // vy = 1;
    vy = 0;
    // ay = 0.5;
    ay = 0;
    angle = 0;
    flyState = 0;
    cnt = 0;
    pipeCnt = 0;
    birdCol = Math.floor(Math.random() * 3);
    bgColor = Math.floor(Math.random() * 2);
    x1 = 0;
    x2 = width;
    moveSpeed = 3;
    pxs = [width, width + 250, width + 250 * 2, width + 250 * 3];
    pipeOffset = 150;
    phs = [Math.random() * (height - pipeOffset - base.height), Math.random() * (height - pipeOffset - base.height), Math.random() * (height - pipeOffset - base.height), Math.random() * (height - pipeOffset - base.height)];
    score = 0;
}

function draw() {
    // Render function (called per frame.)
    // background(bg);
    image(bgs[bgColor], x1, 0, width, height);
    image(bgs[bgColor], x2, 0, width, height);
    image(base, x1, height - base.height, width);
    image(base, x2, height - base.height, width);
    x1 -= moveSpeed;
    x2 -= moveSpeed;
    if (x1 < -width) {
        x1 = width;
    }
    if (x2 < -width) {
        x2 = width;
    }

    if (!start) {
        image(mesImg, width / 4, height / 5, width / 2, height * 3 / 5);
    }

    push();
    y += vy;
    vy += ay;

    translate(x, y);
    if (start) {
        if (!d) {
            angle += Math.PI * 1 / 180;
        }
        rotate(angle);
    }

    cnt++;
    if (cnt > 10) {
        cnt = 0;
        if (flyState == 0) {
            image(birds[birdCol][1], 0, 0);
            flyState = 1;
        } else if (flyState == 1) {
            image(birds[birdCol][2], 0, 0);
            flyState = 2;
        } else {
            image(birds[birdCol][0], 0, 0);
            flyState = 0;
        }
    } else {
        if (flyState == 0)
            image(birds[birdCol][0], 0, 0);
        else if (flyState == 1)
            image(birds[birdCol][1], 0, 0);
        else
            image(birds[birdCol][2], 0, 0);
    }

    pop();

    if (start) {
        for (var i = 0; i < 4; i++) {
            pxs[i] -= moveSpeed;
            if (pxs[i] <= -pipes[1].width) {
                pxs[i] = width + 500;
                phs[i] = Math.random() * (height - pipeOffset - base.height);
            }
            image(pipes[1], pxs[i], 0, pipes[1].width, phs[i]);
            image(pipes[0], pxs[i], phs[i] + pipeOffset, pipes[1].width, height - phs[i] - base.height - pipeOffset);

            if (pxs[i] < x + birds[0][0].width && pxs[i] + pipes[1].width > x) {
                if (y < phs[i] || y > phs[i] + pipeOffset) {
                    die();
                }
                if (x + 3 >= pxs[i] + pipes[1].width) {
                    score++;
                    pointS.play();
                    console.log(score);
                }
            }
        }
        if (y < 0 || y + birds[0][0] > height - base.height) {
            die();
        }
        image(numbers[score % 10], width / 2, d ? height * 2 / 6 : height * 1 / 6);
        image(numbers[parseInt(score / 10)], width / 2 - numbers[parseInt(score / 10)].width, d ? height * 2 / 6 : height * 1 / 6);
    }
}

function die() {
    if (moveSpeed != 0) {
        hitS.play();
        dieS.play();
    }
    moveSpeed = 0
    image(goImg, width / 2 - goImg.width / 2, height * 1 / 5);
    d = true;
}

function keyPressed() {
    if (keyCode == 32 && d == false) {
        if (start) {
            vy = -7;
            angle = Math.PI * -30 / 180;
            wing.play();
        } else {
            start = true;
            ay = 0.5;
            vy = -7;
            wing.play();
        }
    }
}