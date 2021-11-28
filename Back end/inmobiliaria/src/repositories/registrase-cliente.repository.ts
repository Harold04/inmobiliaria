import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {RegistraseCliente, RegistraseClienteRelations} from '../models';

export class RegistraseClienteRepository extends DefaultCrudRepository<
  RegistraseCliente,
  typeof RegistraseCliente.prototype.id,
  RegistraseClienteRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(RegistraseCliente, dataSource);
  }
}
