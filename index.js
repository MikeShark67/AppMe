let call = require(`readline`)
let soma = call.createInterface({
  input: process.stdin,
  output: process.stdout,
});
soma.question("What's your favourite City?", Kisumu => {
  console.log(`Fav City: ${Kisumu}`)
  
soma.question("What's your favourite Show?", Kamum=> {
  console.log(`Fav City: ${Kamum}`);
  soma.close(2);
});});

