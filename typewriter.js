const sentence = "hello there from lighthouse labs.";
let x = 0;

for (const char of sentence) {

	setTimeout(() => {
		process.stdout.write(char);
	}, x);
	x += 50;

}
/*  using for loop

for(let i = 0; i < sentence.length; i++){
setTimeout(() => {
		process.stdout.write(sentence[i]);
}, i * 50);



}
*/
setTimeout(() => {
	console.log('\n');

}, 3000);
