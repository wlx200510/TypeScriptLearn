// 泛型~ 可以简单理解为 参数是type的函数，以type作为一个变量贯穿定义，使用时变成实际类型
function createArray<T>(length: number, value: T): T[] {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

// 保证用这个函数的时候就知道传入和返回的值的类型
createArray<string>(4, 'x');
createArray<number>(4, 5);

// 使用多个泛型完成逻辑
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, 'seven']);

// 那有一种情况，我们还得对泛型的属性和方法进行操作，编译报错怎么办
// 解决方法，定义接口，从而提前约定需要的属性和方法，而后用extends关键字来约束泛型

interface TypeWise {
  length: number;
  foo(bar: string): void;
}

function tempIdentity<T extends TypeWise>(arg: T): T {
  console.log(arg.length);
  arg.foo('hi');
  return arg
}