// 声明语句
/**
 * 当引用外部第三方库时，由于没有定义类型，ts编译时会报错，为此引入declare关键字
 * 现在成熟的第三方库为了兼容ts, 都衍生除了.d.ts为后缀的声明文件，推荐使用@types来管理
 */

declare var $: (string) => any;  //declare关键字定义的语句 编译结果中会删除
$('#foo')

// npm install @types/jquery --save-dev

// 字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';   // 某一变量只能是这三者之一
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll')
handleEvent(document.getElementById('world'), 'click')

// alias and string type are all use type to singature