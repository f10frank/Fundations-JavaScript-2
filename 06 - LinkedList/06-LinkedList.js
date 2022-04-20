const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
    return this.len;
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
    // Tu código aca:
    let myArray = [];
    let current = this.head;

    while(current) {  // Pass for each element the Linkedlist and push the value in new Array
      myArray.push(current.value);
      current = current.next;
    }
    myArray = myArray.sort(function(a, b){return b - a}); // Order the array of + to -

    this.head = null; // Reset the Linkedlist
    
    for(let i = 0; i < myArray.length; i++) {// Complete the linkelist with the value array
      this.add(myArray[i]);
    }
  
  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  
    
LinkedList.prototype.insert = function(data,pos) {
	
  let newNode = new Node(data);
  let current = this.head;
  let mySize = this.size();
  let posActual = 0;

  if(pos > mySize) return false;
  while(current) {
    if(pos == posActual) {
      let temp = current.next;
      current.next = newNode;
      current.next.next = temp;
      this.len++;
    }
    current = current.next;
    posActual++;
  }

}
  




module.exports={
  LinkedList
}



