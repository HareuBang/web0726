class Unit {
  constructor(name, hp, att) {
    this.name = name;
    this.hp = hp;
    this.att = att;
  }

  attack(target) {
    target.hp -= this.att;
    console.log('Unit attack()');
  }

  getInfo(){
    console.log(`name : ${this.name} hp : ${this.hp} att : ${this.att}`);
  }
}

class Monster extends Unit {}

const monster = new Monster('슬라임', 20, 5);
const monster2 = new Monster(`리본돼지`, 50, 10);

monster.getInfo();

monster.attack(monster2);
monster2.getInfo();