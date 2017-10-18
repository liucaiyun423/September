const mongoose= require('mongoose');
const  {Schema} = mongoose;
const mongoosePaginate = require('mongoose-paginate');

const RecipientSchema = require('./Recipient');
const surveySchema = 
  new Schema({  title: String,
                body: String,
                subject: String,
                recipients: [RecipientSchema],
                yes: { type: Number, default: 0},
                no: { type: Number, default: 0},
                _user: {type: Schema.Types.ObjectId, ref: 'User'},
                dateSent: Date,
                lastResponded: Date
            });
              
surveySchema.plugin(mongoosePaginate);
mongoose.model('surveys', surveySchema);