import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { galaxyService } from '../services/GalaxyService'
import BaseController from '../utils/BaseController'

export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxy')
    this.router
      .get('', this.getGalaxies)
      .post('', this.createGalaxy)
  }

  async getGalaxies(req, res, next) {
    try {
      const galaxies = await galaxyService.getGalaxies(req.query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxy = await galaxyService.createGalaxy(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
