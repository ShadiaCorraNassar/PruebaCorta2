import {Entity, model, property} from '@loopback/repository';

@model()
export class Aspirantes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  edad: number;

  @property({
    type: 'string',
    required: true,
  })
  nivelAcademico: string;

  @property({
    type: 'string',
    required: true,
  })
  experiencia: string;

  @property({
    type: 'string',
    required: true,
  })
  genero: string;


  constructor(data?: Partial<Aspirantes>) {
    super(data);
  }
}

export interface AspirantesRelations {
  // describe navigational properties here
}

export type AspirantesWithRelations = Aspirantes & AspirantesRelations;
