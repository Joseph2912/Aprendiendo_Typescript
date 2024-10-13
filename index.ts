//* Declaracion de variables con tipos  -------------------------------------------------

let nombre: string;

let numero: number;

let Booleano: Boolean;

let nulo: null;

let Arreglo: number[] = [1, 2, 3, 4];

let Fecha: Date = new Date();

//* Interfaces con tipos -------------------------------------------------
//* Las interfaces se utilizan para definir la forma que debe tener un objeto o una clase. Es una forma de contrato para garantizar que una clase u objeto cumpla con un conjunto de propiedades o métodos.

const Persona: {
  nombre: string;
  apellido: string;
  ocupacion?: string;
  edad: number;
  direccion: { calle: string; pais: string; ciudad: string };
} = {
  nombre: "Tony",
  apellido: "stark",
  ocupacion: undefined,
  edad: 28,
  direccion: {
    calle: "P sherman",
    pais: "Maiami",
    ciudad: "nose",
  },
};

Persona.ocupacion = "CEO";

//* Clases y Objetos -------------------------------------------------
//* Las clases se utilizan para crear objetos que comparten una estructura y comportamiento comunes. Son la base de la programación orientada a objetos en TypeScript.

class Vaca {
  nombre: string;
  ID: number;

  constructor(nombre: string, ID: number) {
    this.nombre = nombre;
    this.ID = ID;
  }
  Muuu(): void {
    console.log(`Hola soy la vaca ${this.nombre} y mi ID es ${this.ID}`);
  }
}

const laVacaQUe = new Vaca("Lola", 2146);

laVacaQUe.Muuu();

//* Herencia de clases -------------------------------------------------
//*La herencia se utiliza cuando una clase (hija) necesita heredar propiedades y métodos de otra clase (padre). Esto permite reutilizar código y extender el comportamiento de las clases existentes.
//! La clase Vaca buena esta heredando de la clase vaca de la seccion anterior

class VacaBuena extends Vaca {
  leche: string;

  constructor(nombre: string, ID: number, leche: string) {
    super(nombre, ID);
    this.leche = leche;
  }

  BuenaVaca(): void {
    console.log(`la vaca contenta da leche ${this.leche}`);
  }
}

//* Implementación de interfaces -------------------------------------------------
//* Cuando una clase implementa una interfaz, está obligada a definir todas las propiedades y métodos que la interfaz exige. Esto asegura que la clase cumple con un contrato.

interface IPerro {
  raza: string;
  color: string;
  ladrar(): void;
}

class Manada implements IPerro {
  raza: string;
  color: string;
  tamaño: number;

  constructor(raza: string, color: string, tamaño: number) {
    this.raza = raza;
    this.color = color;
    this.tamaño = tamaño;
  }
  ladrar(): void {
    console.log(
      `El perro de raza ${this.raza} y tamaño ${this.tamaño} está ladrando.`
    );
  }
}

//* Declaración de funciones con tipos -------------------------------------------------
//* Permite definir tipos tanto para los parámetros de entrada como para el valor de retorno, aumentando la seguridad del código.

const test = (valor: string | boolean | number): boolean => {
  if (typeof valor === "string") {
    return valor.length > 0;
  }
  if (typeof valor === "number") {
    return valor > 0;
  }
  return valor;
};

//* Funciones genericas -------------------------------------------------
//* Las funciones genéricas permiten trabajar con tipos que no están definidos hasta que se usa la función. Esto proporciona flexibilidad al trabajar con varios tipos, sin necesidad de crear múltiples versiones de la misma función.

const unaCosa = <T>(x: T, y: T) => {
  if (typeof x === "string" || typeof y === "string") {
    return `${x} ${y}`;
  }
};

console.log(unaCosa<string>("hola", "Mundo"));
console.log(unaCosa<number>(2, 3));

//* Type Narrowing mediante Type Predicates -------------------------------------------------
//* El type narrowing reduce un tipo de dato amplio (como string | number) a un tipo más específico mediante comprobaciones. Esto permite que el código trate el valor de manera más precisa.

interface Bicicleta {
  nombre: string;
  ruedas: number;
  asientos: number;
}

interface Caminoneta {
  marca: string;
  asientos: number;
  ruedas: number;
}

const miCarro = (vehiculo: Bicicleta | Caminoneta): vehiculo is Caminoneta =>
  (vehiculo as Caminoneta).ruedas !== undefined;

const mencionarMisCaracteristicas = (vehiculo: Bicicleta | Caminoneta) => {
  if (miCarro(vehiculo)) {
    console.log(vehiculo.ruedas);
  } else {
    console.log(vehiculo.asientos);
  }
};

//* instanceOf -------------------------------------------------
//* El operador instanceof se usa para verificar si un objeto es una instancia de una clase específica.

const Funcion = (fecha: Date | string): string => {
  if (fecha instanceof Date) {
    return fecha.toDateString();
  }
  return fecha;
};

//* Operador in para Type narrowing -------------------------------------------------
//* El operador in se usa para verificar si una propiedad específica existe en un objeto, y con ello se puede reducir el tipo.

interface Animal {
  nombre: string;
}

interface Pez extends Animal {
  tamaño: number;
}

interface Pajaro extends Animal {
  Alas: number;
}

const analizarAnimal = (Animal: Pez | Pajaro) => {
  if ("tamaño" in Animal) {
    console.log(Animal.tamaño);
  } else {
    console.log(Animal.Alas);
  }
};
