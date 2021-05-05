var size;           // requires size
var data = [];      // array from [0, 1,..., size]
var edges = [];     // requires pairs of connected nodes

const adjancencyList = new Map();
for(var i = 1; i <= size; i++) {
    adjancencyList.set(i, []);
}

function addEdge(s, e){
    adjancencyList.get(s).push(e);
    adjancencyList.get(e).push(s);
}

data.forEach(addNode);
edges.forEach(edge => addEdge(...edge));