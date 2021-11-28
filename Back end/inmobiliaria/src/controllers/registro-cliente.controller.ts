import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {RegistraseCliente} from '../models';
import {RegistraseClienteRepository} from '../repositories';

export class RegistroClienteController {
  constructor(
    @repository(RegistraseClienteRepository)
    public registraseClienteRepository : RegistraseClienteRepository,
  ) {}

  @post('/registrase-clientes')
  @response(200, {
    description: 'RegistraseCliente model instance',
    content: {'application/json': {schema: getModelSchemaRef(RegistraseCliente)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistraseCliente, {
            title: 'NewRegistraseCliente',
            
          }),
        },
      },
    })
    registraseCliente: RegistraseCliente,
  ): Promise<RegistraseCliente> {
    return this.registraseClienteRepository.create(registraseCliente);
  }

  @get('/registrase-clientes/count')
  @response(200, {
    description: 'RegistraseCliente model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RegistraseCliente) where?: Where<RegistraseCliente>,
  ): Promise<Count> {
    return this.registraseClienteRepository.count(where);
  }

  @get('/registrase-clientes')
  @response(200, {
    description: 'Array of RegistraseCliente model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RegistraseCliente, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RegistraseCliente) filter?: Filter<RegistraseCliente>,
  ): Promise<RegistraseCliente[]> {
    return this.registraseClienteRepository.find(filter);
  }

  @patch('/registrase-clientes')
  @response(200, {
    description: 'RegistraseCliente PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistraseCliente, {partial: true}),
        },
      },
    })
    registraseCliente: RegistraseCliente,
    @param.where(RegistraseCliente) where?: Where<RegistraseCliente>,
  ): Promise<Count> {
    return this.registraseClienteRepository.updateAll(registraseCliente, where);
  }

  @get('/registrase-clientes/{id}')
  @response(200, {
    description: 'RegistraseCliente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RegistraseCliente, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RegistraseCliente, {exclude: 'where'}) filter?: FilterExcludingWhere<RegistraseCliente>
  ): Promise<RegistraseCliente> {
    return this.registraseClienteRepository.findById(id, filter);
  }

  @patch('/registrase-clientes/{id}')
  @response(204, {
    description: 'RegistraseCliente PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistraseCliente, {partial: true}),
        },
      },
    })
    registraseCliente: RegistraseCliente,
  ): Promise<void> {
    await this.registraseClienteRepository.updateById(id, registraseCliente);
  }

  @put('/registrase-clientes/{id}')
  @response(204, {
    description: 'RegistraseCliente PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() registraseCliente: RegistraseCliente,
  ): Promise<void> {
    await this.registraseClienteRepository.replaceById(id, registraseCliente);
  }

  @del('/registrase-clientes/{id}')
  @response(204, {
    description: 'RegistraseCliente DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.registraseClienteRepository.deleteById(id);
  }
}
