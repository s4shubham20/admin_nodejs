import 'dotenv/config';
import {app} from './app.js'

import { dbConnect } from './db_connection/dbConnect.js';

// dbConnect().then(res => {
// 	app.listen(process.env.PORT, () => {
// 		console.log('Server running on', process.env.PORT);
// 	});
// })
// .catch(error => {
// 	console.log(error)
// });

let array = [12,12,101,11,16,19,2,15,66,46,5,3,100];
let arr = [21,35,25];
let max = array[0];
for(let i=0; i < array.length; i++){
	if(array[i] < max){
		max = array[i];
	}
}

// console.log(max)
// array merge in js
let arrMerge = [];
for(let i=0; i < array.length; i++){
	arrMerge[i] = array[i];
}
for(let i=0; i < arr.length; i++){
	arrMerge[array.length + i] = arr[i];
}
// console.log(arrMerge);

//merge multi dimensional array in one array;

let multiArr = [21,11,15,19,100,[12,26,36,[12,254,56]],[2,0,5,45], 101];
console.log('length of multiArray :',multiArr.length);
let mergeArray = [];
let j=0;
for(let array of multiArr){
	if(!Array.isArray(array)){
		mergeArray[j] = array;
		j++;
	}else{
		for(let arr of array){
			if(!Array.isArray(arr)){
				// console.log(arr);
				mergeArray[j] = arr;
				j++;
			}else{
				for(let arrayVal of arr){
					mergeArray[j] = arrayVal;
					j++;
				}
			}
		}
	}
}

console.log(mergeArray.length)
console.log(mergeArray);

