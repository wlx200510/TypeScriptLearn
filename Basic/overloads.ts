// 函数重载，允许一个函数接受不同数量或类型的参数时，作出不同处理

/**
 * 输入数字123 返回翻转的数字321
 * 输入字符串'hello' 返回翻转的字符串'olleh'
 * 利用typeScript的函数重载功能实现
 */

 function reverse(x: string): string;
 function reverse(x: number): number;
 function reverse(x: number | string): number | string {
   if (typeof x === 'number') {
     return Number(x.toString().split('').reverse().join(''));
   } else if (typeof x === 'string') {
     return x.split('').reverse().join('');
   }
 }

// 上面的类型判断也可以用断言实现
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
//  即为多次定义函数reverse，最后一次是函数实现。