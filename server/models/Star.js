import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema({
  name: { type: String },
  galaxyId: { type: mongoose.Schema.Types.ObjectId }
},
{ timestamps: true, toJSON: { virtuals: true } })

StarSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})
