/**
 * 注意需要编写的Todo的类的用法过程
 */
import Todo from './Todo.js';
const appElement = document.getElementById('app');
const todo = new Todo([
    '查看TodoList的全部结构',
    '开始编写Todo的类文件',
    '添加删除功能，体会代码补全、代码提示',
    '添加全部完成功能'
]);
todo.renderTo(appElement); // 说明最后要有一个render方法
