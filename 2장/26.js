class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfor() {
    console.log(`이름 : ${this.name} 나이 : ${this.age}`);
  }
}

new Human('kim', 25).getInfor();