interface Person {
  name: string;
  age: number;
  email: string;
}

const persons: Person[] = [
  { name: "arfan", age: 22, email: "arfan@gmail.com" },
  { name: "ruman", age: 22, email: "ruman@gmail.com" },
];

function findByEmail(persons: Person[], email: string): Person | null {
  const person = persons.find((person) => person.email === email);
  if (!person) return null;
  return person;
}

const getResult = findByEmail(persons, "arfan@gmail.com");
console.log(getResult);
