
import mongoose, { Document, Schema } from 'mongoose';

export interface IHelpRequest extends Document {
  title: string;
  description: string;
  location: string;
  status: string;
  priority: string;
  volunteerId?: string;
}

const HelpRequestSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true, enum: ['open', 'in progress', 'closed'], default: 'open' },
  priority: { type: String, required: true, enum: ['low', 'medium', 'high'], default: 'medium' },
  volunteerId: { type: String }
});

export default mongoose.model<IHelpRequest>('HelpRequest', HelpRequestSchema);
