//Write a function which takes an array of numbers and returns the minimum of that array.
//[3,4,5] -> 3
//[2, -30] -> -28

function minimum(arr) {
	var minSoFar = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < minSoFar) {
			minSoFar = arr[i];
		}
	}
	return minSoFar;
}

console.log(minimum([3, 4, 5]) == 3);
console.log(minimum([2, -30]) == -30);

//Write a function which takes an array of numbers and returns the maximum of that array.
//[3,4,5] -> 5
//[-10, 2] -> 2

function maximum(arr) {
	var maxSoFar = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > maxSoFar) {
			maxSoFar = arr[i];
		}
	}
	return maxSoFar;
}

console.log(maximum([3, 4, 5]) == 5);
console.log(maximum([2, -30]) == 2);

//Write a function which takes an array of numbers and returns the average of that array.
//[2, 4, 6] - > 4
//[0, 0, 0, 10] -> 2.5

function average(arr) {
	"use strict"
	var num = 0;
	var sum = 0;
	var avg = 0;
	for (var i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		num++;
		avg = sum / num;
	}
	return avg;
}

console.log(average([2, 4, 6]) == 4);
console.log(average([0, 0, 0, 10]) == 2.5);

//Write a function which takes an array of integers > 0 and returns  the first integer which does not appear in that array.
//[1,2,5] -> 3
//[1,2,3,4,5] -> 6


function finder(arr) {
	"use strict";
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i] + 1) != arr[i + 1]) {
			return arr[i] + 1;
		}

	}
}

console.log(finder([1, 2, 5]) == 3);
console.log(finder([1, 2, 3, 4, 5]) == 6);

//Write a function which takes an array of integers and returns an array with any duplicate integers removed.
//[1,1,2,3,1,2,3] -> [1,2,3]
//[1,4,4,4,2,2,4,4,4] -> [1,4,2]

console.log("I HAVE NOT COMPLETED 5 AND 6")

//********** NOT WORKING CODE*********
//function dupenot(arr) {
//	for (var i = 0; i < arr.length; i++) {
//		for (var j = 0; j < newArr.length; j++) {
//			if (arr[i] = newArr[j]) {
//				if (!found) {
//					newArr[newArr.length] = arr[i];
//				}
//		}
//		return newArr[];
//	}
//}
//
//dupenot(([1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 7]) = [1, 2, 3, 4, 5, 6, 7]);
//function dupsRemoved2 (list) {
//    var cleanList = [];
//    for (var i = 0; i < list.length; i++) {
//        if (cleanList.indexOf(list[i]) == -1) {
//            cleanList.push(list[i]);
//        }
//    }
//    return cleanList;
//}
//console.log(dupsRemoved2([1,1,2,3,1,2,3]).toString() == [1,2,3].toString());
//console.log(dupsRemoved2([1,4,4,4,2,2,4,4,4]).toString() == [1,4,2].toString());
//function dupeNot(arr) {
//    var newArr = [];
//    for (var i = 0; i < arr.length; i++) {
//        if (newArr.indexOf(arr[i]) == -1) {
//            newArr.push(arr[i]);
//        }
//    }
//    return newArr;
//}
//console.log(dupeNot([1,1,1,2,2,2,3,4,5,5,6,6,7,7,7,7,8,8,9]));
//********** END NOT WORKING CODE*********

//****** WORKING CODE COMMENTED OUT **********
//function removeDupes(arr) {
//	"use strict";
//	var newArr = [];
//	for (var i = 0;i < arr.length;i++){
//		var lookingFor = arr[i];
//		var foundIt = false;
//		for (var j = 0;j < newArr.length;j++){
//			if (newArr[j] == lookingFor) {
//				foundIt = true;
//			}
//		}
//		if (!foundIt) {
//			newArr[newArr.length] = lookingFor;
//		}
//	}	
//	console.log(arr, newArr);
//	return newArr;
//}
//
//
//function cmpArr(arrA, arrB) {
//	"use strict";
//	/*GUARD ARRAY*/
//	if (arrA.length != arrB.length){
//		return false;
//	}
//	for (var i = 0; i < arrA.length; i++) {
//		if (arrA[i] != arrB[i]) {
//			return false;
//		}
//	}
//	return true;
//}
//
//console.log(cmpArr([0], [0]) == true);
//console.log(cmpArr([1, 2, 3], [1, 3, 2]) == false);
//console.log(cmpArr([0], [1]) == false);
//console.log(cmpArr([], []) == true);
//console.log(cmpArr([0, 1, 2], [0, 1, 2]) == true);


//IF WE DONT FIND THE ELEMENT WE ARE LOOKING FOR, THE -1 THIS IS A QUARK OF INDEX IN JAVSCRIPT ***************

//function removeDupes(arr) {
//	"use strict";
//	var newArr = [];
//	for (var i = 0;i < arr.length;i++){
//		if (newAr..indexOf(arr[i] == -1)) {
//			newArr.push(arr[i]);
//			}
//		}
//		if (!foundIt) {
//			newArr[newArr.length] = lookingFor;
//		}
//	}	
//	console.log(arr, newArr);
//	return newArr;
//}
//
//
//function cmpArr(arrA, arrB) {
//	"use strict";
//	/*GUARD ARRAY*/
//	if (arrA.length != arrB.length){
//		return false;
//	}
//	for (var i = 0; i < arrA.length; i++) {
//		if (arrA[i] != arrB[i]) {
//			return false;
//		}
//	}
//	return true;
//}