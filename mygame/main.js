let cube = {
    id: 'cube',
    x: 300,
    y: 300,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'orange'
}

let map = {
    x: 100,
    y: 100,
    width: 470,
    height: 470,
    color: '#f5f5f5',
    border: '#f1f1f1'
}

renderMap(map);
renderCube(spawnCube(map, cube));