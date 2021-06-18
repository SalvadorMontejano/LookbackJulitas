import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Julitaspostres extends Entity {
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
  nomPostre: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Julitaspostres>) {
    super(data);
  }
}

export interface JulitaspostresRelations {
  // describe navigational properties here
}

export type JulitaspostresWithRelations = Julitaspostres & JulitaspostresRelations;
