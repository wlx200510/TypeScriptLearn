interface Item {
  content: string;
  done: boolean;
}


export default class Todo {
  /**
   * 静态方法：删除所有的任务子元素
   */
  static clearChildren(element: HTMLElement) {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }
  // 列表数据需要有两个基本的属性，可以理解为dom渲染所需属性
  items: Item[] = [];

  ulElement: HTMLElement = document.createElement('ul')

  constructor(initialTodos: string[] = []) {
    initialTodos.forEach(this.addItem.bind(this))
  }

  addItem(content: string) {
    this.items.push({
      content,
      done: false
    });
    this.updateUlElement(); // 因为数据和渲染dom要手动触发，因此要有这个更新dom的渲染函数
  }

  removeItem(index) {
    this.items.splice(index, 1)
    this.updateUlElement();
  }

  doneItem(index: number):void {
    this.items[index].done = !this.items[index].done
    let itemContentElement = <HTMLElement>document.getElementsByClassName('todo-item').item(index)
    itemContentElement.style.textDecoration = this.items[index].done ? 'line-through' : 'none'
  }

  finishAllItem() {
    this.items.forEach((item, index) => {
      item.done = true
    })
    this.updateUlElement()
  }

  updateUlElement() {
    Todo.clearChildren(this.ulElement)
    this.items.forEach((item, index) => {
      let liElement:HTMLElement = document.createElement('li')
      let labelElement:HTMLElement = document.createElement('label')
      liElement.appendChild(labelElement)

      let checkboxElement: HTMLInputElement = document.createElement('input')
      checkboxElement.type = 'checkbox';
      checkboxElement.checked = item.done;
      checkboxElement.onchange = (e) => { this.doneItem(index) }

      labelElement.appendChild(checkboxElement);

      let textElement = document.createElement('span')
      textElement.classList.add('todo-item')
      textElement.innerText = item.content
      textElement.style.textDecoration = item.done ? 'line-through' : 'none'

      let deletebutton = document.createElement('button')
      deletebutton.innerText = '删除'
      deletebutton.addEventListener('click', (e) => {
        this.removeItem(index)
      })
      deletebutton.classList.add("del")

      labelElement.appendChild(textElement)
      liElement.appendChild(deletebutton)

      this.ulElement.appendChild(liElement)
    })
  }

  /**
   * 为页面增加一个添加todo的功能 这个要单独append到容器组件中
   */

  getAddItemElement() {
    let addItemElement = document.createElement('div')

    let addInputElement = document.createElement('input')
    addInputElement.type = 'text'
    addItemElement.appendChild(addInputElement)

    let addButtonElement = document.createElement('button')
    addButtonElement.innerText = '增加项'
    addButtonElement.addEventListener('click', () => {
      this.addItem(addInputElement.value);  // 输入的文字添加到todo中
      addInputElement.value = ''
    })

    let finishedButtonElement = document.createElement('button')
    finishedButtonElement.innerText = '全部完成'
    finishedButtonElement.addEventListener('click', () => {
      this.finishAllItem();  // 输入的文字添加到todo中
    })

    addItemElement.appendChild(addButtonElement)
    addItemElement.appendChild(finishedButtonElement)

    return addItemElement
  }

  renderTo(element: HTMLElement) {
    const todoElement = document.createElement('div')

    todoElement.appendChild(this.ulElement);
    let addItemElement: HTMLElement = this.getAddItemElement()
    todoElement.appendChild(addItemElement)

    element.appendChild(todoElement)
  }
}