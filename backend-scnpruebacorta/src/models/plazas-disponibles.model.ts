import {Entity, model, property} from '@loopback/repository';

@model()
export class PlazasDisponibles extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

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


  constructor(data?: Partial<PlazasDisponibles>) {
    super(data);
  }
}

export interface PlazasDisponiblesRelations {
  // describe navigational properties here
}

export type PlazasDisponiblesWithRelations = PlazasDisponibles & PlazasDisponiblesRelations;
