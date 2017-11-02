describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});


describe('Bubble Sort', function(){
  it('handles an array with one item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
});

describe('Bubble Sort', function(){
	var arr = [4,5,1]
  it('handles an array with multiple items', function(){
    expect( bubbleSort(arr) ).toEqual( [1,4,5] );
  });
});

it('bubblesort runs once', function() {
       spyOn(window, 'bubbleSort').and.callThrough();
       bubbleSort([5]);
       expect(bubbleSort.calls.count()).toEqual(1);
     });
     it('swap runs once on an arr of size __________', function() {
       spyOn(window, 'swap').and.callThrough();
       bubbleSort([4, 5, 1]);
       expect(swap.calls.count()).toEqual(3);
});