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
import {RegistrarAsesor} from '../models';
import {RegistrarAsesorRepository} from '../repositories';

export class RegistroAsesoresController {
  constructor(
    @repository(RegistrarAsesorRepository)
    public registrarAsesorRepository : RegistrarAsesorRepository,
  ) {}

  @post('/registrar-asesors')
  @response(200, {
    description: 'RegistrarAsesor model instance',
    content: {'application/json': {schema: getModelSchemaRef(RegistrarAsesor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistrarAsesor, {
            title: 'NewRegistrarAsesor',
            exclude: ['id'],
          }),
        },
      },
    })
    registrarAsesor: Omit<RegistrarAsesor, 'id'>,
  ): Promise<RegistrarAsesor> {
    return this.registrarAsesorRepository.create(registrarAsesor);
  }

  @get('/registrar-asesors/count')
  @response(200, {
    description: 'RegistrarAsesor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RegistrarAsesor) where?: Where<RegistrarAsesor>,
  ): Promise<Count> {
    return this.registrarAsesorRepository.count(where);
  }

  @get('/registrar-asesors')
  @response(200, {
    description: 'Array of RegistrarAsesor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RegistrarAsesor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RegistrarAsesor) filter?: Filter<RegistrarAsesor>,
  ): Promise<RegistrarAsesor[]> {
    return this.registrarAsesorRepository.find(filter);
  }

  @patch('/registrar-asesors')
  @response(200, {
    description: 'RegistrarAsesor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistrarAsesor, {partial: true}),
        },
      },
    })
    registrarAsesor: RegistrarAsesor,
    @param.where(RegistrarAsesor) where?: Where<RegistrarAsesor>,
  ): Promise<Count> {
    return this.registrarAsesorRepository.updateAll(registrarAsesor, where);
  }

  @get('/registrar-asesors/{id}')
  @response(200, {
    description: 'RegistrarAsesor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RegistrarAsesor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RegistrarAsesor, {exclude: 'where'}) filter?: FilterExcludingWhere<RegistrarAsesor>
  ): Promise<RegistrarAsesor> {
    return this.registrarAsesorRepository.findById(id, filter);
  }

  @patch('/registrar-asesors/{id}')
  @response(204, {
    description: 'RegistrarAsesor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistrarAsesor, {partial: true}),
        },
      },
    })
    registrarAsesor: RegistrarAsesor,
  ): Promise<void> {
    await this.registrarAsesorRepository.updateById(id, registrarAsesor);
  }

  @put('/registrar-asesors/{id}')
  @response(204, {
    description: 'RegistrarAsesor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() registrarAsesor: RegistrarAsesor,
  ): Promise<void> {
    await this.registrarAsesorRepository.replaceById(id, registrarAsesor);
  }

  @del('/registrar-asesors/{id}')
  @response(204, {
    description: 'RegistrarAsesor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.registrarAsesorRepository.deleteById(id);
  }
}
