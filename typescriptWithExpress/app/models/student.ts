import  mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  School : {
    type: String,
    required: true,
  },
  StartDate: {
    type: Date,
    required: true,
  },
});