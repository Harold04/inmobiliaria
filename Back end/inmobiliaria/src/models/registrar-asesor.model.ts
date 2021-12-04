import {Entity, model, property} from '@loopback/repository';

@model()
export class RegistrarAsesor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;

  constructor(data?: Partial<RegistrarAsesor>) {
    super(data);
  }
}

export interface RegistrarAsesorRelations {
  // describe navigational properties here
}

export type RegistrarAsesorWithRelations = RegistrarAsesor &
  RegistrarAsesorRelations;
