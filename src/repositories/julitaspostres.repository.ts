import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DblocalDataSource} from '../datasources';
import {Julitaspostres, JulitaspostresRelations} from '../models';

export class JulitaspostresRepository extends DefaultCrudRepository<
  Julitaspostres,
  typeof Julitaspostres.prototype.id,
  JulitaspostresRelations
> {
  constructor(
    @inject('datasources.dblocal') dataSource: DblocalDataSource,
  ) {
    super(Julitaspostres, dataSource);
  }
}
