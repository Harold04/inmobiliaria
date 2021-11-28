import {Entity, model, property} from '@loopback/repository';

@model()
export class RegistraseCliente extends Entity {
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


  constructor(data?: Partial<RegistraseCliente>) {
    super(data);
  }
}

export interface RegistraseClienteRelations {
  // describe navigational properties here
}

export type RegistraseClienteWithRelations = RegistraseCliente & RegistraseClienteRelations;
