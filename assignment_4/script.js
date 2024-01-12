
//--------remove duplicates
// var removeDuplicates = function(s) {
//     let stack = [];

// 	for (let i = 0; i < s.length; i++) {
// 		if (s[i] === stack[stack.length - 1]) {
// 			stack.pop();
// 		} else {
// 			stack.push(s[i]);
// 		}
// 	}
// 	return stack.join("");
// };
// console.log(removeDuplicates("aaaddchs"));



//------------check anagram
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     const freqS = new Array(26).fill(0);
//     const freqT = new Array(26).fill(0);

//     const charCodeA = 'a'.charCodeAt(0);

//     for (let i = 0; i < s.length; i++) {
//         freqS[s.charCodeAt(i) - charCodeA]++;  //to get value from 1 to 26 of char (ch-'a')
//         freqT[t.charCodeAt(i) - charCodeA]++;
//     }

//     for (let i = 0; i < 26; i++) {
//         if (freqS[i] !== freqT[i]) {
//             return false;
//         }
//     }

//     return true;
// };

// console.log(isAnagram("parrot","tarro"));
// console.log(isAnagram("parrot","tarrop"));


//----------decode string
const decodeString = (s) => {
    let stack = []
    let substring = ''
    let num = ''
    for (let char of s) {
      //pushes char until the next closing bracket is found
        if (char !== "]") {
            stack.push(char)
            continue
        }

        substring = ''
        num = ''
        //takes the letters off the stack and then adds them to the front of subtring 1 by 1, until the opening bracket is found
        while (stack[stack.length - 1] !== "[") {
            substring = stack.pop() + substring
        }
        //gets rid of the opening bracket from a section (e.g. 3[a] or 2[bc])
        stack.pop()
        //finally checks to see if the last item from stack is a number then push it to num
        while (!isNaN(stack[stack.length - 1])) {
            num = stack.pop() + num
        }
        //assembles the portion of the final version of the string
        let segment = substring.repeat(Number(num))
        //adds to stack translated string
        stack.push(segment)
    }
    //joins all stack items
    return stack.join('')
}

console.log(decodeString("3[a]2[bc]"));