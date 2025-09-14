const [, , input] = process.argv;         
const num = parseInt(input, 10);        

if (Number.isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}