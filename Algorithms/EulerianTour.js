// Requires graph to use this algorithm

var eulerTourSize = 2 * n - 1; // requires input 'n'
var nodeOrder = [];
var nodeDepth = [];
var last = [];
var tourIndex = 0;
var visited = new Array(7).fill(false);


function visit(node) {
    visited[node] = true;
    nodeOrder[tourIndex] = node;
    nodeDepth[tourIndex] = depth;
    last[node] = tourIndex;
    tourIndex++;
}

function dfs(node, depth) {
    if (node == null) {
        return;
    }

    visit(node);
    for (var next of g.get(node)) {
        if (!visited[next]) {
            dfs(next, depth + 1);
            visit(node);
        }
    }
}

function printEulerTour(s) {
    var index = 0;
    dfs(s, index);
    for (var i = 0; i < eulerTourSize; ++i) {
        console.log(nodeOrder[i])
    }
}