class Calculadora {

  constructor() {
      this.memoria = 0; 
  }

  guardarEnMemoria(resultado) {
    if (!isNaN(resultado) && isFinite(resultado)) {
        this.memoria = resultado;
    }
  }

  obtenerMemoria() {
    return this.memoria;
  }

  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return Math.floor(a / b);
  }

  potencia(base, exponente) {
    return base ** exponente;
  }

  raizCuadrada(numero) {
    return Math.sqrt(numero);
  }
  factorial(numero) {
    var result = numero;
    if (numero === 0 || numero === 1)
      return 1;
    while (numero > 1) {
      numero--;
      result *= numero;
    }
    return result;
  }

  calcularMaximo(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      throw new Error("Debe proporcionar un array no vacío de números");
    }
    return Math.max(...numeros);
  }

  calcularLogaritmo(numero, base) {
    if (numero <= 0 || base <= 1) {
      throw new Error("Número debe ser mayor que 0 y base debe ser mayor que 1");
    }
    return Math.log(numero) / Math.log(base);
  }
  resto(dividendo, divisor) {
    return dividendo - this.multiplicar(Math.floor(dividendo / divisor), divisor);
  }

  porcentaje(a, b) {
    if (b === 0) {
      throw new Error("No se puede calcular el porcentaje si el total (b) es cero");
    }
    return (a / b) * 100;
  }

}


// Exportar para usar en tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('calc.sumar(5, 3):', calc.sumar(5, 3));
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(a, b)');
console.log('- calc.dividir(a, b)');
console.log('- calc.potencia(base, exponente)');
console.log('- calc.porcentaje(a, b)');
console.log('- calc.raizCuadrada(numero)');