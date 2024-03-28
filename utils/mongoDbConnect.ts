"use server";
import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB_NAME || '';

interface User {
    name: string;
    email: string;
    password: string;
}

export default async function connectToMongoDB() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export async function createUser({ name, email, password }: User): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const db = await connectToMongoDB();

    try {
        const usersCollection = db.collection('users234');

        const existingUser = await usersCollection.findOne({ email: email });
        if (existingUser) {
            return { success: false, message: 'Email already exists' };
        }

        await usersCollection.insertOne({
            name: name,
            email: email,
            password: hashedPassword,
            user_type: "credentials",
            created_at: new Date()
        });
        console.log('User created successfully.');
        return { success: true, message: 'User created successfully.' };
    } catch (error) {
        console.error('Error creating user:', error);
        return { success: false, message: 'error' };
    }
}

export async function subscribe(email: string): Promise<any> {
    const db = await connectToMongoDB();

    try {
        const subscribersCollection = db.collection('newsletterSubscribers');

        const existingSubscriber = await subscribersCollection.findOne({ email: email });
        if (existingSubscriber) {
            return { success: false, message: 'Email already exists, please Try Again!' };
        }

        await subscribersCollection.insertOne({
            email: email,
            subscribed_at: new Date()
        });
        console.log('Newsletter Subscription Successful.');
        return { success: true, message: 'Newsletter Subscription Successful.' };
    } catch (error) {
        console.error('Error subscribing user:', error);
        return { success: false, message: 'error' };
    }
}
