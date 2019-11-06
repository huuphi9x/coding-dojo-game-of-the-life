QUnit.test("test get cells function", function (assert) {
    let currentWorld = new World(0,0);
    let expectedCells = [[]];
    assert.deepEqual(currentWorld.getCells(), expectedCells, "Passed!");
});
QUnit.test("test death world", function (assert) {
    let world = new World(0,0);
    world.evolves();
    let expectedCells = [[]];
    const actualCells = world.getCells();
    assert.deepEqual(actualCells, expectedCells, "Passed!");
});

QUnit.test("test a world with a lonely cell will be a death world!", function (assert) {
    let currentWorld = [[true]];
    let nextWorld = gameOfLife(currentWorld);
    let expectedWorld = [[false]];
    assert.deepEqual(nextWorld, expectedWorld, "Passed!");
});
/*
QUnit.test("test a living cell with two neighbour will survive!", function (assert) {
    let currentWorld = [[true, true, true]];
    let nextWorld = gameOfLife(currentWorld);
    let expectedWorld = [[false, true, false]];
    assert.deepEqual(nextWorld, expectedWorld, "Passed!");
});
*/

