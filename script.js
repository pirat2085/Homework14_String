//TASK1 + TASK2
let SpanStr = document.getElementById("ReverseSpan");
let strInput = document.getElementById("str1");

function PalindromStr() {
    const str = strInput.value.toLowerCase().trim();
    const res = isPalindrome(str);
    SpanStr.textContent = (res==='true')?"Palindrom":"Not a Palindrome";

}

function isPalindrome(str) {
    const reverseStr = reverseString(str);
    return (str === reverseStr)? "true":"false";
}

function reverseString(text) {
    return text.split('').reverse().join('');
}

//TASK3
let chartInput = document.getElementById("str2");
function countChart() {
    const text = strInput.value;
    const character = chartInput.value;
    const res = countChr(text,character);
    console.log(res);
}

function countChr(str,c) {
    let count=0;
    for (let i=0; i<=str.length-1; i++){
        if (str.charAt(i)=== c) {
            count++;
        }
    };
    return count;

}