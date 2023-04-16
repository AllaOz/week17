# week17

Week17

1. Чем отличается класс от объекта? Приведите примеры и того, и другого. Класс – шаблон кода по которому создается какой-то объект, а объект конкретное воплощение и экземпляр класса состоящий из пар ключ-значение. Ex. Класс техника, объект – телевизор, класс – цветы объект - роза
   class Flower {
   constructor(name, color, petals) {
   this.name = name;
   this.color = color;
   this.petals = petals;
   }
   get() {
   console.log(`The ${this.color} ${this.name} has been watered.`);
   }
   }
   const Rose = new Flower('Rose', 'red', 5);
   Rose.water(); // The red Rose has been watered.

class Electronics {
constructor(type, brand, model, price) {
this.type = type;
this.brand = brand;
this.model = model;
this.price = price;
}
getPrice() {
return this.price;
}
}
class TV extends Electronics {
constructor(brand, model, screenSize, price) {
super('TV', brand, model, price);
this.screenSize = screenSize;
}
}
const SamsungTV = new TV('Samsung', 'QLED', 65, 2000);
console.log(SamsungTV.getPrice()); // 2000;

2. Приведите примеры объектно-ориентированного подхода в реальной жизни.
   Кафе: классы Кафе (название, адрес), Блюдо (название, ингредиенты, цена)
   Больница: классы Больница (название, адрес), Отделения (Врачи, Дни приема, Даты)
   Приведите примеры объектно-ориентированного подхода в программировании.
   Регистрация пользователей в системе: классы Пользователь(имя, электр адрес, пароль), Подписки(смс уведомления, уведомления по электр почте)
   Управление проектами: классы Проект (название, описание, статус, дата начала), Задача (название, описание, статус, дедлайн), Сотрудник (имя, электронная почта, должность)

3. Конструкторы используются для создания объектов с заданными свойствами
   Функциональный
   function Person(name, age) {
   this.name = name;
   this.age = age;
   }
   let person1 = new Person('John', 25);
   Классы
   class Person {
   constructor(name, age) {
   this.name = name;
   this.age = age;
   }
   }
   let person1 = new Person('John', 25);
   Они также используются для создания новых объектов с помощью оператора new, но в отличие от функциональных конструкторов, они имеют ключевые слова class, constructor, и extends (для наследования).

4. function bike(){
   console.log(this.name)
   }
   let name = 'Ninja';
   let object1 = {name: "Pomidor", bike: bike};
   let object2 = {name: "site", bike: bike};
   bike() - происходит потеря контекста поэтому ничего не выводится?
   object1.bike() // Pomidor
   object2.bike() // bike
5. Чем статические свойства и методы отличаются от нестатических? В каких ситуациях они применяются? Cтатические методы определяют поведение всего класса, нестатические – объекта. Нестатические this, статические static

6. Самостоятельно изучите, что такое геттеры и сеттеры, приведите пример класса с их использованием.
   Геттер — это функция, которая создаётся для того, чтобы дать возможность внешнему коду узнать его значение. Обычно названия начинаются с глагола get.
   Сеттер — это функция, которая создаётся для записи значения свойства. Обычно названия начинаются с глагола set.
   class Person {
   constructor(name) {
   this.name = name;
   }

set fullName(value) {
this.name = value;
}

get fullName() {
return this.name;
}
}
const person = new Person('Joe Dale');
console.log(person.fullName); // "Joe Dale"

person.fullName = 'Jane Smith';
console.log(person.fullName); // "Jane Smith"

7. class Person {
   constructor(name) {
   this.name = name;
   }
   }
   const member = new Person("John")
   console.log(typeof member)// object – потому что member - экземпляр Person, а Person - оbject?
8. const person = {
   name: 'Valera',
   age: 23
   }
   let city = person.city;
   city = "Amsterdam";
   console.log(person) // {
   "name": "Valera",
   "age": 23
   } У объекта person нет свойства city и когда объявляеся сity = “Amsterdam” она не затрагивает person?
