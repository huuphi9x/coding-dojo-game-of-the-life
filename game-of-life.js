function cellHasLeftNeighbor(col) {
    return col > 0;
}

function hasLeftLivingNeighbor(world, row, col) {
    return world[row][col - 1];
}

function cellHasRightNeighbor(world, row, col) {
    return col < world[row].length - 1;
}

function hasRightLivingNeighbor(world, row, col) {
    return world[row][col + 1];
}
function World() {
    this.getCells = () => [[]];
    this.evolves = ()=>{}
}
const DEAD = false;

function gameOfLife(world) {
    // let nextWorld = [[]];
    // let cells = world.getCells();
    // for (let row = 0; row < cells.length; row++) {
    //     for (let col = 0; col < cells[row].length; col++) {
    //         let livingNeighbors = countLivingNeighbor(cells,row,col);
    //         nextWorld[row][col] = livingNeighbors < 2 ? DEAD : cells[row][col];
    //     }
    // }
    return world;
}

function countLivingNeighbor(world, row, col) {
    let count = 0;
    if (cellHasLeftNeighbor(col) && hasLeftLivingNeighbor(world, row, col)) count++;
    if (cellHasRightNeighbor(world, row, col) && hasRightLivingNeighbor(world, row, col)) count++;
    return count
}
