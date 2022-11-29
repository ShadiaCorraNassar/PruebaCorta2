import {Entity, model, property} from '@loopback/repository';

@model()
export class Filtros extends Entity {
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
  recomendaciones: string;

  @property({
    type: 'string',
    required: true,
  })
  requisitos: string;


  constructor(data?: Partial<Filtros>) {
    super(data);
  }
}

export interface FiltrosRelations {
  // describe navigational properties here
}

export type FiltrosWithRelations = Filtros & FiltrosRelations;
