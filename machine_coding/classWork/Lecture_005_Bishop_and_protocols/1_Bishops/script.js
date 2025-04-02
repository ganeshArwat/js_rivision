let YELLOW_COLOR = "yellow";
let BLACK_COLOR = "black";
let WHITE_COLOR = "white";


window.addEventListener("load", function () {
    let table = this.document.querySelector("#table");
    let N = 8, M = 8;
    let player = "bishop";

    // chess grid creation.
    // ri: row index, ci : column index.
    for (let ri = 0; ri < N; ri++) {
        let tr = this.document.createElement("tr");
        let isWhite = ri % 2 === 0;

        for (let ci = 0; ci < M; ci++) {
            let cell = this.document.createElement("td");
            cell.setAttribute("class", `box ${isWhite ? WHITE_COLOR : BLACK_COLOR}`);
            cell.setAttribute("data-index", `${ri}-${ci}`)

            tr.appendChild(cell);
            isWhite = !isWhite;
        }
        table.appendChild(tr);
    }

    hoverEffect(table, N, M,player);
});


function hoverEffect(table, N, M,player) {
    let boxArr = document.querySelectorAll(".box");

    mouseOverEffect(table, boxArr, N, M,player);
    mouseLeaveEffect(table, boxArr);
}

function mouseOverEffect(table, boxArr, N, M,player) {
    table.addEventListener("mouseover", (event) => {
        let dataIndex = event.target.dataset.index;
        if (dataIndex === undefined) {
            return;
        }
        removeYellowColorFromAllCells(boxArr);
        // console.log(dataIndex);
        let [curr_row, curr_col] = dataIndex.split("-").map(idx => idx);
        // console.log(curr_row, curr_col);


        storageOfPossibleMoves = possibleMoves(parseInt(curr_row), parseInt(curr_col), N, M,player);
        // storageOfPossibleMoves = { '3-3': true, '4-3': true, '5-2': true, '5-3': true, '5-4': true, '6-3': true };
        colorMyPossibleMoves(storageOfPossibleMoves, boxArr);
    });
}

function mouseLeaveEffect(table, boxArr) {
    table.addEventListener("mouseleave", () => {
        removeYellowColorFromAllCells(boxArr);
    })
}

function removeYellowColorFromAllCells(boxArr) {
    for (let boxCell of boxArr) {
        boxCell.classList.remove(YELLOW_COLOR);
    }
}

function colorMyPossibleMoves(storageOfPossibleMoves, boxArr) {
    for (let boxCell of boxArr) {
        let curr_dataIndex = boxCell.dataset.index;
        if (storageOfPossibleMoves[curr_dataIndex]) {
            console.log(curr_dataIndex);
            boxCell.classList.add(YELLOW_COLOR);
        }
    }
}

function possibleMoves(curr_row, curr_col, N, M,player) {
    let direction = getDirectionVector(player)
    let maxRadius = getMaxiumRadius(player,N, M )
    let storageOfPossibleMoves = {};

    storageOfPossibleMoves[`${curr_row}-${curr_col}`] = true;
    for (let dir of direction) {
        for (let radius = 1; radius <= maxRadius; radius++) {
            let r = curr_row + radius * dir[0];
            let c = curr_col + radius * dir[1];

            if (r >= 0 && c >= 0 && r < N && c < M) {
                let dataIndex = `${r}-${c}`;
                storageOfPossibleMoves[dataIndex] = true;
            } else {
                break;
            }
        }
    }

    return storageOfPossibleMoves;
}

function getDirectionVector(player) {
    if (player === "bishop") {
        return [[1, 1], [-1, 1], [1, -1], [-1, -1]];
    } else if (player === "queen") {
        return [[1, 1], [-1, 1], [1, -1], [-1, -1], [0, 1], [1, 0], [0, -1], [-1, 0]];
    } else if (player === "rook") {
        return [[0, 1], [1, 0], [0, -1], [-1, 0]];
    } else if (player = "knight") {
        return [
            [-2, -1], [-1, -2], [1, -2], [2, -1],  // Up-left, Up-right
            [-2, 1], [-1, 2], [1, 2], [2, 1]       // Down-left, Down-right
        ];
    }
}

function getMaxiumRadius(player, N,M) {
    let maxRadius = Math.max(N,M);
    if (player === "bishop") {
        return maxRadius;
    } else if (player === "queen") {
        return maxRadius;
    } else if (player === "rook") {
        return maxRadius;
    } else if (player = "knight") {
        return 1;
    }
}