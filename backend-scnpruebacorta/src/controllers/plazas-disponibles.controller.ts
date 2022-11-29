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
import {PlazasDisponibles} from '../models';
import {PlazasDisponiblesRepository} from '../repositories';

export class PlazasDisponiblesController {
  constructor(
    @repository(PlazasDisponiblesRepository)
    public plazasDisponiblesRepository : PlazasDisponiblesRepository,
  ) {}

  @post('/plazas-disponibles')
  @response(200, {
    description: 'PlazasDisponibles model instance',
    content: {'application/json': {schema: getModelSchemaRef(PlazasDisponibles)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlazasDisponibles, {
            title: 'NewPlazasDisponibles',
            exclude: ['id'],
          }),
        },
      },
    })
    plazasDisponibles: Omit<PlazasDisponibles, 'id'>,
  ): Promise<PlazasDisponibles> {
    return this.plazasDisponiblesRepository.create(plazasDisponibles);
  }

  @get('/plazas-disponibles/count')
  @response(200, {
    description: 'PlazasDisponibles model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PlazasDisponibles) where?: Where<PlazasDisponibles>,
  ): Promise<Count> {
    return this.plazasDisponiblesRepository.count(where);
  }

  @get('/plazas-disponibles')
  @response(200, {
    description: 'Array of PlazasDisponibles model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PlazasDisponibles, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PlazasDisponibles) filter?: Filter<PlazasDisponibles>,
  ): Promise<PlazasDisponibles[]> {
    return this.plazasDisponiblesRepository.find(filter);
  }

  @patch('/plazas-disponibles')
  @response(200, {
    description: 'PlazasDisponibles PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlazasDisponibles, {partial: true}),
        },
      },
    })
    plazasDisponibles: PlazasDisponibles,
    @param.where(PlazasDisponibles) where?: Where<PlazasDisponibles>,
  ): Promise<Count> {
    return this.plazasDisponiblesRepository.updateAll(plazasDisponibles, where);
  }

  @get('/plazas-disponibles/{id}')
  @response(200, {
    description: 'PlazasDisponibles model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PlazasDisponibles, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PlazasDisponibles, {exclude: 'where'}) filter?: FilterExcludingWhere<PlazasDisponibles>
  ): Promise<PlazasDisponibles> {
    return this.plazasDisponiblesRepository.findById(id, filter);
  }

  @patch('/plazas-disponibles/{id}')
  @response(204, {
    description: 'PlazasDisponibles PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlazasDisponibles, {partial: true}),
        },
      },
    })
    plazasDisponibles: PlazasDisponibles,
  ): Promise<void> {
    await this.plazasDisponiblesRepository.updateById(id, plazasDisponibles);
  }

  @put('/plazas-disponibles/{id}')
  @response(204, {
    description: 'PlazasDisponibles PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() plazasDisponibles: PlazasDisponibles,
  ): Promise<void> {
    await this.plazasDisponiblesRepository.replaceById(id, plazasDisponibles);
  }

  @del('/plazas-disponibles/{id}')
  @response(204, {
    description: 'PlazasDisponibles DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.plazasDisponiblesRepository.deleteById(id);
  }
}
