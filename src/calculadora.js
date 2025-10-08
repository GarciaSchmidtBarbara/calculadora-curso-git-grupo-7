class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    // TODO: Implementar multiplicación
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
console.log('- calc.raizCuadrada(numero)');