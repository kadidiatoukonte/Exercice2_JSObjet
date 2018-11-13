let Builder = function(name, attack_value, a_health_value){
  this.name = name;
  this.attack_value = attack_value;
  this.a_health_value = a_health_value;
  this.fight = function(a_health_value_level){
    let hello = a_health_value_level - attack_value;
    return 'hello';
  }
}

A = new Builder("name", 30, 2);
console.log(A);
B = new Builder("name", 5, 5);
console.log(B);


var Builder2 = function(name, attack_value, a_health_value){
  this.name = name;
  this.attack_value = attack_value;
  this.a_health_value = a_health_value;
  this.magician = function(a_health_value_level, magic){
    let hello = a_health_value_level - attack_value;
    return 'hello';
    this.magic = magic
    this.care = function(magic){
      if (magic > 20) {
        let car = ((20 - magic) + (10 + magician));
        return 'car';
      }
    }
  }
}
C = new Builder2("magic");
console.log(C);
// Dune méthode de soin qui consomme 20 de magie mais rajoute 10 de vie au magicien
// (attention si la magie est inférieure à 20, la méthode ne doit pas pouvoir être lancée)
