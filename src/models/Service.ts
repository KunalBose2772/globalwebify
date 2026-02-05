import mongoose, { Schema, Document, Model } from 'mongoose';

// Service Schema - The "Template"
export interface IService extends Document {
    slug: string;
    title: string;
    seoTitleTemplate: string; // e.g., "Best {service} in {city}"
    seoDescriptionTemplate: string;
    contentTemplate: string; // Markdown or Blocks
    iconName: string;
    image: string;
}

const ServiceSchema: Schema = new Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    seoTitleTemplate: { type: String, required: true },
    seoDescriptionTemplate: { type: String, required: true },
    contentTemplate: { type: String, required: true },
    iconName: { type: String, required: true },
    image: { type: String, required: false },
}, { timestamps: true });

// Location Schema - The "Variables"
export interface ILocation extends Document {
    slug: string; // e.g. "ranchi"
    name: string; // "Ranchi"
    state: string; // "Jharkhand"
    isPrimary: boolean; // For sitemap priority
}

const LocationSchema: Schema = new Schema({
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    state: { type: String, required: true },
    isPrimary: { type: Boolean, default: false },
}, { timestamps: true });

// Prevent overwrite on HMR
export const Service: Model<IService> = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
export const Location: Model<ILocation> = mongoose.models.Location || mongoose.model<ILocation>('Location', LocationSchema);
