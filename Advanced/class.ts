class Animal {
  private name;
  public constructor(name: string) {
    this.name = name;
  }
}
let abc: Animal
abc = new Animal('jack');
// console.log(abc.name);
// abc.name = 'Tom';

// ts中类的三个关键字：public private protected

class Animal2 {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal2 {
  constructor(name) {
    super(name);
    console.log(this.name)
  }
}

// ts的抽象类关键字 abstract
// 抽象类不允许实例化，只定义方法名和变量名 但不会具体赋值

abstract class Person {
  public names: string;
  public constructor(names: string) {
    this.names = names;
  }
  public abstract sayHi();
}

class Karl extends Person {
  public eat(): void {
    console.log(`${this.names} is eating.`)
  }
  public sayHi():string {
    return `I am ${this.names}, Hi`
  }
}

// 接口类型，用于定义类/函数/接口 可以继承
// ts改动最好的部分就是类与接口 以及泛型相关 要多看一下

// 一般情况下一个类只能继承自另外一个类，不同类之间可能有些共同特性，从而把特性提取成接口，用implements关键字来实现

interface Alarm {
  alert();
}

class Door {

}

class SecurityDoor extends Door implements Alarm {
  alert(): void {
    console.log('SecurityDoor alert')
  }
}

interface Light {
  lightOn: (x?, y?) => void;
  lightOff: () => void;
}

class Car implements Alarm, Light {
  alert() {
    console.log('car alert')
  }
  lightOn() {
    console.log('open car light')
  }
  lightOff() {
    console.log('turn car light off')
  }
}

interface LightableAlarm extends Alarm, Light { //接口可以继承其他多个接口
  x: number
}

class plane implements LightableAlarm {
  x=1;
  alert() {
    console.log('plane alert')
  }
  lightOn() {
    console.log('open plane light')
  }
  lightOff() {
    console.log('turn plane light off')
  }
}

// 接口高级用法，用于定义一个函数需要的形状(也即指定函数这个对象需要挂载的某些变量和方法) 大招
// 函数本质也是对象  表现得淋漓尽致

interface Counter { // 注意这三种写法
  (start: number): string; //这种写法表征这个满足这个接口的变量本身得是一个函数 括号里面是参数，返回是字符串
  interval: number; // 这个函数变量自身要挂载interval这个变量
  reset(): void; // 这个函数变量自身要挂载reset这个方法
}

function getCounter(time: number): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = time;
  counter.reset = function() {};
  return counter;
}

let c:Counter = getCounter(9);
c(10)
c.reset()
console.log(c.interval)