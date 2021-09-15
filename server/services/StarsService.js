import { dbContext } from '../db/DbContext'

class StarsService {
  async getStars(query) {
    const stars = await dbContext.Stars.find(query)
    return stars
  }

  async createStar(starData) {
    const star = await dbContext.Stars.create(starData)
    return star
  }
}

export const starsService = new StarsService()
