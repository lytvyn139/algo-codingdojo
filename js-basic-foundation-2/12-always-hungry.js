/* Always Hungry - 
Create a function that accepts an array, 
and prints "yummy" each time one of the values is equal to "food".  
If no array values are "food", then print "I'm hungry" once. */

const arr = ['food', 'meh', 2, 3, 'food', 'feed'];

alwaysHungry = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'food') {
      console.log('yummy');
    } else console.log('I\'m hungry ones');

  }
}

alwaysHungry(arr);