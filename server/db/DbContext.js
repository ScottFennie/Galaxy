import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy'
import { StarSchema } from '../models/Star'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema);

  Stars = mongoose.model('Star', StarSchema)
}

export const dbContext = new DbContext()
