function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["John", "Jane"];

console.log(greeter(user)); //This will now work correctly because the function accepts both a string and an array of strings.