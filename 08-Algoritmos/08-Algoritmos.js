'use strict'

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - 1; j++) {
      if(array[j] > array[j+1]) {
        let aux = array[j]
        array[j] = array[j+1];
        array[j+1] = aux;

      }
    }
  }
  console.log(array);
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++) {
    for(let j = i - 1; j >= 0; j--) {
      if(array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i ++) {
    let minimun = array[i];
    let current = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < minimun) {
        minimun = array[j];
        current = j;
      }
    }
    if(current !== i) {
      array[current] = array[i];
      array[i] = minimun;
    }
  }
  return array;
}


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let left = [];
  let right = [];
  let pivot = array[0];

  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    } else right.push(array[i]);
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));

}

function merge(array1, array2) {
  let i = 0;
  let j = 0;
  let result = [];
  
  while(i < array1.length && j < array2.length) {
    if(array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
      }
  }
  return result.concat(array1.slice(i)).concat(array2.slice(j));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length == 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));

}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};