let frog;
const lanes = [];

const grid = 50;

const resetGame = () => {
    frog = new Frog(width / 2 - grid / 2, height - grid, grid, width);
    frog.attach(null);
};

function setup() {
    // translate(100,100);
    createCanvas(750, 550);
    resetGame();
    lanes.push(new Safety(0, grid));
    lanes.push(new Lane(1, grid, "#926239", "LOG", 1, 3, 150, 3));
    lanes.push(new Lane(2, grid, "#49311c", "LOG", 2, 3, 350, -2.5));
    lanes.push(new Lane(3, grid, "#614126", "LOG", 4, 1, 150, 1));
    lanes.push(new Lane(4, grid, "#7a5230", "LOG", 3, 2, 250, -1.7));
    lanes.push(new Safety(5, grid));
    lanes.push(new Lane(6, grid, "#004225", "CAR", 3, 1, 150, 2.4));
    lanes.push(new Lane(7, grid, "#00539f", "CAR", 2, 2, 150, -3.6));
    lanes.push(new Lane(8, grid, "#ffcc00", "CAR", 1, 3, 150, 2.3));
    lanes.push(new Lane(9, grid, "#930b31", "CAR", 1, 4, 150, -1));
    lanes.push(new Safety(10, grid));
}

function draw() {
    background(0);
    lanes.forEach(function (lane) {
        lane.run();
    });
    const laneIndex = parseInt(frog.y / grid, 10);
    if (lanes[laneIndex].type !== "SAFETY") {
        lanes[laneIndex].check(frog);
    }
    fill(255, 100);
    frog.update();
    frog.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        frog.move(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        frog.move(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        frog.move(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        frog.move(-1, 0);
    }
}