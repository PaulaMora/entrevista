// Interfaz para describir la estructura de los datos de un personaje
export interface Character {
    id: number;
    name: {
      first: string;
      middle: string;
      last: string;
    };
    images: {
      headShot: string;
      main: string;
    };
    age: string;
    gender: string;
    species: string;
    occupation: string;
    sayings: string[];
  }