const [, , first, second] = Process.argv;

if (first === undefined || second === undefined) {
    console.log("No argument");
} else {
    console.log(`${first} is ${second}`);
}