class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        ++this.size;
    }

    insertLast(data){
        let node = new Node(data);
        let cur;

        if (!this.head){
            this.head = node;
        } else {
            cur = this.head;
        }

        while (cur.next){
            cur = cur.next;
        }

        cur.next = node;
        ++this.size;
    }

    insertAt(data, i){
        // Error Handling
        if (i > this.size){
            console.log("List index out of bound.");
            return;
        }

        // Base Case; Peforming the same way as "insertFirst()"
        if (i == 0){
            this.head = new Node(data, this.head);
            return;
        }

        // Stores it as a node for it to be connected to other nodes
        const node = new Node(data); 

        let cur, prev;
        cur = this.head;
        
        for (var c = 0; c < i; ++c){
            // "prev" tracks the node and stores the list that comes afterwards.
            // "cur" tracks the node, which comes after "prev"'s stored node.
            prev = cur;
            cur = cur.next;
        }

        // "cur" is now stores a node that comes after data.
        // "prev" will become a node before data.
        // "node" will be placed between "cur" and "prev".
        node.next = cur;
        prev.next = node;
    }

    printListData(){
        let current = this.head;
        let elements = new Array();
        let len = 0;

        while(current != null){
            elements.push(current.data);
            current = current.next;
            len += 1;
        }
        
        process.stdout.write("Elements: ")
        for (var i in elements){
            process.stdout.write(elements[i] + " ");
        }
        process.stdout.write('\n');
        console.log("Length: ", len);
    }
}


const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertLast(3);
ll.insertLast(5);
ll.insertAt(4, 2);
ll.printListData();