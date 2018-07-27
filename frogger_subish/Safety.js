class Safety extends Rectangle {
    constructor(index, grid) {
        super(0, index * grid, width, grid);
        this.type = "SAFETY";
    }

    run() {
        fill(100);
        rect(this.x, this.y, this.width, this.height);
    }
}