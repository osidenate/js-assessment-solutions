exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index = -1;

    arr.some(function(currentItem, currentIndex) {
      if (currentItem === item) {
        index = currentIndex;
        return true;
      }
    });

    return index;
  },

  sum : function(arr) {
    return arr.reduce(function(acc, curr) {
      return acc + curr;
    })
  },

  remove : function(arr, item) {
    return arr.filter(function(currentItem) {
      return currentItem !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);

    if (index === -1) {
      return arr;
    }

    arr.splice(index, 1);

    return this.removeWithoutCopy(arr, item);
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.length = arr.length - 1;
    return arr;
  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
