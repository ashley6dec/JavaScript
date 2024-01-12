
//-----------------string reversal

// function reversal(str){
//     let ans="";
// for(let a=str.length-1;a>=0;a--)
// {
//       ans += str[a];
     
// }     
// console.log(ans);
// }

// reversal("abcdefgh");



//---------------valid anagram

// const isAnagram = (s,t) => ( [...s].sort().join('') === [...t].sort().join(''))

// console.log( isAnagram('abcddcba', 'abcdabcd') )  // true
// console.log( isAnagram('abcd', 'bcds') )     // false



//------------------Array intersection

// const arr1 = ['a','c','s','f','g'];
// const arr2 = ['c','d','e','f','h'];

// for(let a = 0;a < arr1.length; a++){
//     if(arr2.includes(arr1[a]))
//        console.log(arr1[a]);

// }



//---------------String Palindrome

// function isPalindrome(str) {
//     var non_alpha_num = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(non_alpha_num, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }
//   console.log(isPalindrome("A man, a plan, a canal. Panama"));



//----------------Array Rotation

// const rotateArray = (arr, k) => arr.slice(arr.length-k).concat(arr.slice(0,arr.length-k));
// console.log(rotateArray("abcdefgh",2));


//-------------String Compression

// function stringCompressed(str){
//   let count = {};
//   for(ch of str){
//     if(count[ch]){
//       count[ch]++;
//     }else{
//       count[ch] = 1;
//     }
//   }

  
//   let compressedString = '';
//   for(let a in count){
  
//     compressedString += a + count[a];
//   }
//   return compressedString;
  
// }
// console.log(stringCompressed("saabcccccaaa"));



//---------------------Array Sum

// const twoSum = ((arr, value) => {
//     let result = [];
//     for(let i= 0; i< arr.length-1; i++) {
//         if(arr[i] > value) {
//             continue;
//         }
//         if(arr.includes(value-arr[i])) {
//             result.push(arr[i]);
//             result.push(value-arr[i]);
//             break;;
//         }   
//     }
//       return result;
//     });
//     let arr = [20,10,40,50,60,80,30];
//     const value = 140;
//     console.log(twoSum(arr, value));

    //---------------Longest Substring Without Repeating Characters
    function lengthOfLongestSubstring(s) {
        if(s.length < 2) {
            return s.length;
        }
        
        let max = 1;
        let currentStr =  '';
        
        for(let i=0 ; i < s.length ; i++){
            if(currentStr.includes(s.charAt(i))){
               let firstSeen = currentStr.indexOf(s.charAt(i));
                currentStr = currentStr.substring(firstSeen+1,currentStr.length);   
    
            }
              currentStr += s.charAt(i);
              max = Math.max(currentStr.length,max);
 
        }
         
        return max;
    };
    
        console.log(lengthOfLongestSubstring("pwwaabcdeefa"));