import {Entity, model, property} from '@loopback/repository';

@model()
export class PlazasDisponibles extends Entity {
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
    id: true,
    generated: false,
    required: true,
  })
  cantidad: number;


  constructor(data?: Partial<PlazasDisponibles>) {
    super(data);
  }
}

export interface PlazasDisponiblesRelations {
  // describe navigational properties here
}

export type PlazasDisponiblesWithRelations = PlazasDisponibles & PlazasDisponiblesRelations;
