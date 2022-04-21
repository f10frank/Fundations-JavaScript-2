const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)          
//             /     \
//          (7)     (12)       
//         /  \      /  \
//      (2)  (9)  (11)  (15)   
BinarySearchTree.prototype.search= function(value){
    if(this.value === value) return value;

    if(this.value < value) {
      if(this.right === null) return "no se encontró el valor";
      else return this.right.search(value);
    }
  
    if(this.value > value) {
      if(this.left === null) return "no se encontró el valor";
      else return this.left.search(value);
    }

}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2


BinarySearchTree.prototype.height= function(){
    // There isn't nodes left and right
    if(this.left == null && this.right == null) return 0;

    else {
        if(this.left !== null && this.right == null) {          // Left -> Yes Right -> No; increase left
            return this.left.height() + 1;
        } else if(this.left == null && this.right !== null) {   // Left -> No Right -> Yes; increase right
            return this.right.height() + 1;
        } else {
            return Math.max(this.left.height() + 1, this.right.height() + 1); //return the max number 
        }
        
    }
    
        


}

module.exports={
    BinarySearchTree
}