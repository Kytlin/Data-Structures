var n;          // requires 'n'
var tree = new Array(2 * n + 1);
var arr = [];   // requires inputs

function minTree(node, s, e) {
    if (s == e) {
        tree[node] = nodeDepth[e];
        return;
    }

    var mid = Math.floor((s + e) / 2);
    console.log(s, mid);
    console.log(e, mid);
    minTree(2 * node, s, mid);
    minTree((2 * node) + 1, mid + 1, e);
    tree[node] = Math.min(tree[2 * node], tree[(2 * node) + 1]);
}

function update(node, s, e, idx, val)
{
    if (s == e)
    {
        arr[idx] += val;
        tree[node] += val;
    }
    else
    {
        var mid = (s + e) / 2;
        if ((s <= idx) && (idx <= mid))
        {
            update(2 * node, s, mid, idx, val);
        }
        else
        {
            update((2 * node) + 1, mid + 1, e, idx, val);
        }
        tree[node] = Math.min(tree[2 * node], tree[(2 * node) + 1]);
    }
}

function query(node, s, e, l, r) {
    if ((r < s) || (e < l)) {
        return 1000001;
    }
    if ((s >= l) && (e <= r)) {
        return s;
    }
    var mid = Math.floor((s + e) / 2);
    var p1 = query(2 * node, s, mid, l, r);
    var p2 = query((2 * node) + 1, mid + 1, e, l, r);
    return Math.min(p1, p2);
}