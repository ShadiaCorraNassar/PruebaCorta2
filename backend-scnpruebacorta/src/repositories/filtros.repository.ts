import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Filtros, FiltrosRelations} from '../models';

export class FiltrosRepository extends DefaultCrudRepository<
  Filtros,
  typeof Filtros.prototype.id,
  FiltrosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Filtros, dataSource);
  }
}
