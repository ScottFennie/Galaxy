import { dbContext } from '../db/DbContext'

class GalaxyService {
  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }

  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }
}

export const galaxyService = new GalaxyService()
