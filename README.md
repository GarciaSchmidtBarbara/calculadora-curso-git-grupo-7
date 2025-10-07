# calculadora-curso-git
Una calculadora simple de consola desarrollada en JavaScript con cliente interactivo de uso para los trabajos prácticos del Curso de git.

## Integrantes:
- Garcia Schmidt Barbara
- Kevin Nuñez
- Pablo deleon

## 📋 Características

- ✅ Operaciones matemáticas básicas
- 🔄 Cliente interactivo con menú

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio
cd calculadora-curso-git

# No requiere instalación de dependencias
# Solo necesitas tener Node.js instalado
```

## 📦 Requisitos

- Node.js (versión 12 o superior)

## 💻 Uso

### Cliente Interactivo

Ejecuta el cliente interactivo para usar la calculadora:

```bash
node cliente.js
```

Verás un menú como este:

```
=================================
     CALCULADORA INTERACTIVA     
=================================
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Potencia
6. Raíz Cuadrada
0. Salir
=================================
```

## 📂 Estructura del Proyecto

```
calculadora-curso-git/
├── src/
│   ├── calculadora.js
│   ├── cliente.js
│   └── tests.js
├── README.md
├── CHANGELOG.md
└── .gitignore
```

## 🔧 Funciones Disponibles

| Función | Estado | Descripción |
|---------|--------|-------------|
| `sumar(a, b)` | ✅ Implementada | Suma dos números |
| `restar(a, b)` | ⏳ Pendiente | Resta dos números |
| `multiplicar(a, b)` | ⏳ Pendiente | Multiplica dos números |
| `dividir(a, b)` | ⏳ Pendiente | Divide dos números |
| `potencia(base, exp)` | ✅ Implementada | Eleva un número a una potencia |
| `raizCuadrada(num)` | ✅ Implementada | Calcula la raíz cuadrada |
