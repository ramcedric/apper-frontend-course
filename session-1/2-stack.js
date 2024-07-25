class Stack {
    constructor() {
      this.stack = [];
    }

    //String push method
    push(items) {
      if (Array.isArray(items)) {
        items.forEach(add => {
          if (typeof add === 'string') {
            this.stack.push(add);
          }
        });
      } else if (typeof items === 'string') {
        this.stack.push(items);
      }
    }
  
    //Remove last element
    pop() {
      if (this.stack.length === 0) {
        return 'Stack is currently empty.';
      }
      return this.stack.pop();
    }
  
    //Checking the stack
    check() {
      return this.stack;
    }
}

const stack = new Stack();
stack.push("Milk");
stack.push("Eggs");
console.log(stack.check()); //["Milk", "Eggs"]
console.log(stack.pop());   //"Eggs"
console.log(stack.check()); //["Milk"]
console.log(stack.pop());   //"Milk"
console.log(stack.check()); //[]
stack.push(["Ice Cream", 10, [], "Cellphone"]);
console.log(stack.check()); //["Ice Cream", "Cellphone"]
console.log(stack.pop());   //"Cellphone"
console.log(stack.check()); //["Ice Cream"]
console.log(stack.pop());   //"Ice Cream"
console.log(stack.check()); //[]
console.log(stack.pop());   //"Stack is currently empty."