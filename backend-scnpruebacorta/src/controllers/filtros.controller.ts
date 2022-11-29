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
import {Filtros} from '../models';
import {FiltrosRepository} from '../repositories';

export class FiltrosController {
  constructor(
    @repository(FiltrosRepository)
    public filtrosRepository : FiltrosRepository,
  ) {}

  @post('/filtros')
  @response(200, {
    description: 'Filtros model instance',
    content: {'application/json': {schema: getModelSchemaRef(Filtros)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filtros, {
            title: 'NewFiltros',
            exclude: ['id'],
          }),
        },
      },
    })
    filtros: Omit<Filtros, 'id'>,
  ): Promise<Filtros> {
    return this.filtrosRepository.create(filtros);
  }

  @get('/filtros/count')
  @response(200, {
    description: 'Filtros model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Filtros) where?: Where<Filtros>,
  ): Promise<Count> {
    return this.filtrosRepository.count(where);
  }

  @get('/filtros')
  @response(200, {
    description: 'Array of Filtros model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Filtros, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Filtros) filter?: Filter<Filtros>,
  ): Promise<Filtros[]> {
    return this.filtrosRepository.find(filter);
  }

  @patch('/filtros')
  @response(200, {
    description: 'Filtros PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filtros, {partial: true}),
        },
      },
    })
    filtros: Filtros,
    @param.where(Filtros) where?: Where<Filtros>,
  ): Promise<Count> {
    return this.filtrosRepository.updateAll(filtros, where);
  }

  @get('/filtros/{id}')
  @response(200, {
    description: 'Filtros model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Filtros, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Filtros, {exclude: 'where'}) filter?: FilterExcludingWhere<Filtros>
  ): Promise<Filtros> {
    return this.filtrosRepository.findById(id, filter);
  }

  @patch('/filtros/{id}')
  @response(204, {
    description: 'Filtros PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Filtros, {partial: true}),
        },
      },
    })
    filtros: Filtros,
  ): Promise<void> {
    await this.filtrosRepository.updateById(id, filtros);
  }

  @put('/filtros/{id}')
  @response(204, {
    description: 'Filtros PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() filtros: Filtros,
  ): Promise<void> {
    await this.filtrosRepository.replaceById(id, filtros);
  }

  @del('/filtros/{id}')
  @response(204, {
    description: 'Filtros DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.filtrosRepository.deleteById(id);
  }
}
