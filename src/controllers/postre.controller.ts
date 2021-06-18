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
import {Julitaspostres} from '../models';
import {JulitaspostresRepository} from '../repositories';

export class PostreController {
  constructor(
    @repository(JulitaspostresRepository)
    public julitaspostresRepository : JulitaspostresRepository,
  ) {}

  @post('/julitaspostres')
  @response(200, {
    description: 'Julitaspostres model instance',
    content: {'application/json': {schema: getModelSchemaRef(Julitaspostres)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Julitaspostres, {
            title: 'NewJulitaspostres',
            exclude: ['id'],
          }),
        },
      },
    })
    julitaspostres: Omit<Julitaspostres, 'id'>,
  ): Promise<Julitaspostres> {
    return this.julitaspostresRepository.create(julitaspostres);
  }

  @get('/julitaspostres/count')
  @response(200, {
    description: 'Julitaspostres model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Julitaspostres) where?: Where<Julitaspostres>,
  ): Promise<Count> {
    return this.julitaspostresRepository.count(where);
  }

  @get('/julitaspostres')
  @response(200, {
    description: 'Array of Julitaspostres model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Julitaspostres, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Julitaspostres) filter?: Filter<Julitaspostres>,
  ): Promise<Julitaspostres[]> {
    return this.julitaspostresRepository.find(filter);
  }

  @patch('/julitaspostres')
  @response(200, {
    description: 'Julitaspostres PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Julitaspostres, {partial: true}),
        },
      },
    })
    julitaspostres: Julitaspostres,
    @param.where(Julitaspostres) where?: Where<Julitaspostres>,
  ): Promise<Count> {
    return this.julitaspostresRepository.updateAll(julitaspostres, where);
  }

  @get('/julitaspostres/{id}')
  @response(200, {
    description: 'Julitaspostres model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Julitaspostres, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Julitaspostres, {exclude: 'where'}) filter?: FilterExcludingWhere<Julitaspostres>
  ): Promise<Julitaspostres> {
    return this.julitaspostresRepository.findById(id, filter);
  }

  @patch('/julitaspostres/{id}')
  @response(204, {
    description: 'Julitaspostres PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Julitaspostres, {partial: true}),
        },
      },
    })
    julitaspostres: Julitaspostres,
  ): Promise<void> {
    await this.julitaspostresRepository.updateById(id, julitaspostres);
  }

  @put('/julitaspostres/{id}')
  @response(204, {
    description: 'Julitaspostres PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() julitaspostres: Julitaspostres,
  ): Promise<void> {
    await this.julitaspostresRepository.replaceById(id, julitaspostres);
  }

  @del('/julitaspostres/{id}')
  @response(204, {
    description: 'Julitaspostres DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.julitaspostresRepository.deleteById(id);
  }
}
