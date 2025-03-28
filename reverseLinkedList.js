function reverseLinkedList(head) {
    let prev = null;
    let curr = head;

    while(curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
}
    return prev;

}

const linkedList = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: null,
		}
	}
};

console.log(reverseLinkedList(linkedList));