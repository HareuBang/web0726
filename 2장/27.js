class Human {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(this.name);
  }

  sayAge() {
    console.log(this.age)
  }
}

class Developer extends Human{
  constructor(name, age, language){
    super(name, age);
    this.language = language;
  }

  showLanguage() {
    console.log(this.language);
  }
}

const dev = new Developer('park', 25, 'JS');
dev.sayName();
dev.sayAge();
dev.showLanguage();