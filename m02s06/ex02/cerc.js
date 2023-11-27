const params = process.argv;
const [, , radius] = params;

console.log(`Suprafata cercului este: ${Math.PI * Math.pow(radius, 2)}`);
