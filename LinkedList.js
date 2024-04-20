import { Node };

class LinkedList {
    let head, tail;
    constructor(null) {
        head = null;
        tail = null;
    }
    append(value) {
        let newNode = new Node(value);
        if (!head) {
            tail = head = newNode;
        } else {
            let curr = head;
            while (curr !== null) {
                if (curr.next === null) {
                    curr.next = newNode;
                    tail = newNode;
                } else {
                    curr = curr.next;
                }

            }
        }
    }
    prepend(value) {
        if (!head) {
            head = value;
        } else {
            let newNode = new Node(value);
            newNode.next = head;
            head = newNode;
        }
    }
    size() {
        let count = 0;
        let curr = head;
        while (curr !== null) {
            count++;
            curr = curr.next;
        }
        return count;
    }
    head() {
        return head;
    }
    tail() {
        return tail;
    }
    at(index) {
        let count = 0;
        let curr = head;
        while (curr !== null) {
            if (count === index) {
                return curr.data;
            }
            count++;

        }
    }
    pop() {
        let popped, curr = head;
        while (curr !== null) {
            if (curr.next === tail) {
                popped = tail
                curr.next = null;
                tail = curr;
                return popped;
            } else {
                curr = curr.next;
            }
        }
    }
    contains(value) {
        let curr = head;;
        while (curr !== null) {
            if (curr.data === value) {
                return true;
            }
        }
        return false;
    }
    find(value) {
        let curr = head,
            count = 0;

        while (curr !== null) {
            if (curr.data === value) {
                return count;
            }
            curr = curr.next;
            count++;
        }
        return null;
    }

    toString() {
        let curr = head,
            str = "";
        while (curr !== null) {
            if (curr.next === null) {
                str += '(' + curr.next + ') -> ';
            } else {
                str += '(' + curr.data + ') -> ';
            }

            curr = curr.next;
        }
    }