function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["John", "Jane"];

console.log(greeter(user)); //This will throw an error because the function expects a string, not an array of strings.