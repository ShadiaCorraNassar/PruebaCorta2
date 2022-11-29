import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {PlazasDisponibles, PlazasDisponiblesRelations} from '../models';

export class PlazasDisponiblesRepository extends DefaultCrudRepository<
  PlazasDisponibles,
  typeof PlazasDisponibles.prototype.cantidad,
  PlazasDisponiblesRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(PlazasDisponibles, dataSource);
  }
}
