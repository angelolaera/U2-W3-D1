class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static theOldest(user1, user2) {
    if (user1.age > user2.age) {
      console.log("Il più grande tra i due è: " + user1.firstName + " " + user1.lastName);
    } else if (user1.age < user2.age) {
      console.log("Il più grande tra i due è: " + user2.firstName + " " + user2.lastName);
    } else {
      console.log("Entrambi hanno la stessa età: " + user1.age + " anni");
    }
  }
}

const angeloLaera = new User("Angelo", "Laera", 29, "Noci (BA)");
const jackSparrow = new User("Jack", "Sparrow", 50, "New York");

User.theOldest(angeloLaera, jackSparrow);
