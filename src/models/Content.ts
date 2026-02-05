import mongoose, { Schema, Document, Model } from 'mongoose';

// Blog
export interface IBlog extends Document {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    tags: string[];
    isPublished: boolean;
}

const BlogSchema: Schema = new Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    tags: [{ type: String }],
    isPublished: { type: Boolean, default: false },
}, { timestamps: true });

// Portfolio (Project)
export interface IPortfolio extends Document {
    slug: string;
    title: string;
    description: string;
    client: string;
    serviceCategory: string; // e.g. "Web Development"
    images: string[];
    liveUrl: string;
    isFeatured: boolean;
}

const PortfolioSchema: Schema = new Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    client: { type: String, required: true },
    serviceCategory: { type: String, required: true },
    images: [{ type: String }],
    liveUrl: { type: String },
    isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

// Team
export interface ITeam extends Document {
    name: string;
    role: string;
    bio: string;
    image: string;
    socials: {
        linkedin?: string;
        twitter?: string;
    };
    order: number;
}

const TeamSchema: Schema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, required: true },
    socials: {
        linkedin: String,
        twitter: String
    },
    order: { type: Number, default: 0 },
}, { timestamps: true });

export const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export const Portfolio: Model<IPortfolio> = mongoose.models.Portfolio || mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);
export const Team: Model<ITeam> = mongoose.models.Team || mongoose.model<ITeam>('Team', TeamSchema);
