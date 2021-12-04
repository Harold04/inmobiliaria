import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {RegistrarAsesor, RegistrarAsesorRelations} from '../models';

export class RegistrarAsesorRepository extends DefaultCrudRepository<
  RegistrarAsesor,
  typeof RegistrarAsesor.prototype.id,
  RegistrarAsesorRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(RegistrarAsesor, dataSource);
  }
}
