import {Entity, model, property} from '@loopback/repository';

@model()
export class PlazasDisponisbles extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;


  constructor(data?: Partial<PlazasDisponisbles>) {
    super(data);
  }
}

export interface PlazasDisponisblesRelations {
  // describe navigational properties here
}

export type PlazasDisponisblesWithRelations = PlazasDisponisbles & PlazasDisponisblesRelations;
