import type {Position} from "./board";

const a: Position = {row: 5, col: 10};

console.log("Res: " + JSON.stringify(generateMatrix(a), null, 2));

function generateMatrix(matrix: Position){
    const result = [];
    for(let y = 0; y < matrix.row; y++)
    {
        for(let x = 0; x < matrix.col; x++)
        {
            result.push({x: x, y:y})
        }
    }
    return result;
}