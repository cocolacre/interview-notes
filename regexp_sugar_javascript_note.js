var pattern1 = /somepattern/i
/* i means search for somepattern case-insensitive way */
var text1 = "somepattern"
var text2 = "somepatterN"
var text3 = "Somepattern"
var pattern2 = /[sS]omepattern/
var result1_1 = text1.match(pattern1)
var result1_2 = text1.match(pattern2)
var result2_1 = text2.match(pattern1)
var result2_2 = text2.match(pattern2)
var result3_1 = text3.match(pattern1)
var result3_2 = text3.match(pattern2)
console.log(result1_1) /* somepattern */
console.log(result1_2) /* somepattern */
console.log(result2_1) /* somepatterN */
console.log(result2_2) /* None */
console.log(result3_1) /* Somepattern */
console.log(result3_2) /* Somepattern */

/* var result1 = text1.match(pattern1) */
/* var result2 = text1.match(pattern2) */
