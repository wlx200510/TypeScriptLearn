interface Person1 {
  name?: string;
  age?: number; // 可选属性
  [propName: string]: any; //任意属性
}
// 若定义了任意属性，确定属性和可选属性都得是它的子属性(任意属性的类型往往是any)
let tom: Person1 = {
  name: 'Tom',
  gender: 'male'
}

// 数组的类型
let fibonacci: number[] = [1, 1, 2, 3, 5];

let fibonacci_temp: Array<number> = [1, 0, 2, 3];

// 类数组不是数组
// IArguments(函数参数)  NodeList  HTMLCollection 这些都是内置的接口类

function sum() {
  let args: IArguments = arguments
}

interface Cube {
  kind: 'cube'; // 接口类型的标识字段
  size: number;
}

interface Cuboid {
  kind: 'cuboid'; // 接口类型的标识字段
  width: number;
  depth: number;
  height: number;
}

type Prism = Cube | Cuboid;

function assertNever(arg: never): never {
  throw new Error("Possible new tagged type: " + arg);
}

function volume(prism: Prism): number {
  switch(prism.kind) {
    case 'cube':
      return prism.size * prism.size * prism.size;
    case 'cuboid':
      return prism.width * prism.depth * prism.height;
    default:
      assertNever(prism);
      break;
  }
}
// 枚举类型 查看生成的代码可以发现 这个枚举是双线赋值 即 Size.S = 1 && Size[1] = 'S'
enum Size {
  S,
  M,
  L,
  XL
}

var size = Size.S;
++size;
console.log(Size[size])

size = Size.XL;
--size;
console.log(Size[size])

size = Size.XL;
++size;
console.log(Size[size])

let mySum: (x: number, y: number) => number = function(x: number, y:number): number {
  return x + y;
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);