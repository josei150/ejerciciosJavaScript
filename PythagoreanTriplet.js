function triplets({ minFactor = 1, maxFactor = 30000, sum }) {
  const allTriplets = []

  const half = Math.floor(sum / 2)
  const third = Math.floor(half / 2)

  for (let index1 = 1; index1 <= half; index1++) {
    for (let index2 = third; index2 < half ; index2++) {
      for (let index3 = third; index3 <= half; index3++) {

        if(index1**2 + index2**2 === index3**2 && index1 < index2){
          
          if(index1 + index2 + index3 === sum){
            allTriplets.push([index1, index2, index3])
          }
        }
      }
    }
  }

  const resultTriples = []

  for (let index = 0; index < allTriplets.length; index++) {
      if(allTriplets[index][2] > maxFactor || allTriplets[index][0] < minFactor){
        continue
      }
    resultTriples.push(new Triplet(allTriplets[index][0], allTriplets[index][1], allTriplets[index][2]))
  }

  return resultTriples
}

class Triplet {
  constructor(a, b, c) {
    this.num1 = a
    this.num2 = b
    this.num3 = c
    
  }

  toArray() {
    return [this.num1, this.num2, this.num3]
  }
}

const tripe = triplets({sum : 30000}) //Esta prueba tarda 745,778 segundos, es para probar en local porque en la página de https://exercism.org/tracks/javascript/exercises/pythagorean-triplet no es posible. 
/* El valor de retorno debe ser 
        [1200, 14375, 14425],
        [1875, 14000, 14125],
        [5000, 12000, 13000],
        [6000, 11250, 12750],
        [7500, 10000, 12500],
¡Y así es! 😁 */
console.log(tripe);
