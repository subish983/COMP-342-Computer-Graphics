class Obstacle extends Rectangle {
    constructor(x, y, width, height, speed, grid, colour) {
        super(x, y, width, height);
        this.speed = speed;
        this.grid = grid;
        this.colour = colour;
    }

    update() {
        this.x = this.x + this.speed;
        if ((this.speed > 0) && (this.x > width + this.grid)) {
            this.x = -Math.abs(this.width) - this.grid;
        }
        if ((this.speed < 0) && this.x < -Math.abs(this.width) - this.grid) {
            this.x = width + this.grid;
        }
    }

    show() {
        fill(this.colour);
        rect(this.x, this.y, this.width, this.height);
    }
}