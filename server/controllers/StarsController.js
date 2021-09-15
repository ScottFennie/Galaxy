
import { starsService } from '../services/StarsService'
import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getStars)
      .post('', this.createStar)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getStars(req, res, next) {
    try {
      const stars = await starsService.getStars(req.query)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
