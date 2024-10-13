//* Declaracion de variables con tipos  -------------------------------------------------

let nombre: string;

let numero: number;

let Booleano: Boolean;

let nulo: null;

let Arreglo: number[] = [1, 2, 3, 4];

let Fecha: Date = new Date();

//* Interfaces con tipos -------------------------------------------------

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

const unaCosa = <T>(x: T, y: T) => {
  if (typeof x === "string" || typeof y === "string") {
    return `${x} ${y}`;
  }
};

console.log(unaCosa<string>("hola", "Mundo"));
console.log(unaCosa<number>(2, 3));

//* Type Narrowing mediante Type Predicates -------------------------------------------------

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

const Funcion = (fecha: Date | string): string => {
  if (fecha instanceof Date) {
    return fecha.toDateString();
  }
  return fecha;
};

//* Operador in para Type narrowing -------------------------------------------------

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
