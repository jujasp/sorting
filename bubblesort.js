function swap(el1, el2) {
	return el1 > el2 ? true : false;
}


function bubbleSort(array) {
	var swappedArray = array.slice();
	var swappedArrayLength = swappedArray.length;

	if(array.length === 1) {
		return array; 
	};

	while(swappedArrayLength > 1) {
		for(var i=1; i<swappedArrayLength; i++) {
			if(swap(swappedArray[i-1], swappedArray[i])) {
				console.log(swappedArray)
				var prev = swappedArray[i-1];
				var next = swappedArray[i];

				swappedArray[i-1] = next;
				swappedArray[i] = prev;
			}
		}
		swappedArrayLength--;
	}

	return swappedArray;

}