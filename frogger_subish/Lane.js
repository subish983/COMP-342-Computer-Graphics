class Lane extends Rectangle {
    constructor(index, grid, colour, type, num, length, spacing, speed) {
        super(0, index * grid, width, grid);
        this.obstacles = [];
        this.type = type;
        const offset = Math.floor(Math.random() * 200);
        for (let i = 0; i < num; i++) {
            this.obstacles.push(
                new Obstacle(
                    offset + spacing * i,
                    index * grid,
                    grid * length,
                    grid,
                    speed,
                    grid,
                    colour
                )
            );
        }
    }

    check(frog) {
        if (this.type === "CAR") {
            this.obstacles.forEach(function (car) {
                if (frog.intersects(car)) {
                    resetGame();
                }
            });
        } else {
            let ok = false;
            this.obstacles.forEach(function (log) {
                if (frog.intersects(log)) {
                    ok = true;
                    frog.attach(log);
                }
            });
            if (!ok) {
                resetGame();
            }
        }
    }

    run() {
        this.obstacles.forEach(function (obstacle) {
            obstacle.show();
            obstacle.update();
        });
    }
}